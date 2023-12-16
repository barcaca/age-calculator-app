import { ReactNode } from "react";

interface InputRootProps {
  children: ReactNode;
}

export function InputRoot({ children }: InputRootProps) {
  return <div className="grid grid-cols-3 items-center gap-4">{children}</div>;
}
