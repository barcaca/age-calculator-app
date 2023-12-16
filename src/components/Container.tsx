import cn from "@/utils/cn";
import React, { ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        "mx-auto flex h-screen flex-col items-center justify-center gap-16 md:max-w-screen-lg ",
        props.className,
      )}
    >
      {children}
    </div>
  );
}
