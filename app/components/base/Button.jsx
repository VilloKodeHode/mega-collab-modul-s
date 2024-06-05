"use client"

export const StdButton = ({children = "button", onClick}) => {
return (
    <button className="bg-primary border-secondary hover:scale-[102%] active:scale-[98%] transition-all text-font rounded-md font-semibold border px-6 py-2"  onClick={onClick}>
        {children}
    </button>
)
}



