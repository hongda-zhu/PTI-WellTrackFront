import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { JWT } from "next-auth/jwt";

const axios = require("axios");

export const authOptions: NextAuthOptions = {
  providers: [
    // Google Provider
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID ||
        (() => {
          throw new Error("GOOGLE_CLIENT_ID is not defined");
        })(),
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ||
        (() => {
          throw new Error("GOOGLE_CLIENT_SECRET is not defined");
        })(),
    }),

    // Email/Password Login Provider 
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post("http://backend:3001/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (response.status === 200 && response.data) {
            return { id: response.data.id, email: response.data.email }; // Ensure 'id' is included
          }
        } catch (error) {
          console.error("Login failed:", error);
        }

        return null; // Return null if authentication fails
      },
    }),

    // Email/Password Register Provider
    CredentialsProvider({
      name: "Register",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post("http://backend:3001/register", {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (response.status === 201 && response.data) {
            return { id: response.data.id, email: response.data.email }; // Ensure 'id' is included
          }
        } catch (error) {
          console.error("Registration failed:", error);
        }

        return null; // Return null if registration fails
      },
    }),
    
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 30 días en segundos
    updateAge: 3 * 24 * 60 * 60, // Actualiza la sesión cada 24 horas
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (token) {
        session.user.email = token.email;
        session.user.id = token.id; // Asegúrate de que 'id' esté en el token
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Redirige a la página principal si el login fue exitoso
      if (url === baseUrl || url.startsWith(baseUrl)) {
        return baseUrl; // Redirige a la página principal
      }
      return url;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
