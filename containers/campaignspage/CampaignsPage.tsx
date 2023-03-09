import { CampaignGrid, CategoryFilter } from "@/components/exportComps"
import { useCampaigns } from "@/hooks/useCampaigns"
import { Blog, FeaturedCampaign } from "../exportConts"
import ReactLoading from "react-loading"
import Error from "next/error"

interface props {
  cat: string
  offVal: number
}

export default function CampaignsPage({ cat, offVal }:props) {
  const { isConnected, loading, campaigns } = useCampaigns(cat, offVal)

  
  return (
    <section className="ccp-section sc-padding fl-cl fl-c">
      <CategoryFilter/>
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
      <Blog/>
    </section>
  )
}
