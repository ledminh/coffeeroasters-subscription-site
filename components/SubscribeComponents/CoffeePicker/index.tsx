import { FunctionComponent, useEffect, useState } from "react";
import styles from './CoffeePicker.module.scss';
import CreateMyPlanButton from "./CreateMyPlanButton";
import Question from "./Question";
import Result from "./Result";


import useData from "./hooks/useData";
import { QuestionFromServer } from "../../../pages/subscribe";
import Navigator from "./Navigator";
import { SummaryType } from "./CreateMyPlanButton";


interface CoffeePickerProps {
    questionsFromServer: QuestionFromServer[],
    onClick: (summary: SummaryType) => void
}

type CoffeePickerType = FunctionComponent<CoffeePickerProps>;

const CoffeePicker:CoffeePickerType = ({questionsFromServer, onClick}) => {
    const {questions, toggleQuestion, toggleOption} = useData(questionsFromServer);

    const [isSelectedAll, setIsSelectedAll] = useState(false);

    useEffect(() => {
        for(let i= 0; i < questions.length; i++) {
            if(questions[i].selectedOption === null)
                return setIsSelectedAll(false);
        }

        setIsSelectedAll(true);

    }, [questions]);

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
                            />
                        ))
                    }
                </div>            
                <Result 
                    preferences={questions[0].selectedOption}
                    beanType={questions[1].selectedOption}
                    quantity={questions[2].selectedOption}
                    grindOption={questions[3].selectedOption}
                    delivery={questions[4].selectedOption}
                />
                <div className={styles.createMyPlanButton}>
                    <CreateMyPlanButton
                        onClick={onClick}
                        questions={questions}
                        disabled={!isSelectedAll}
                    />
                </div>
            </div>
        </div>
    )
}

export default CoffeePicker;