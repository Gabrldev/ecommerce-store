import { Product } from "@/types"

interface InfoProps {
  data: Product
}

const Info:React.FC<InfoProps> = ({data}) => {
  return (
    <div>
      {data.name}
    </div>
  )
}
export default Info