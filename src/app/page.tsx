"use client";

import React from "react";
import { GeneratedPage } from "@/components";
import StaticHero from "@/components/StaticHero";
import SpaceBackground from "@/components/SpaceBackground";
import { usePageGeneration } from "@/hooks/usePageGeneration";

export default function Home() {
  const {
    prompt,
    setPrompt,
    isLoading,
    generatedPage,
    error,
    handleQuickSearch,
    handleSubmit,
    resetSearch,
  } = usePageGeneration();

  // Listen for search events from StaticHero
  React.useEffect(() => {
    const handleSearchEvent = (event: CustomEvent) => {
      const { type } = event.detail;

      switch (type) {
        case "full-cv":
          handleQuickSearch(
            "Show me the full CV with all experiences and projects"
          );
          break;
        case "scala":
          handleQuickSearch(
            "Show me Scala development experience and projects"
          );
          break;
        case "typescript":
          handleQuickSearch(
            "Show me fullstack development experience with React, TypeScript, Node.js and related technologies"
          );
          break;
        case "custom":
          if (event.detail.query) {
            handleQuickSearch(event.detail.query);
          }
          break;
      }
    };

    window.addEventListener("search", handleSearchEvent as EventListener);

    return () => {
      window.removeEventListener("search", handleSearchEvent as EventListener);
    };
  }, [handleQuickSearch]);

  return (
    <SpaceBackground>
      {/* Static Hero Section */}
      <StaticHero />

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
