import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"

interface props{
  name: string
}

function Category({ name }:props){
  return (
    <div className="cf-category">
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
      <Category name="All Categories"/>
      <div className="cf-other-cat-wrapper fl-cl">
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
        </div>
        <FontAwesomeIcon icon={faAnglesRight} className="cf-arrow-btn" onClick={scrollRight}/>
      </div>
    </div>
  )
}
