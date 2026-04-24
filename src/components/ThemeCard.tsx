function ThemeCard({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  return (
    <div className="w-full md:h-[227px] min-[90rem]:h-[256px] flex flex-col items-start justify-center p-4 md:p-6 min-[90rem]:p-12 gap-2 dark-blue-gradient-element dark-blue-hover-shadow">
      <div className="p-2 flex items-center justify-center dark-blue-gradient-element relative">
        <img className="w-full h-full object-cover" src={imgSrc} alt={title} />
      </div>
      <h2 className="text-white text-sm md:text-xl min-[90rem]:text-2xl md:leading-6 min-[90rem]:leading-8 font-semibold">{title}</h2>
      <p className="text-white text-[10px] md:text-sm min-[90rem]:text-base md:leading-4.5 min-[90rem]:leading-6 font-normal">{description}</p>
    </div>
  );
}

export default ThemeCard;
