import React from "react";
import { Download } from "lucide-react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <Button className="flex items-center space-x-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2">
  <Download className="w-4 h-4 mr-2" />
  Download Selected PDF
</Button>
  );
}
