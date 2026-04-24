import checkImg from "/images/check.svg";

function ListItem({ text }: { text: string }) {
  return (
    <div className="w-full flex items-center justify-start gap-2.5">
      <img src={checkImg} alt="check" />
      <p className="text-white text-[10px] md:text-sm min-[90rem]:text-base md:leading-4.5 min-[90rem]:leading-6 font-normal">{text}</p>
    </div>
  );
}

export default ListItem;
