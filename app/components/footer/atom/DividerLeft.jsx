import Image from "next/image";

const DividerLeft = () => {
  return (
    <div className="relative w-[252px] h-[323px] m-0 p-0">
      <Image
        src="/components/images/footer/Footer_Divider_Left.png"
        alt="Divider Left"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
    </div>
  );
};

export default DividerLeft;
