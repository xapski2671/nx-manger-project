import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"

interface props{
  name: string
}

function Category({ name }:props){
  const [active, setActive] = useState(false)

  return (
    <div className={`cf-category ${active && "active"}`} onClick={()=>{setActive(prev=>!prev)}}>
      {`${name}`}
    </div>
  )
}

export default function CategoryFilter() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scrollLeft(){
    scrollRef.current!.scrollBy(-50, 0)
  }
  function scrollRight(){
    scrollRef.current!.scrollBy(50, 0)
  }

  return (
    <div className="cf-wrapper fl-cc">
      {/* <div className="cf-all-cat-wrapper">
        <Category name="All Categories"/>
      </div> */}
      <div className="cf-other-cat-wrapper fl-cc">
        <FontAwesomeIcon icon={faAnglesLeft} className="cf-arrow-btn" onClick={scrollLeft}/>
        <div className="cf-other-cat fl-cl" ref={scrollRef}>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
          <Category name="Metaverse"/>
        </div>
        <FontAwesomeIcon icon={faAnglesRight} className="cf-arrow-btn" onClick={scrollRight}/>
      </div>
    </div>
  )
}
