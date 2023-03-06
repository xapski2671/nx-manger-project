import { faEthereum } from "@fortawesome/free-brands-svg-icons"
import { faCubes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"
import { ConnectionContext } from "@/contexts/connection"
import { cmp, conn } from "@/types"
import { BigNumber, ethers } from "ethers"
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import { GET_USERNAME } from "@/constants/subgraphQueries"

interface props{
  address: string
  creator: string
}

let cmpObject:cmp = {
  creator: "",
  title: "",
  description: "",
  category: "",
  tags: [],
  goalAmount: BigNumber.from("0"),
  duration: BigNumber.from("0"),
  currentBalance: BigNumber.from("0"),
  state: 0,
  imageURI: "",
  campaignURI: "",
  deadline: BigNumber.from("0")
}

export default function CampaignCard({ address, creator }:props) {
  const { hasMetamask, isConnected, chainId, signer, account, connect }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  const [campaignDetails, setCampaignDetails] = useState<cmp>()
  const [progess, setProgress] = useState(0)
  const [daysUntil, setDaysUntil] = useState(0)
  const [imageURI, setImageURI] = useState("")
  const [creatorVal, setCreatorVal] = useState("")

  async function calcDetails(){
    const plevel = (campaignDetails!.currentBalance.div(campaignDetails!.goalAmount)).toNumber() * 100
    setProgress(plevel)

    let deadline = new Date(campaignDetails!.deadline.toNumber() * 1000)
    let dNow = new Date()
    const days = (d1:Date, d2:Date) => {
      let diff = d2.getTime() - d1.getTime()
      let totalDays = Math.ceil(diff / (1000 * 3600 * 24))
      return totalDays
    }
    const daysUntil = await days(dNow, deadline)
    setDaysUntil(daysUntil)

    let uri = campaignDetails!.imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
    setImageURI(uri)

    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_SUBGRAPH_URI,
      cache: new InMemoryCache(),
    })
  
    // const userData = await client
    //   .query({
    //     query: GET_USERNAME,
    //     variables: { userAddress: creator }
    //   })
    //   .then(async (data) => {return data})
    //   .catch(err => console.log("Error fetching data: ", err))
  
    // console.log(userData)
  }



  useEffect(() => {
    async function startCard(){
      const CmpCntrt = new ethers.Contract(address, campaignABI.abi, signer)
      try{
        const cmpData = await CmpCntrt.getCampaignDetails()
        let cmpProxy:cmp | any = {}
        for(let i = 0; i < cmpData.length; i++){
          cmpProxy[(Object.keys(cmpObject)[i])] = cmpData[i]
        }
        setCampaignDetails(cmpProxy)
        setLoading(false)
        await calcDetails()
      }
      catch(e){
        console.log(e)
      }
    }    
    isConnected && startCard()
  }, [isConnected, campaignDetails])

  return (
    <div className="cc-container fl-cl fl-c">
      { !loading &&
 <>
   <div className="cc-img">
     <img src={imageURI} alt="cc-mckp" />
   </div>

   <div className="cc-details fl-cl fl-c">
     <div className="cc-cta fl-tc fl-sb">
       <div className="cc-cat-name fl-cl">
         <FontAwesomeIcon icon={faCubes} className="cc-cat-icon"/>
         {campaignDetails?.category}
       </div>
       <button className="fl-cc">{"Learn more..."}</button>
     </div>

     <div className="cc-camp-title fl-tl fl-c">
       <h4>{campaignDetails?.title}</h4>
       <p>{campaignDetails?.description}</p>
     </div>

     <div className="cc-status fl-cl fl-sb">
       <div className="cc-amounts fl-tl fl-c">
         <div className="cc-amt-raised fl-cl">
           <FontAwesomeIcon icon={faEthereum} className="cc-curr-icon"/>
           <p className="cc-amt-figure">{ethers.utils.formatEther(campaignDetails!.currentBalance)}</p>
           <p className="cc-amt-curr">{"ETH"}</p>
         </div>
         <div className="cc-goal">
           {`raised out of ${ethers.utils.formatEther(campaignDetails!.goalAmount)} ETH`}
         </div>
       </div>

       <div className="cc-progress-bar"><div className="cc-progress-level" style={{ width: progess }}></div></div>
        
       <div className="cc-percent fl-bl fl-c">
         <p>{`${progess}%`}</p>
         <p>{"funded"}</p>
       </div>
     </div>

     <div className="cc-creator-eta fl-cl fl-sb">
       <div className="cc-creator fl-cl">
         <div className="cc-creator-jazzicon"></div>
         <p>{"bullishmei"}</p>
       </div>
       <div className="cc-eta fl-tr">
         <p>{daysUntil}</p>
         <p>{"days to go"}</p>
       </div>
     </div>
   </div>
 </>}
    </div>
  )
}
