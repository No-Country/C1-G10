import Image from "next/image"
import { useParams } from "react-router"

export default function Images({images}) {
    return(
        <div>
            <Image 
            width='700'
            height='300'
            layout="responsive"
            src={images[0]}
   
            />
        </div>
    )
}