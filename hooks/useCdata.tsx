import { ConnectionContext } from "@/contexts/connection"
import { cmp, conn } from "@/types"
import { BigNumber, ethers } from "ethers"
import { useCallback, useContext, useEffect, useState } from "react"
import campaignABI from "@/constants/Campaign.json"

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

export function useCdata(address:string){
  const { isConnected, signer }:conn = useContext(ConnectionContext)!
  const [loading, setLoading] = useState(true)
  // const [secloading, setSecloading] = useState(true)
  const [imgLoad, setImgLoad] = useState(false)
  const [campaignDetails, setCampaignDetails] = useState<cmp>(cmpObject)
  const [progress, setProgress] = useState(0)
  const [daysUntil, setDaysUntil] = useState(0)
  const [imageURI, setImageURI] = useState("")

  useEffect(() => {  
    let isIn = true

    async function startCard() {
      const CmpCntrt = new ethers.Contract(address, campaignABI.abi, signer)
      try{
        const cmpData = await CmpCntrt.getCampaignDetails()
        let cmpProxy:cmp | any = {}
        for(let i = 0; i < cmpData.length; i++){
          cmpProxy[(Object.keys(cmpObject)[i])] = cmpData[i]
        }
        isIn && setCampaignDetails(cmpProxy) 
        isIn && setLoading(false)
      }
      catch(e){
        console.log(e)
      }
    }
    isConnected && startCard().catch(e=>console.log(e))
    return () => {isIn = false}
  }, [isConnected])

  const calcDetails = useCallback(async()=>{
    const plevel = (campaignDetails.currentBalance.div(loading ? BigNumber.from("1") : campaignDetails.goalAmount)).toNumber() * 100
    setProgress(plevel)
  
    let deadline = new Date(campaignDetails.deadline.toNumber() * 1000)
    console.log(deadline)
    let dNow = new Date()
    const days = (d1:Date, d2:Date) => {
      let diff = d2.getTime() - d1.getTime()
      let totalDays = Math.ceil(diff / (1000 * 3600 * 24))
      return totalDays
    }
    const daysUntil = await days(dNow, deadline)
    setDaysUntil(daysUntil)
  
    let uri = campaignDetails.imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
    setImageURI(uri)
    // setSecloading(false)
  },[campaignDetails.imageURI, campaignDetails.currentBalance, campaignDetails.goalAmount])

  useEffect(()=>{
    let isIn = true

    isIn && calcDetails().catch(e=>console.log(e))
    return () => {isIn = false}
  },[calcDetails])

  return {
    loading,
    campaignDetails,
    imageURI,
    imgLoad,
    setImgLoad,
    progress,
    daysUntil
  }
}