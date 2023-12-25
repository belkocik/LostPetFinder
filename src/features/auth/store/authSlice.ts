import {create} from 'zustand';
import {z} from 'zod';

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
};

export const useAuthStore = create<AuthStore>(() => ({
  accessToken: undefined,
  accessTokenData: undefined,
  refreshToken: undefined,
}));
