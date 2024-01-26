export const ChartBar = ({
  label,
  height,
}: {
  label: string;
  height: string;
}) => {
  return (
    <span
      style={{ height }}
      className="absolute bottom-full chart-bar left-0 rounded-t-full bg-red-400 w-[1.875rem] group"
    >
      <span className="absolute bottom-full hidden group-hover:block text-white rounded-sm px-[0.94rem] py-[0.31rem] font-xs font-medium -translate-y-2 -translate-x-1/4 bg-[#090C2C] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:aspect-square after:rotate-45 after:bg-inherit ">
        {label}
      </span>
    </span>
  );
};
