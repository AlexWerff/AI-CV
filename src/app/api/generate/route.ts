import { NextRequest, NextResponse } from "next/server";
import { GeneratedPageData, generatePageFromPrompt } from "@/lib/openai";
import {
  STATIC_FULL_CV,
  STATIC_SCALA_EXPERIENCE,
  STATIC_TYPESCRIPT_EXPERIENCE,
} from "./staticContent";

const getStaticResponse = (prompt: string): GeneratedPageData | null => {
  if (prompt.includes("full_cv")) {
    return STATIC_FULL_CV;
  }
  if (prompt.includes("scala")) {
    return STATIC_SCALA_EXPERIENCE;
  }
  if (prompt.includes("typescript")) {
    return STATIC_TYPESCRIPT_EXPERIENCE;
  }
  return null;
};

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    const staticResponse = getStaticResponse(prompt);
    if (staticResponse) {
      return NextResponse.json(staticResponse);
    }

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const generatedData = await generatePageFromPrompt(prompt);

    return NextResponse.json(generatedData);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate page" },
      { status: 500 }
    );
  }
}
