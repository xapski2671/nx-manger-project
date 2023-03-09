import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

interface props{
  name: string
}

let catArray:Array<string> = 
[
  "All Categories",
  "De-Fi",
  "NFTs & Collectibles",
  "Web 3.0",
  "Metaverse",
  "P2E",
  "DAO",
  "Games",
  "Design & Tech",
  "Movie",
  "Comics & Illustration"
]

function Category({ name }:props){
  const router = useRouter()
  const [active, setActive] = useState(false)

  useEffect(()=>{
    console.log(router.asPath)
    if(router.asPath.includes(name)){
      setActive(true)
    }else{setActive(false)}
  },[name])

  return (
    <div className={`cf-category ${active && "active"}`} onClick={()=>{setActive(true)}}>
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
          {
            catArray.map((cat, index)=>{
              return (
                <Link href={`/campaigns/${cat}`} key={index}>
                  <Category name={cat} key={index}/>
                </Link>
              )
            })
          }
        </div>
        <FontAwesomeIcon icon={faAnglesRight} className="cf-arrow-btn" onClick={scrollRight}/>
      </div>
    </div>
  )
}
