import Image from "next/image";

const JobloopLogo = () => {
  return (
    <div className="flex flex-col">
      <div className="imageHeader">
        <h1>Made in assosciation with:</h1>
      </div>
      <div className="w-[328px] h-[162px]">
        <Image
          src="/components/images/footer/Jobloop_Logo.png"
          alt="Jobloop Logo"
          width={328}
          height={162}
        />
      </div>
    </div>
  );
};

export default JobloopLogo;
