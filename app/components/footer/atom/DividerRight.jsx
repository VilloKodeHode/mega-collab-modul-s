import Image from "next/image";

const DividerRight = () => {
  return (
    <div className="p-0 w-[252px] h-[323px]">
      <Image
        src="/components/images/footer/Footer_Divider_Right.png"
        alt="Divider Right"
        width={252}
        height={323}
      />
    </div>
  );
};

export default DividerRight;
