import OpenAI from "openai";
import { profileData } from "@/data/profileData";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface GeneratedPageData {
  components: Array<
    | {
        type: "TextBox";
        props: {
          content: string;
          title?: string;
          variant?: "default" | "highlighted" | "muted";
        };
      }
    | {
        type: "Hero";
        props: {
          name: string;
          title: string;
          location: string;
          avatar?: string;
        };
      }
    | {
        type: "About";
        props: {
          content: string;
          title?: string;
        };
      }
    | {
        type: "TechnologyStack";
        props: {
          title: string;
          technologies: Array<{
            name: string;
            icon?: string;
            category?: string;
          }>;
          layout?: "grid" | "list" | "categories";
        };
      }
    | {
        type: "Experience";
        props: {
          title: string;
          experiences: Array<{
            title: string;
            company: string;
            location: string;
            period: string;
            description: string;
            technologies: string[];
            highlights?: string[];
          }>;
          layout?: "timeline" | "cards" | "list";
        };
      }
    | {
        type: "Projects";
        props: {
          title: string;
          projects: Array<{
            title: string;
            company?: string;
            description: string;
            technologies: string[];
            highlights?: string[];
            image?: string;
            link?: string;
          }>;
          layout?: "grid" | "list" | "cards";
        };
      }
    | {
        type: "Contact";
        props: {
          title: string;
          contactItems: Array<{
            type:
              | "email"
              | "phone"
              | "location"
              | "linkedin"
              | "github"
              | "website"
              | "custom";
            label: string;
            value: string;
            icon?: string;
            link?: string;
          }>;
          layout?: "grid" | "list" | "cards";
        };
      }
  >;
  layout: "single-column" | "two-column" | "grid";
  title: string;
  description: string;
}

export async function generatePageFromPrompt(
  prompt: string
): Promise<GeneratedPageData> {
  try {
    const systemPrompt = `You are a web page generator that creates pages using building blocks. 
    
Available building blocks:
- TextBox: A text container with content, optional title, and variant (default/highlighted/muted)
- About: A section for personal description and bio
- TechnologyStack: A section displaying technologies with different layouts (grid/list/categories)
- Experience: A section for professional experience with different layouts (timeline/cards/list)
- Projects: A section for featured projects with different layouts (grid/list/cards)
- Contact: A section for contact information with different layouts (grid/list/cards)

Available layouts:
- single-column: Components stacked vertically
- two-column: Components arranged in two columns
- grid: Components arranged in a responsive grid

AVAILABLE PROFILE DATA:
${JSON.stringify(profileData, null, 2)}

INSTRUCTIONS:
1. Analyze the user's query to understand what they're looking for
2. Search through the profile data to find relevant information
3. Create a focused page that highlights the most relevant experience, skills, or projects
4. Use the appropriate building blocks to present the information clearly
5. Make sure all apostrophes are properly escaped as &apos; in the content

Generate a JSON response with the following structure:
{
  "components": [
    {
      "type": "TextBox|About|TechnologyStack|Experience|Projects|Contact",
      "props": {
        // TextBox props
        "content": "The text content",
        "title": "Optional title",
        "variant": "default|highlighted|muted"
        
        // Hero props
        "name": "Full name",
        "title": "Professional title",
        "location": "Location",
        "avatar": "Optional avatar URL"
        
        // About props
        "content": "About me content",
        "title": "Optional title"
        
        // TechnologyStack props
        "title": "Section title",
        "technologies": [
          {
            "name": "Technology name",
            "icon": "Optional emoji icon",
            "category": "Optional category"
          }
        ],
        "layout": "grid|list|categories"
        
        // Experience props
        "title": "Section title",
        "experiences": [
          {
            "title": "Job title",
            "company": "Company name",
            "location": "Location",
            "period": "Time period",
            "description": "Job description",
            "technologies": ["tech1", "tech2"],
            "highlights": ["highlight1", "highlight2"]
          }
        ],
        "layout": "timeline|cards|list"
        
        // Projects props
        "title": "Section title",
        "projects": [
          {
            "title": "Project name",
            "company": "Optional company",
            "description": "Project description",
            "technologies": ["tech1", "tech2"],
            "highlights": ["feature1", "feature2"],
            "image": "Optional image URL",
            "link": "Optional project link"
          }
        ],
        "layout": "grid|list|cards"
        
        // Contact props
        "title": "Section title",
        "contactItems": [
          {
            "type": "email|phone|location|linkedin|github|website|custom",
            "label": "Contact label",
            "value": "Contact value",
            "icon": "Optional emoji icon",
            "link": "Optional link URL"
          }
        ],
        "layout": "grid|list|cards"
      }
    }
  ],
  "layout": "single-column|two-column|grid",
  "title": "Page title",
  "description": "Page description"
}

Make sure the response is valid JSON and includes appropriate content based on the user's prompt.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No response from OpenAI");
    }

    // Try to parse the JSON response
    const parsedData = JSON.parse(content) as GeneratedPageData;
    return parsedData;
  } catch (error) {
    console.error("Error generating page:", error);
    throw new Error("Failed to generate page from prompt");
  }
}
