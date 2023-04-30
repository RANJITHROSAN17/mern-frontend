import NextAuth from "next-auth"
import { nextAuthConfig } from "config/NextAuthConfig";
export default NextAuth(nextAuthConfig);