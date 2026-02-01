"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function SignIn() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center ">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-4">
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="samar.slama@example.com"
                required
                 className="border-gray-300 focus:border-primary focus:ring-primary"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input id="password" type="password" required minLength={8} className="border-gray-300 focus:border-primary focus:ring-primary"
 />
            </div>
          </CardContent>

          <CardFooter  className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Sign In</Button>

            <p className="text-center text-sm text-gray-600"> Dont have an account? 
              <Link href="/sign-up"   className="font-medium text-primary hover:underline">Sign Up </Link></p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default SignIn;
