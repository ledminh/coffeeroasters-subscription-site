import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

import styles from './Headquarters.module.scss';

import ukSVG from '../../../assets/images/about/desktop/illustration-uk.svg';
import canadaSVG from '../../../assets/images/about/desktop/illustration-canada.svg';
import australiaSVG from '../../../assets/images/about/desktop/illustration-australia.svg';

import Headquarter, {HeadquarterDataType} from './Headquarter';


/************************
 * HeadQuartersData 
 */
const HeadQuartersData:HeadquarterDataType[] = [
    {
        Map: ukSVG,
        country: 'United Kingdom',
        address: '68 Asfordby Rd',
        city: 'Alcaston',
        state: 'SY6 1YA',
        phone: '+44 1241 918425'
    },
    
    {
        Map: canadaSVG,
        country: 'Canada',
        address: '1528 Eglinton Avenue',
        city: 'Toronto',
        state: 'Ontario M4P 1A6',
        phone: '+1 416 485 2997'
    },

    {
        Map: australiaSVG,
        country: 'Australia',
        address: '36 Swanston Street',
        city: 'Kewell',
        state: 'Victoria',
        phone: '+61 4 9928 3629'
    }

]


/************************
 * Main Component 
 */
const Headquarters:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            <h3>Our headquarters</h3>
            <div className={styles.headquarters}>
                {
                    HeadQuartersData.map(hq => (
                        <Headquarter 
                            key={hq.country}
                            Map={hq.Map}
                            country={hq.country}
                            address={hq.address}
                            city={hq.city}
                            state={hq.state}
                            phone={hq.phone}
                        
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Headquarters;