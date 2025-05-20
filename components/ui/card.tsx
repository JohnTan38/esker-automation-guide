import React from "react";

export function Card({ children, className = "" }: any) {
  return <div className={`bg-white shadow rounded-2xl p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children }: any) {
  return <div className="space-y-2">{children}</div>;
}
