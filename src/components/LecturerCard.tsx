function LecturerCard( { imgSrc, time, theme, description, isSelected, onClick }: { imgSrc: string, time: string, theme: string, description: string, isSelected: boolean, onClick: () => void } ) {
  return (
    <div onClick={onClick} className={`w-full border cursor-pointer flex items-start justify-start gap-4 p-4 min-[90rem]:p-6 rounded-lg transition-all ease-out duration-300 ${isSelected ? "hover:shadow-none border-(--blue) bg-(image:--dark-blue-gradient-hover)" : "border-transparent hover:shadow-[0px_0px_16px_0px_rgba(114,199,252,0.5)] hover:bg-(image:--dark-blue-gradient-hover) bg-(image:--dark-blue-gradient)"}`}>
      <img src={imgSrc} alt="lecturer" className="w-[93px] h-[124px] bg-(--blue/10) rounded-lg object-cover" />
      <div id="timeAndTexts" className="flex flex-col items-start justify-center gap-2">
        <p className="text-white text-[8px] md:text-xs min-[90rem]:text-sm font-normal dark-blue-gradient-element relative py-0.5 px-2 md:px-4 md:leading-4.5">{time}</p>
        <p className="text-white text-xs md:text-xl min-[90rem]:text-2xl md:leading-6 font-normal md:font-semibold whitespace-pre-wrap">{theme}</p>
        <p className="text-white text-[10px] md:text-sm min-[90rem]:text-base md:leading-5 font-normal whitespace-pre-wrap leading-3 min-[90rem]:leading-6">{description}</p>
      </div>
    </div>
  );
}

export default LecturerCard;