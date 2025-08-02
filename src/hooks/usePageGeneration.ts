import { useState } from "react";
import { GeneratedPageData } from "@/lib/openai";
import { STATIC_FULL_CV } from "@/app/api/generate/staticContent";

export const usePageGeneration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPage, setGeneratedPage] = useState<GeneratedPageData | null>(
    STATIC_FULL_CV
  );
  const [error, setError] = useState<string | null>(null);

  const generatePage = async (searchPrompt: string) => {
    setIsLoading(true);
    setError(null);
    setGeneratedPage(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: searchPrompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate page");
      }

      const data = await response.json();
      setGeneratedPage(data);
    } catch (err) {
      setError("Failed to generate page. Please try again.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetSearch = () => {
    setGeneratedPage(null);
    setError(null);
  };

  return {
    // State
    isLoading,
    generatedPage,
    error,

    // Actions
    generatePage,
    resetSearch,
  };
};
