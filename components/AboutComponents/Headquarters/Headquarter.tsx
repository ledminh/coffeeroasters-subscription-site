import { FunctionComponent, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";


/************************
 * Types 
 */
 export type HeadquarterDataType = {
    Map: () => ReactElement,
    country: string,
    address: string,
    city: string,
    state: string,
    phone: string
}

type HeadquarterType = FunctionComponent<HeadquarterDataType>;

const Headquarter:HeadquarterType = ({Map, country, address, city, state, phone}) => {

    return (
        <>
            <div>{country}</div>
            <Map />
            <div>{address}</div>
            <div>{city}</div>
            <div>{state}</div>
            <div>{phone}</div>
            
        </>
    )
}


export default Headquarter;

