import { FunctionComponent } from "react";

import styles from './Headquarter.module.scss';

/************************
 * Types 
 */
 export type HeadquarterDataType = {
    Map: FunctionComponent,
    country: string,
    address: string,
    city: string,
    state: string,
    phone: string
}

type HeadquarterType = FunctionComponent<HeadquarterDataType>;

const Headquarter:HeadquarterType = ({Map, country, address, city, state, phone}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.map}><Map /></div>
            <h2 className={styles.country}>{country}</h2>
            <div className={styles.detail}>
                <p>{address}</p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{phone}</p>
            </div>
            
        </div>
    )
}


export default Headquarter;

