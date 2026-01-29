import{Briefcase} from "lucide-react";
import Link from "next/link";
import { Button } from "./button";



export default function navbar(){
    return(
       
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-4">
          
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Dashboard
                </Button>
              </Link>
             
                  
                    
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                      </p>
                    </div>
                
            <>
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-primary hover:bg-primary/90">
                  Start for free
                </Button>
              </Link>
            </>
        </div>
      </div>
    </nav>
  );
}