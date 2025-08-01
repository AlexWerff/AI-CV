import React from "react";

interface ContactItem {
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
}

interface ContactProps {
  title: string;
  contactItems: ContactItem[];
  layout?: "grid" | "list" | "cards";
  className?: string;
}

const Contact: React.FC<ContactProps> = ({
  title,
  contactItems,
  layout = "grid",
  className = "",
}) => {
  const getDefaultIcon = (type: string) => {
    switch (type) {
      case "email":
        return "📧";
      case "phone":
        return "📞";
      case "location":
        return "📍";
      case "linkedin":
        return "💼";
      case "github":
        return "🐙";
      case "website":
        return "🌐";
      default:
        return "📋";
    }
  };

  const renderContactItem = (item: ContactItem, index: number) => {
    const icon = item.icon || getDefaultIcon(item.type);
    const content = (
      <div className="flex items-center space-x-3 p-4 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 hover:bg-white/30 hover:shadow-lg transition-all duration-300">
        <span className="text-xl">{icon}</span>
        <div className="flex-1">
          <p className="text-sm text-blue-200 font-medium">{item.label}</p>
          <p className="text-blue-100 font-semibold">{item.value}</p>
        </div>
      </div>
    );

    if (item.link) {
      return (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:no-underline"
        >
          {content}
        </a>
      );
    }

    return <div key={index}>{content}</div>;
  };

  const renderGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contactItems.map(renderContactItem)}
    </div>
  );

  const renderList = () => (
    <div className="space-y-4">{contactItems.map(renderContactItem)}</div>
  );

  const renderCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {contactItems.map(renderContactItem)}
    </div>
  );

  const renderContent = () => {
    switch (layout) {
      case "list":
        return renderList();
      case "cards":
        return renderCards();
      case "grid":
      default:
        return renderGrid();
    }
  };

  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 p-8 ${className}`}
    >
      <h2 className="text-3xl font-bold text-blue-200 mb-8 flex items-center">
        <span className="mr-3 text-2xl">📞</span>
        {title}
      </h2>
      {renderContent()}
    </div>
  );
};

export default Contact;
