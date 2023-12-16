import { ReactNode } from "react";

interface InputLabelProps {
  textFor: string;
  text: string;
  children: ReactNode;
}
export function InputLabel({ textFor, children, text }: InputLabelProps) {
  return (
    <label
      htmlFor={textFor}
      className="flex flex-col font-bold uppercase text-neutral-900 data-[required=true]:text-rose-500"
    >
      {text}
      {children}
    </label>
  );
}
