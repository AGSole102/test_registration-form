function Button({
  text,
  onClick,
  color,
  isFullWidth = true,
}: {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color: "light" | "dark";
  isFullWidth?: boolean;
}) {
  return (
    <button
      className={`${color === "light" ? "bg-(image:--blue-gradient) light-blue-button-hover" : "dark-blue-gradient-element dark-blue-hover-shadow"} ${isFullWidth ? "w-full" : "md:w-auto w-full"} cursor-pointer py-3 px-6 md:px-5 min-[90rem]:px-6 rounded-lg flex items-center justify-center`}
      onClick={onClick}
    >
      <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal">{text}</p>
    </button>
  );
}

export default Button;
