function ProgramItemText({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start justify-center gap-2 min-[90rem]:gap-4">
      <div className="flex items-center justify-center border border-(--blue) rounded-lg px-2 md:px-4 py-0.5 bg-linear-(--dark-blue-gradient)">
        <p className="text-white text-[8px] md:text-xs min-[90rem]:text-sm font-normal">{category}</p>
      </div>
      <h3 className="text-white text-sm md:text-xl min-[90rem]:text-2xl font-semibold md:leading-6 min-[90rem]:leading-8">{title}</h3>
      <p className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal leading-3 md:leading-4.5 min-[90rem]:leading-6">{description}</p>
    </div>
  );
}

export default ProgramItemText;
