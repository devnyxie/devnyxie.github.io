import React from "react";
import module from "./badge.module.css";

interface BadgeProps {
  text: string;
  type: string; // danger, warning, success, info
}

const Badge: React.FC<BadgeProps> = ({ text, type }) => {
  const badgeType = module.badge + "_" + type;
  return <div className={module.badge}>{text}</div>;
};

export default Badge;
