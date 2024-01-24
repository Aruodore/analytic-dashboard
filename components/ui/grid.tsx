export const Grid = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={" grid grid-cols-[61%,37.42%] gap-x-5 "+className}>
      {children}
    </div>
  );
};
