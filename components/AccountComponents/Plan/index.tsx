import { FunctionComponent } from "react";

import { SummaryType } from "../../../types";

import styles from './Plan.module.scss';

/***************************
 *  Types
 */
interface PlanPropsType {
    plan: SummaryType
} 

type PlanType = FunctionComponent<PlanPropsType>



/***************************
 *  Main Component
 */
const Plan:PlanType = ({plan}) => {

    return (
        <div className={styles.wrapper}>
            Plan component
        </div>
    )
}

export default Plan;