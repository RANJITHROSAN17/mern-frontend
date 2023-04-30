// this should work when next-auth fixes some bugs


// import NextAuth, { NextAuthOptions } from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

// console.log(process.env.GOOGLE_CLIENT_ID);
// console.log(process.env.GOOGLE_CLIENT_SECRET);
// console.log(process.env.NEXTAUTH_SECRET);

// const nextAuthConfig: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     })
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: 'jwt'
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//   },
//   pages: {
//     signIn: "/mern-frontend/ro/login",
//   },
//   callbacks: {
//   },
//   events: {},
//   debug: false,
// }

// const handler = NextAuth(nextAuthConfig)

// export { handler as GET, handler as POST }