import Link from "next/link";
import React, { FC } from "react";
import { FaAngleRight } from "react-icons/fa";

interface ArrowLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  type?: "secondary" | "accent";
  target?: string;
}

const ArrowLink: FC<ArrowLinkProps> = ({
  href,
  className,
  type = "secondary",
  children,
  target = "",
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`flex items-center space-x-3 group font-semibold ${
        type === "accent" ? "text-accent" : "text-secondary"
      } ${className}`}
    >
      <span>{children}</span>{" "}
      <FaAngleRight className="group-hover:translate-x-2 transition-all duration-75 ease-linear" />
    </Link>
  );
};

export default ArrowLink;
