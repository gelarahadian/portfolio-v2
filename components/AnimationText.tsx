import React, { FC, ReactNode } from "react";

interface AnimationTextProps {
  children: ReactNode;
}

const AnimationText: FC<AnimationTextProps> = ({ children }) => {
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

  return <>{textHover}</>;
};

export default AnimationText;
