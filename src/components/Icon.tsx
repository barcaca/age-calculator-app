import * as React from "react";

export function IconArrow(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={44}
      viewBox="0 0 46 44"
      {...props}
    >
      <path
        d="M1 22.019C8.333 21.686 23 25.616 23 44m0 0V0m22 22.019C37.667 21.686 23 25.616 23 44"
        fill="none"
        stroke="#FFF"
        strokeWidth={4}
      />
    </svg>
  );
}
