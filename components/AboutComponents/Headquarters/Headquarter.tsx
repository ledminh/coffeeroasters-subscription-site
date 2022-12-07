import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";


/************************
 * Types 
 */
 export type HeadquarterDataType = {
    map: StaticImageData,
    country: string,
    address: string,
    city: string,
    state: string,
    phone: string
}

type HeadquarterType = FunctionComponent<HeadquarterDataType>;

const Headquarter:HeadquarterType = ({map, country, address, city, state, phone}) => {

    return (
        <>
            <div>{country}</div>
            <Image 
                src={map}
                alt={`map of ${country}`}
            />
            <div>{address}</div>
            <div>{city}</div>
            <div>{state}</div>
            <div>{phone}</div>
            
        </>
    )
}


export default Headquarter;

