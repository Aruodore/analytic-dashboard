

export const Card = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div
      className={
        "border  dark:border-[#171717] border-[#EDF2F7] rounded-[14px] bg-white dark:bg-[#171717] p-4 " +
        className
      }
    >
      {children}
    </div>
  );
};
