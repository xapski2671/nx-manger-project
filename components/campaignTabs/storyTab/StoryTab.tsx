import { useURIData } from "@/hooks/useURIData"
import ReactLoading from "react-loading"


interface props {
  address: string
}

export default function StoryTab({ address }:props) {
  const { cdata, fcLoading, cStory } = useURIData(address)
  return (
    <section className="cpd-tab st-container fl-tl fl-c" id="s_story">
      <h3 className="st-title">{"Story"}</h3>
      {
        !cdata || fcLoading || !cdata.story ? <ReactLoading type="bubbles" color="#C4A2E7"/> : <article className="st-story" dangerouslySetInnerHTML={cStory}/>
      }
    </section>
  )
}
