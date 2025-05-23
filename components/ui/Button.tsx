import React from "react";

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ${className}`} {...props}>
  
  {children}
</button>
  );
}

