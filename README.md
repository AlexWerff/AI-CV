# Alexander van der Werff - CV Experience Search

A NextJS website that allows users to search through my professional experience using AI-powered building blocks. Describe what you're looking for, and get a focused view of relevant experience, skills, and projects.

## Features

- **AI-Powered Experience Search**: Use natural language to search through professional experience
- **Comprehensive Building Blocks**: Hero, About, TechnologyStack, Experience, Projects, and Contact components
- **Multiple Layouts**: Support for timeline, cards, grid, and list layouts
- **Modern UI**: Beautiful, responsive design built with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd architect
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
```

You can get your API key from [OpenAI Platform](https://platform.openai.com/api-keys).

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Enter a Search Query**: Describe what you&apos;re looking for in my experience

   - Example: "Show me experience with React and TypeScript"
   - Example: "Find mobile app development experience"
   - Example: "Leadership roles in startups"

2. **Search**: Click the "Search Experience" button to find relevant information

3. **View Results**: The AI will create a focused view showing relevant experience, skills, and projects

## Building Blocks

### Hero Component

A header section displaying:

- Name, title, and location
- Optional avatar image
- Professional introduction

### About Component

A section for personal description:

- Bio content with paragraph support
- Optional custom title
- Clean typography

### TechnologyStack Component

A technology showcase with:

- Multiple layout options (grid, list, categories)
- Technology icons and categories
- Responsive design

### Experience Component

Professional experience display with:

- Timeline, cards, or list layouts
- Company details, periods, and descriptions
- Technology tags and key highlights

### Projects Component

Featured projects showcase with:

- Grid, list, or cards layouts
- Project images and links
- Technology stacks and key features

### Contact Component

Contact information display with:

- Multiple contact types (email, phone, social, etc.)
- Clickable links and icons
- Grid, list, or cards layouts

### TextBox Component

A versatile text container with:

- Content display
- Optional title
- Multiple variants (default, highlighted, muted)
- Responsive design

## Layouts

- **Single Column**: Components stacked vertically
- **Two Column**: Components arranged in two responsive columns
- **Grid**: Components arranged in a responsive grid (1-3 columns)
- **Timeline**: Experience items displayed in chronological order
- **Cards**: Components displayed as individual cards
- **List**: Simple list layout for easy scanning

## Project Structure

```
src/
├── app/
│   ├── api/generate/     # API route for page generation
│   ├── page.tsx          # Main landing page
│   └── layout.tsx        # Root layout
├── components/
│   ├── building-blocks/  # Reusable building block components
│   │   ├── Hero.tsx      # Hero building block
│   │   ├── About.tsx     # About building block
│   │   ├── TechnologyStack.tsx # Technology stack building block
│   │   ├── Experience.tsx # Experience building block
│   │   ├── Projects.tsx  # Projects building block
│   │   ├── Contact.tsx   # Contact building block
│   │   ├── TextBox.tsx   # TextBox building block
│   │   └── index.ts      # Building blocks exports
│   ├── GeneratedPage.tsx # Page renderer
│   └── index.ts          # Component exports
└── lib/
    └── openai.ts         # OpenAI API client
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **OpenAI API**: AI-powered content generation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
