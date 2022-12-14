import { FunctionComponent } from "react";
import styles from './CoffeePicker.module.scss';
import CreateMyPlanButton from "./CreateMyPlanButton";
import Question from "./Question";
import Result from "./Result";


import useData from "./hooks/useData";
import { QuestionFromServer } from "../../../pages/subscribe";
import Navigator from "./Navigator";


interface CoffeePickerProps {
    questionsFromServer: QuestionFromServer[]
}

type CoffeePickerType = FunctionComponent<CoffeePickerProps>;

const CoffeePicker:CoffeePickerType = ({questionsFromServer}) => {
    const {questions} = useData(questionsFromServer);

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <Navigator 
                    navNames={questions.map(q => q.navName)}
                    />
            </div>
            <div className={styles.main}>
                <div className={styles.questions}>
                    {
                        questions.map(q => (
                            <Question
                                key={q.question}
                                question={q.question}
                                status={q.status}
                                selectedOption={q.selectedOption}
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