import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

import Item from './Item';

import ganEspressoPNG from '../../../assets/images/home/desktop/image-gran-espresso.png';
import planaltoPNG from '../../../assets/images/home/desktop/image-planalto.png';
import piccolloPNG from '../../../assets/images/home/desktop/image-piccollo.png';
import danchePNG from '../../../assets/images/home/desktop/image-danche.png';

import styles from './OurCollection.module.scss';

/************************
 * Types
 */
type ItemDataType = {
    name:string,
    description:string,
    image: StaticImageData
}


/************************
 * Private properties
 */

const items:ItemDataType[] = [
    {
        name: 'Gran Espresso',
        description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
        image: ganEspressoPNG
    },
    {
        name: 'Planalto',
        description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
        image: planaltoPNG
    },
    {
        name: 'Piccollo',
        description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
        image: piccolloPNG
    },
    {
        name: 'Danche',
        description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
        image: danchePNG
    }
    
]


/************************
 * MainComponent
 */
const OurCollection:FunctionComponent = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.title}><h1>our collection</h1></div>
            {
                items.map(item => (
                            <Item
                                key={item.name}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />))
            }
        </section>
    );
}

export default OurCollection;