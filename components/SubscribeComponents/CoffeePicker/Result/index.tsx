import { FunctionComponent } from "react";

import styles from './Result.module.scss';

/***************************
 *  Types
 */
interface ResultPropsType {
    preferences: string | null,
    beanType: string | null,
    quantity: string | null,
    grindOption: string | null,
    delivery: string | null
} 

type ResultType = FunctionComponent<ResultPropsType>



/***************************
 *  Main Component
 */
const Result:ResultType = ({preferences, beanType, quantity, grindOption, delivery}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Order Summary</div>
            <h3 className={styles.summary}>I drink coffee {preferences === 'Capsule'? 'using': 'as'} <span className={styles.option}>{preferences? preferences: '______'}</span>, with a <span className={styles.option}>{beanType? beanType: '______'}</span> type of bean. <span className={styles.option}>{quantity? quantity: '______'}</span> {preferences !== 'Capsule'? <>ground ala <span className={styles.option}>{grindOption? grindOption: '______'}</span></>: null}, sent to me <span className={styles.option}>{delivery? delivery: '______'}</span>.</h3>
        </div>
    )
}

export default Result;