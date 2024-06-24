export const HeroText = ({children}) => {
  return (
    <div className="
      absolute
      sm:left-[20svw]

      flex
      flex-col
      items-center

      gap-8
      p-8

      max-w-xs
      max-sm:max-w-[80%]
      rounded-lg

      text-black
      dark:text-white

      bg-element-primary
      dark:bg-element-primary-dark

      shadow-lg
      z-[1]
    ">
      <p>{children}</p>
      <span>arrow</span>
    </div>
  );
};