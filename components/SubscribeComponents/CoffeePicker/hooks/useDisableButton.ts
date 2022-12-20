import { QuestionDataType } from "../../../../types";
import { useState, useEffect } from "react";



const useDisableButton = (questions:QuestionDataType[]) => {
    const [isSelectedAll, setIsSelectedAll] = useState(false);

    useEffect(() => {
        let isCapsule = questions[0].selectedOption?.name === 'Capsule';
        
        for(let i= 0; i < questions.length; i++) {  
            if(i === 3) {
                if(!isCapsule && questions[i].selectedOption === null){
                    return setIsSelectedAll(false); 
                }
            }          
            else if(questions[i].selectedOption === null)
                return setIsSelectedAll(false);
        }

        setIsSelectedAll(true);

    }, [questions]);




    return {
        isButtonDisabled: !isSelectedAll
    }
}

export default useDisableButton;