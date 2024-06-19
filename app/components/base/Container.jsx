export const Container = ({children}) => {
  return (
    <div className="p-16 bg-contrast-300 dark:bg-contrast-100 justify-center rounded-lg m-8 flex gap-8 flex-wrap max-w-xl">
      {children}
    </div>
  )
}