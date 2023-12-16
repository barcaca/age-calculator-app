import cn from "@/utils/cn";
import { HtmlHTMLAttributes } from "react";

interface InputErrorProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  text?: string;
  error?: string;
}

export function InputError({
  text,
  className,
  error,
  ...props
}: InputErrorProps) {
  return (
    <span
      className={cn(
        " invisible text-[10px] font-medium italic text-rose-500 peer-invalid:visible md:text-sm",
        className,
        { visible: !!error },
      )}
      {...props}
    >
      {error || text}
    </span>
  );
}
