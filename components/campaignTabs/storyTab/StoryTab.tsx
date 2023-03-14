import { CampaignContext } from "@/contexts/currentCampaign"
import { useURIData } from "@/hooks/useURIData"
import { useContext } from "react"
import ReactLoading from "react-loading"


export default function StoryTab() {
  const { currAddress } = useContext(CampaignContext)!
  const { cdata, fcLoading, cStory } = useURIData(currAddress)
  return (
    <section className="cpd-tab st-container fl-tl fl-c" id="s_story">
      <h3 className="st-title">{"Story"}</h3>
      {
        !cdata || fcLoading || !cdata.story ? <ReactLoading type="bubbles" color="#C4A2E7"/> : <article className="st-story" dangerouslySetInnerHTML={cStory}/>
      }
    </section>
  )
}
