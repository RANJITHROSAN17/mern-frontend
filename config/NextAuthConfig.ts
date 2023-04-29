//options to be improved with:vrenext-auth.js.org/configuration/options
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/config/MongoDBClient";
export  const nextAuthConfig: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt'
    },
    jwt: {
      secret: process.env.NEXTAUTH_SECRET,
    },
    pages: {
    //   signIn: '/mern-frontend/api/auth/signin',
    //   signOut: '/mern-frontend/api/auth/signout',
    //   error: '/mern-frontend/api/auth/error', // Error code passed in query string as ?error=
    //   verifyRequest: '/mern-frontend/auth/verify-request', // (used for check email message)
    //   newUser: '/mern-frontend/api/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    theme: {
      colorScheme: "dark", // "auto" | "dark" | "light"
      brandColor: "", // Hex color code
      logo: "", // Absolute URL to image
      buttonText: "" // Hex color code
    },
    callbacks: {
    //   async redirect({ url, baseUrl }) {
    //     // console.log(url, baseUrl);
    //     return baseUrl + "/mern-frontend/ro";
    //   },
    },
    events: {},
    adapter: MongoDBAdapter(clientPromise),
    debug: false,
  }
  