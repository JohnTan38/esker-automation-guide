import React from "react";
import { Download } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <Button className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${className}`} {...props}>
  <Download className="w-4 h-4 mr-2" />
  Download Selected PDF
  {children}
</Button>
  );
}

