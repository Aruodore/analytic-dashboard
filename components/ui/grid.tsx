import { cn } from "@/lib/utils"

export const Grid = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-[51%,47.42%] 2xl:grid-cols-[61%,37.42%] gap-x-5 ",
        className
      )}
    >
      {children}
    </div>
  );
};
