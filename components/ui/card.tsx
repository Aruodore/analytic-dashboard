

export const Card = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={"border border-[#EDF2F7] rounded-[14px] bg-white p-4 "+className}>
      {children}
    </div>
  );
};
