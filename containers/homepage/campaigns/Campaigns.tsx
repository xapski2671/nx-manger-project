import { CampaignGrid, CategoryFilter } from "@/components/exportComps"
import { GET_HOMEPAGE_CAMPAIGNS } from "@/constants/subgraphQueries"
import { useQuery } from "@apollo/client"

export default function Campaigns() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_CAMPAIGNS)  

  return (
    <section className="cp-campaigns sc-padding fl-cl fl-c">
      <CategoryFilter/>
      {
        loading ? <p>{"Loading..."}</p> : error ? <p>{error.message}</p> : 
          <CampaignGrid mapArray={data.campaignAddeds}/>
      }
    </section>
  )
}
