import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputField({ ...props }: InputFieldProps) {
  return (
    <input
      type="number"
      {...props}
      className="peer h-14 w-20 rounded-md border px-3 text-lg placeholder:text-zinc-300  invalid:text-rose-500 focus:outline-violet-500 focus:invalid:outline-rose-500 md:w-3/5 "
    />
  );
}
