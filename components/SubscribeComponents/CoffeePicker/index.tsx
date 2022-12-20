import { FunctionComponent, useEffect, useState } from "react";
import styles from './CoffeePicker.module.scss';
import CreateMyPlanButton from "./CreateMyPlanButton";
import Question from "./Question";
import Result from "./Result";


import useData from "./hooks/useData";
import Navigator from "./Navigator";
import useDisableButton from "./hooks/useDisableButton";

import { QuestionType, pricesType, SummaryType } from "../../../types";

interface CoffeePickerProps {
    questionsFromServer: QuestionType[],
    onClick: (summary: SummaryType) => void,
    prices: pricesType
}

type CoffeePickerType = FunctionComponent<CoffeePickerProps>;

const CoffeePicker:CoffeePickerType = ({questionsFromServer, onClick, prices}) => {
    const {questions, toggleQuestion, toggleOption} = useData(questionsFromServer, prices);

    const {isButtonDisabled} = useDisableButton(questions);

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <Navigator 
                    navInfos={questions.map(q => ({
                        navName: q.navName,
                        status: q.status,
                        questionID: q.id,
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
                                key={q.id}
                                id={q.id}
                                prompt={q.prompt}
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
                    preferences={questions[0].selectedOption? questions[0].selectedOption.name : null}
                    beanType={questions[1].selectedOption? questions[1].selectedOption.name : null}
                    quantity={questions[2].selectedOption? questions[2].selectedOption.name : null} 
                    grindOption={questions[3].selectedOption? questions[3].selectedOption.name : null}
                    delivery={questions[4].selectedOption? questions[4].selectedOption.name : null}
                />
                <div className={styles.createMyPlanButton}>
                    <CreateMyPlanButton
                        onClick={onClick}
                        questions={questions}
                        disabled={isButtonDisabled}
                    />
                </div>
            </div>
        </div>
    )
}

export default CoffeePicker;