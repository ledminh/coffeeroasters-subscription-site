import Link from "next/link";
import { FunctionComponent } from "react";

import styles from './CreateYourPlanButton.module.scss';

const CreateYourPlanButton:FunctionComponent = () => {

    return (
        <Link className={styles.wrapper}
            href='/subscribe'>
            Create your plan
        </Link>
    )
}

export default CreateYourPlanButton;
