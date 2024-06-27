"use client"

export const HeroText = ({children}) => {
  const scrollTo = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth"})
  }

  return (
    <div className="absolute sm:left-[20svw] flex flex-col items-center gap-8 p-8 max-w-xs max-sm:max-w-[80%] rounded-lg text-black dark:text-white bg-element-primary dark:bg-element-primary-dark shadow-lg z-[1]">
      <p>{children}</p>
      <svg onClick={() => scrollTo()} height="10%" width="50%" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="fill-element-secondary hover:fill-[#04718D] active:fill-[#00586e] active:scale-105" preserveAspectRatio="none">
        <polygon points="0,0 100,100 200,0" />
      </svg>
    </div>
  );
};