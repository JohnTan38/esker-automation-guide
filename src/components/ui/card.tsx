import React from "react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-white shadow rounded-2xl p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children }: CardProps) {
  return <div className="space-y-2">{children}</div>;
}
