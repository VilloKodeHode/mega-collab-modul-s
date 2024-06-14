import Image from "next/image";

const DividerRight = () => {
  return (
    <div className="relative w-[292px] h-[323px]">
      <Image
        src="/components/images/footer/Footer_Divider_Right.png"
        alt="Divider Right"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
    </div>
  );
};

export default DividerRight;
