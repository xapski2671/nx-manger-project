import { useURIData } from "@/hooks/useURIData"

interface props {
  address: string
}

export default function StoryTab({ address }:props) {
  const { cdata, fcLoading } = useURIData(address)
  return (
    <div>StoryTab</div>
  )
}
