"use client";

import React from "react";
import { GeneratedPage } from "@/components";
import StaticHero from "@/components/StaticHero";
import SpaceBackground from "@/components/SpaceBackground";
import { usePageGeneration } from "@/hooks/usePageGeneration";

export default function Home() {
  const { isLoading, generatedPage, handleQuickSearch } = usePageGeneration();

  return (
    <SpaceBackground>
      {/* Static Hero Section */}
      <StaticHero onSearch={handleQuickSearch} />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Generated Page Section */}
        {isLoading && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-12 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-300 mx-auto mb-6"></div>
            <p className="text-blue-200 text-lg">
              Searching through my experience...
            </p>
          </div>
        )}

        {generatedPage && (
          <div className=" overflow-hidden">
            <GeneratedPage data={generatedPage} />
          </div>
        )}
      </main>
    </SpaceBackground>
  );
}
