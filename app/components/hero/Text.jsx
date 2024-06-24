export const HeroText = ({children}) => {
  return (
    <div className="flex flex-col items-center gap-8 p-8 max-w-xs rounded-lg bg-contrast-300 dark:bg-contrast-100 z-10">
      {children}
      <span>arrow</span>
    </div>
  )
}