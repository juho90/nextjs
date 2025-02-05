import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NEXTAUTH_DEBUG === "true",
  callbacks: {
    async session({ session, token }) {
      console.log("🟢 Session Data:", session);
      console.log("🟢 Token Data:", token);
      if (session?.user) {
        session.user.name = token.sub; // 사용자 ID 추가
      }
      return session;
    },
  },
};
