"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("Organize");
  return (
    <div className="flex min-h-screen flex-col bg-white">
     
      {/* Hero images section */}
      <section className="border-t bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex gap-2 justify-center mb-8">
              <Button
                onClick={() => setActiveTab("Organize")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Organize" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Organize Applications
              </Button>

              <Button
                onClick={() => setActiveTab("Get hired")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Get hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Get hired
              </Button>

              <Button
                onClick={() => setActiveTab("Manage Boards")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "Manage Boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Manage Boards
              </Button>
            </div>

            <div className="relative mx-auto max-auto max-w-5xl overflow-hidden rounded-lg border-gray-200 shadow-xl">
              {activeTab === "Organize" && (
                <Image
                  src="/hero-images/hero1.png"
                  alt="Organize Applications"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "Get hired" && (
                <Image
                  src="/hero-images/hero2.png"
                  alt="Get hired"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "Manage Boards" && (
                <Image
                  src="/hero-images/hero3.png"
                  alt="Manage Boards"
                  width={1200}
                  height={800}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
