export const Container = ({children}) => {
    return (
        <div className="p-16 bg-contrast-100 rounded-lg m-8 flex gap-8 flex-col">
            {children}
        </div>
    )
}