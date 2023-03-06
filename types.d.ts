export interface conn{
  hasMetamask: boolean
  isConnected: boolean
  chainId: string
  signer: JsonRpcSigner | (() => JsonRpcSigner) | any
  account: string
  connect: () => Promise<void>
}

export interface cmp{
  creator: string
  title: string
  description: string
  category: string
  tags: Array<string>
  goalAmount: BigInt
  duration: BigInt
  currentBalance: BigInt
  state: number
  imageURI: string
  campaignURI: string
  deadline: BigInt
}