import { CampaignGrid, CategoryFilter } from "@/components/exportComps"
import { useCampaigns } from "@/hooks/useCampaigns"
import { Blog, FeaturedCampaign } from "../exportConts"
import ReactLoading from "react-loading"
import Error from "next/error"
import { useState } from "react"

interface props {
  cat: string
  offVal: number
}

export default function CampaignsPage({ cat, offVal }:props) {
  const [nCategory, setNCategory] = useState(cat)
  const { isConnected, loading, campaigns, callSomeCampaigns, callAllCampaigns } = useCampaigns(nCategory, offVal)
  const [offset, setOffset] = useState(0)

  async function handleSeemore(){
    setOffset(prev=>prev + 6)

    if(cat == "All Categories"){
      await callAllCampaigns(offset)
    }
    else{
      await callSomeCampaigns(cat, offset)
    }
  }

  return (
    <section className="ccp-section sc-padding fl-cl fl-c">
      <CategoryFilter changeCat={(ncat:string)=>{setNCategory(ncat)}}/>
      <div className="ccp-sub-wrapper fl-cl">
        <h4 className="ccp-subtitle">{"Featured"}</h4>
      </div>
      {
        <>
          {loading || !campaigns 
            ? <p>{" "}</p> : !campaigns.length ? <Error statusCode={404}/>
              : <>
                <FeaturedCampaign address={campaigns[0]["campaignAddress"]}/>
                <div className="ccp-sub-wrapper fl-cl">
                  <h4 className="ccp-subtitle">{"Explore 320 Projects"}</h4>
                </div>
              </>
          }
          {
            !isConnected 
              ? <div className="cp-load-alert fl-cl fl-c">
                <p>{"Please connect your wallet to view campaigns"}</p> 
                <ReactLoading type={"bubbles"} color="#827B93"/>
              </div>
              : loading || !campaigns ? <ReactLoading type={"bubbles"} color="#827B93"/> : !campaigns.length ? <Error statusCode={404}/>
                : <CampaignGrid mapArray={campaigns}/>
          }
        </>
      }
      <button className="cg-see-more fl-cc" onClick={handleSeemore}>{"See more"}</button>
      <Blog/>
    </section>
  )
}
