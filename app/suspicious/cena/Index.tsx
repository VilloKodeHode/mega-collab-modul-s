import { useEffect, useRef, useState } from "react"
import gif from "./cena.gif"
import Image from "next/image";

export const Cena = () => {
  const imgRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementsByTagName('nav')
    target[0].addEventListener('mouseenter', e => {
      setVisible(true)
    })
    target[0].addEventListener('mouseleave', e => {
      setVisible(false)
    })
  })

  return (
  <>
    {visible && (<Image className="z-10 fixed top-0 left-1/4 pointer-events-none" ref={imgRef} src={gif} alt="my gif" height={150} width={250} unoptimized={true}/>)}
  </>
  )
}