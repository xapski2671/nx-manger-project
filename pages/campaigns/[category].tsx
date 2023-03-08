import { useRouter } from "next/router"


export default function Category(){
  const router = useRouter()
  const { category } = router.query
}