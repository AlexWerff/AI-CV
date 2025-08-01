import React from "react";

interface TextBoxProps {
  content: string;
  title?: string;
  variant?: "default" | "highlighted" | "muted";
  className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  content,
  title,
  variant = "default",
  className = "",
}) => {
  const baseClasses = "p-4 rounded-lg border";

  const variantClasses = {
    default: "bg-white/10 backdrop-blur-md border-white/20 shadow-2xl",
    highlighted:
      "bg-purple-500/20 backdrop-blur-md border-purple-300/30 shadow-2xl",
    muted: "bg-gray-500/10 backdrop-blur-md border-gray-300/20 shadow-2xl",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={`${classes} rounded-xl p-6`}>
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-blue-200">{title}</h3>
      )}
      <div className="text-blue-100 leading-relaxed text-lg">{content}</div>
    </div>
  );
};

export default TextBox;
