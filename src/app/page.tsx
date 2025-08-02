"use client";

import React from "react";
import { GeneratedPage } from "@/components";
import StaticHero from "@/components/StaticHero";
import SpaceBackground from "@/components/SpaceBackground";
import { usePageGeneration } from "@/hooks/usePageGeneration";

export default function Home() {
  const { isLoading, generatedPage, generatePage } = usePageGeneration();

  return (
    <SpaceBackground>
      {/* Static Hero Section */}
      <StaticHero onSearch={generatePage} />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* Generated Page Section */}
        {isLoading && (
          <div className="">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-300 mx-auto mb-6"></div>
          </div>
        )}

        {generatedPage && (
          <div className=" overflow-hidden mt-12">
            <GeneratedPage data={generatedPage} />
          </div>
        )}
      </main>
    </SpaceBackground>
  );
}
