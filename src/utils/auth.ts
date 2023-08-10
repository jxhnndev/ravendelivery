import { NextAuthOptions, User, getServerSession } from "next-auth";
import { SanityAdapter } from 'next-auth-sanity';
import GoogleProvider from "next-auth/providers/google";
import client from "./sanity";
import { singleUserQuery } from "./queries";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: SanityAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    // check user in db and add if user is admin info to the token
    async jwt({ token }) {
      const userInDb = await client.fetch(singleUserQuery, {
        email: token.email!
      })
      token.isAdmin = userInDb?.isAdmin!;
      return token;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);