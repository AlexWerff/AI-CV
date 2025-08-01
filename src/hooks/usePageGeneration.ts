import { useState } from "react";
import { GeneratedPageData } from "@/lib/openai";

export const usePageGeneration = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedPage, setGeneratedPage] = useState<GeneratedPageData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [showCustomInput, setShowCustomInput] = useState(false);

  const generatePage = async (searchPrompt: string) => {
    setIsLoading(true);
    setError(null);
    setGeneratedPage(null);
    setShowCustomInput(false);

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

  const handleQuickSearch = async (searchPrompt: string) => {
    setPrompt(searchPrompt);
    await generatePage(searchPrompt);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    await generatePage(prompt);
  };

  const resetSearch = () => {
    setGeneratedPage(null);
    setShowCustomInput(false);
    setError(null);
  };

  return {
    // State
    prompt,
    setPrompt,
    isLoading,
    generatedPage,
    error,

    // Actions
    handleQuickSearch,
    handleSubmit,
    resetSearch,
  };
};
