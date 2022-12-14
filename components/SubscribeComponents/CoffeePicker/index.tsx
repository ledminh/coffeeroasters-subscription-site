import { FunctionComponent } from "react";
import styles from './CoffeePicker.module.scss';
import CreateMyPlanButton from "./CreateMyPlanButton";
import Question from "./Question";
import Result from "./Result";


import useData from "./hooks/useData";
import { QuestionFromServer } from "../../../pages/subscribe";


interface CoffeePickerProps {
    questionsFromServer: QuestionFromServer[]
}

type CoffeePickerType = FunctionComponent<CoffeePickerProps>;

const CoffeePicker:CoffeePickerType = ({questionsFromServer}) => {
    const {questions} = useData(questionsFromServer);

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <button>
                            <span className={styles.order}>01</span>
                            <span className={styles.name}>Preferences</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button>
                            <span className={styles.order}>02</span>
                            <span className={styles.name}>Bean type</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button>
                            <span className={styles.order}>03</span>
                            <span className={styles.name}>Quantity</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button>
                            <span className={styles.order}>04</span>
                            <span className={styles.name}>Grind option</span>
                        </button>
                    </li>
                    <li className={styles.li}>
                        <button>
                            <span className={styles.order}>05</span>
                            <span className={styles.name}>Deliveries</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.main}>
                <div className={styles.questions}>
                    {
                        questions.map(q => (
                            <Question
                                key={q.question}
                                question={q.question}
                                isOpened={q.isOpened}
                                optionSelected={q.optionSelected}
                                options={q.options}
                            />
                        ))
                    }
                </div>            
                <Result />
                <div className={styles.createMyPlanButton}>
                    <CreateMyPlanButton/>
                </div>
            </div>
        </div>
    )
}

export default CoffeePicker;