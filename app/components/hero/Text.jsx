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

      bg-contrast-300
      dark:bg-contrast-100 z-10
    ">
      <p>{children}</p>
      <span>arrow</span>
    </div>
  )
}