import { QuestionType } from "../../../../types";

export const addStatus = (question:QuestionType) => {
    let status = 'closed';

    if(question.navName === 'Preferences') {
        status = 'opened';
    }

    return {
        ...question,
        status: status
    };
}

export const addSeclectedOption = (question:QuestionType) => {
    

    return {
        ...question,
        selectedOption: null
    };
};

export const addPrice = (question:QuestionType) => {

    if(question.navName === 'Deliveries') {
        return {
            ...question,
            options: question.options.map(op => ({
                ...op,
                price: null
            }))
        }
    }

    return question;
}