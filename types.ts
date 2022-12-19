/***********************
 * Options
 */

export type OptionType = {
    id: string,
    description: string;
    price?: number | null;
} & (PreferencesOptionType | BeanOptionType | QuantityOptionType | GrindOptionType | DeliveriesOptionType);


interface PreferencesOptionType  {
    name: 'Capsules' | 'Filter' | 'Espresso';
}

interface BeanOptionType  {
    name: 'Single origin' | 'Decaf' | 'Blended';
}

interface QuantityOptionType  {
    name: '250g' | '500g' | '1000g';
}

interface GrindOptionType  {
    name: 'Wholebean' | 'Filter' | 'Cafetiere';
}

interface DeliveriesOptionType {
    name: 'Every week' | 'Every 2 weeks' | 'Every month';
}


/*************************
 * question
 */

export type questionType = 'How do you drink your coffee?' | 'What type of coffee?' | 'How much would you like?' | 'Want us to grind them?' | 'How often should we deliver?';

type statusType = "opened" | "closed" | "disabled";

// Before Processing
export interface QuestionType {
    id: string,
    prompt: questionType,
    navName: navNameType,
    options: OptionType[],
} 


// After Processing
export type QuestionDataType = QuestionType & {
    status: statusType,
    selectedOption: OptionType | null,
};


/**************************
 * navNameType
 */
export type navNameType = 'Preferences' | 'Bean Type' | 'Quantity' | 'Grind Option' | 'Deliveries';


/**************************
 * pricesType
 */

export type pricesType = {
    '250g': number[],
    '500g': number[],
    '1000g': number[]
}


/**************************
 * SummaryType
 */
export type SummaryType = {
    [key in navNameType]: 'Capsules' | 'Filter' | 'Espresso' | 'Single origin' | 'Decaf' | 'Blended' | '250g' | '500g' | '1000g' | 'Wholebean' | 'Filter' | 'Cafetiere' | 'Every week' | 'Every 2 weeks' | 'Every month' | null
};