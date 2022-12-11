import { FunctionComponent } from "react";

import styles from './Result.module.scss';

/***************************
 *  Types
 */
interface ResultPropsType {

} 

type ResultType = FunctionComponent<ResultPropsType>



/***************************
 *  Main Component
 */
const Result:ResultType = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Order Summary</div>
            <h3 className={styles.summary}>I drink coffee as <span className={styles.option}>Filter</span>, with a <span className={styles.option}>Decaf</span> type of bean. <span className={styles.option}>250g</span> ground ala <span className={styles.option}>Cefetiére</span>, sent to me <span className={styles.option}>Every Week</span>.</h3>
        </div>
    )
}

export default Result;