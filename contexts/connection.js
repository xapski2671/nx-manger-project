import { ethers } from "ethers"
import { useRouter } from "next/router"
import { createContext, ReactNode, useState, useEffect } from "react"

// interface Props{
//   children: ReactNode
// }

// var window: any


const ConnectionContext = createContext()

function ConnectionProvider ({ children }) {
  const router = useRouter()
  const [hasMetamask, setHasMetamask] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [chainId, setChainId] = useState("31337")
  const [signer, setSigner] = useState(undefined)
  const [account, setAccount] = useState("0x0")

  async function connect()
  {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        setIsConnected(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setSigner(provider.getSigner())
        const { chainId } = await provider.getNetwork()
        setChainId(chainId.toString())
      } catch (e) {
        console.log(e)
      }
    } else {
      setIsConnected(false)
    }
  }

  async function updateUI()
  {
    if(typeof window.ethereum !== "undefined")
    {
      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" })
        if(accounts.length)
        {
          setIsConnected(true)
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          setSigner(provider.getSigner())
          const { chainId } = await provider.getNetwork()
          if(chainId !== "5")
          {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x5" }],
            })
            console.log("You have switched to the right network")
          }
          setAccount(accounts[0])
          setChainId(chainId.toString())
        }
        else{setIsConnected(false)}

      } catch (e) {
        console.log(e)
      }

      window.ethereum.on("chainChanged", () => {
        updateUI()
      })
      window.ethereum.on("accountsChanged", () => {
        updateUI()
      })
    }
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true)
      updateUI()
    }else{alert("Pls Install Metamask")}
  }, [account, chainId])

  const payload = { hasMetamask, isConnected, chainId, signer, account, connect }

  return (
    <ConnectionContext.Provider value={payload}>
      {children}
    </ConnectionContext.Provider>
  )
}

export { ConnectionContext, ConnectionProvider }