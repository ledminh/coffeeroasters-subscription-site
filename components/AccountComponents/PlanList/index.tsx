import { FunctionComponent } from "react";
import { SummaryType } from "../../../types";

import styles from './PlanList.module.scss';

import Plan from '../Plan';

/***************************
 *  Types
 */
interface PlanListPropsType {
    plans: SummaryType[]
} 

type PlanListType = FunctionComponent<PlanListPropsType>



/***************************
 *  Main Component
 */
const PlanList:PlanListType = ({plans}) => {

    return (
        <div className={styles.wrapper}>
            <h2>Your Plans</h2>
            <ul>
                {
                    plans.map((plan) => 
                        <Plan 
                            key={plan.Deliveries && plan.Deliveries + plan.Preferences && plan.Preferences}
                            plan={plan} />
                    )
                }
            </ul>
        </div>
    )
}

export default PlanList;