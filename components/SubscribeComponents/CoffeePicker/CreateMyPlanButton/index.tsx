import { FunctionComponent } from "react";

import styles from './CreateMyPlanButton.module.scss';

/***************************
 *  Types
 */
interface CreateMyPlanButtonPropsType {

} 

type CreateMyPlanButtonType = FunctionComponent<CreateMyPlanButtonPropsType>



/***************************
 *  Main Component
 */
const CreateMyPlanButton:CreateMyPlanButtonType = () => {

    return (
        <button className={styles.wrapper}>
            Create My Plan
        </button>
    )
}

export default CreateMyPlanButton;