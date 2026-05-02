import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "@/lib/mongo";

const client = await clientPromise;

export const auth = betterAuth({
  database: mongodbAdapter(client.db("tile-gallery"), {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});