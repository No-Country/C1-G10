import Image from "next/image"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"
import { useEffect } from "react";
import { getAllDetails } from "../../store/actions/DetailTours/detailActions"
// import { get } from "immer/dist/internal";

export default function Image() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDetails())
    }, [])

    const getImage = useSelector(state => state.details)

    return(
        <div>
            <Image
            // width="700"
            // height="300"
            src='/getImage.images'
            layout = 'fill'
            />
        </div>
    )
}