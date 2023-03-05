export interface conn{
  hasMetamask: boolean
  isConnected: boolean
  chainId: string
  signer: JsonRpcSigner | (() => JsonRpcSigner) | any
  account: string
  connect: () => Promise<void>
}