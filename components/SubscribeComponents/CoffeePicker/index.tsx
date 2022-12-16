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
    const {questions, toggleQuestion, toggleOption, disableQuestion} = useData(questionsFromServer);

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <Navigator 
                    questions={questions.map(q => ({
                        navName: q.navName,
                        status: q.status,
                        isOptionSelected: q.selectedOption !== null
                    }))}
                    toggleQuestion={toggleQuestion}
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
                                navName={q.navName}
                                toggleQuestion={toggleQuestion}
                                toggleOption={toggleOption}
                                disableQuestion={disableQuestion}
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