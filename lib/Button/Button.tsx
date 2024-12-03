import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="p-4 bg-gray-500 text-white font-bold tracking-wide rounded-md shadow ">
      {children}
    </button>
  );
};
