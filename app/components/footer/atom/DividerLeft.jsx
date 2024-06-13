import Image from "next/image";

const DividerLeft = () => {
  return (
    <div className="w-[252px] h-[323px]">
      <Image
        src="/components/images/footer/Footer_Divider_Left.png"
        alt="Divider Left"
        width={252}
        height={323}
      />
    </div>
  );
};

export default DividerLeft;
