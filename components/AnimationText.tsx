import React, { FC, ReactNode } from "react";

interface AnimationTextProps {
  children: ReactNode;
  element?: "h1" | "span";
  className?: string;
}

const AnimationText: FC<AnimationTextProps> = ({
  children,
  element = "h1",
  className,
}) => {
  const renderText = (child: ReactNode): ReactNode => {
    if (typeof child === "string") {
      return child.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index}> </span>;
        } else {
          return (
            <span
              key={index}
              className="inline-block hover:scale-125 hover:-translate-y-2 transition-all duration-75 ease-in"
            >
              {char}
            </span>
          );
        }
      });
    }
    return child;
  };

  const textHover = React.Children.map(children, (child) => renderText(child));

  return element === "span" ? (
    <span className={className}>{textHover}</span>
  ) : (
    <h1
      className={`text-3xl sm:text-header font-bold mb-6 leading-[100%]  ${className}`}
    >
      {textHover}
    </h1>
  );
};

export default AnimationText;
