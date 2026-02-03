import {betterAuth} from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
//  better auth give you tools to easily implement authentication and authorization in your application.u can easily set up bur own database .it  supports various databases like mongodb ,postgresql ,mysql ,sqlite etc.

const client = new MongoClient(process.env.MONGODB_URI as string, {
    tls: true,
    tlsAllowInvalidCertificates: true,
    tlsAllowInvalidHostnames: true,
    minPoolSize: 0,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 30000,
});
const db = client.db("nextcareer");
         //secret key used to sign and verify tokens.make sure to use a strong and unique secret key in production.

export const auth = betterAuth({
  
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
    },
    });

export async function getSession() {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  return result;
}
export async function signOut() {
  const result = await auth.api.signOut({
    headers: await headers(),
  });

  if (result.success) {
    redirect("/sign-in");
  }
}