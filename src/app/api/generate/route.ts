import { NextRequest, NextResponse } from "next/server";
import { generatePageFromPrompt } from "@/lib/openai";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

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
