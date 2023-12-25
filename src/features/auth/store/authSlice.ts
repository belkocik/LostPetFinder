import {create} from 'zustand';
import {z} from 'zod';
import {jwtDecode} from 'jwt-decode';

//* https://doichevkostia.dev/blog/authentication-store-with-zustand/
//? decoded JWT
// {
//     "sub": 1,
//     "email": "test@gmail.com",
//     "iat": 1703508475,
//     "exp": 1703509375
//   }

const TokenDataSchema = z.object({
  sub: z.string(),
  email: z.string(),
  iat: z.number(),
  exp: z.number(),
});

type TokenData = z.infer<typeof TokenDataSchema>;

type AuthStore = {
  accessToken: string | undefined;
  accessTokenData: TokenData | undefined;
  refreshToken: string | undefined;
  isAuthorized: boolean;

  actions: {
    setAccessToken: (accessToken: string | undefined) => void;
    setRefreshToken: (refreshToken: string | undefined) => void;
    clearTokens: () => void;
  };
};

export const decodeAccessToken = (accessToken: string) =>
  TokenDataSchema.parse(jwtDecode<TokenData>(accessToken));

export const useAuthStore = create<AuthStore>(set => ({
  accessToken: undefined,
  accessTokenData: undefined,
  refreshToken: undefined,
  isAuthorized: false,

  actions: {
    setAccessToken: (accessToken: string | undefined) => {
      const accessTokenData = (() => {
        try {
          return accessToken ? decodeAccessToken(accessToken) : undefined;
        } catch (error) {
          console.error(error);
          return undefined;
        }
      })();
      set({
        accessToken,
        accessTokenData,
        isAuthorized: !!accessToken,
      });
    },
    setRefreshToken: (refreshToken: string | undefined) =>
      set({
        refreshToken,
      }),
    clearTokens: () =>
      set({
        accessToken: undefined,
        accessTokenData: undefined,
        refreshToken: undefined,
        isAuthorized: false,
      }),
  },
}));
