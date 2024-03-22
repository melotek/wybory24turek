import dbConnect from "@/libs/dbConnect";
import clientPromise from "@/libs/mongoClient";
import User from "@/models/user";
import { IUser } from "@/types";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcryptjs";
import { Document } from "mongoose";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

type AuthUser = IUser & Document;

export const authOptions = {
  // Providers array will be configured in the next steps
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Hasło", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        if (!credentials) return null;
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Email and password are required");
        }
        try {
          const user: any = User.findOne({ email: email });
          if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
              throw new Error("Invalid password");
            } else {
              return user;
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise) as Adapter,

  session: {
    strategy: "jwt",
  },
  callbacks: {
    // We can pass in additional information from the user document MongoDB returns
    async jwt({ token, user }: any) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
} satisfies NextAuthOptions;
export const getAuth = () => getServerSession(authOptions);
