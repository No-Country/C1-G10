import { Galery } from '../components/DetailsTours/Galery';
import { Itinerary } from '../components/DetailsTours/Itinerary';
import { Nav } from '../components/DetailsTours/Nav';
import Image from 'next/image'

export default function DetailTours() {

    return(
        <div>
            <Image
            width={1920}
            height={500}
            layout="responsive"
            src="/images/snowy-mountain.jpg"
            />
            <div>
                <Nav/>
            </div>
             <div>
                <Itinerary/>               
            </div>
            <div>
                <Galery/>      
            </div>

        </div>
    )
}