import { useURIData } from "@/hooks/useURIData"
import ReactLoading from "react-loading"

interface props {
  address: string
}

export default function RisksTab({ address }:props) {
  const { cdata, fcLoading, cRisks } = useURIData(address)
  return (
    <section className="cpd-tab st-container fl-tl fl-c" id="s_story">
      <h3 className="st-title">{"Risks"}</h3>
      {
        !cdata || fcLoading || !cdata.risks ? <ReactLoading type="bubbles" color="#C4A2E7"/> : <article className="st-story" dangerouslySetInnerHTML={cRisks}/>
      }
    </section>
  )
}
