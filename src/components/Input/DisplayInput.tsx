import { ReactNode } from "react";

interface DisplayInputProps {
  children: ReactNode;
  text: string;
}

export function DisplayInput({ children, text }: DisplayInputProps) {
  return (
    <div className="flex gap-1">
      <span className="text-violet-500">{children}</span>
      <span>{text}</span>
    </div>
  );
}
