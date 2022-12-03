import { FunctionComponent } from "react";

import styles from './HowItWorks.module.scss';
import Step from "./Step";

/***************************
 * Main Component
 */
 const HowItWorks:FunctionComponent = () => {


    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>How it works?</h3>
            <div className={styles.steps}>
                {
                    stepsData.map((step, i) => (
                        <Step 
                            key={step.name}
                            order={i + 1}
                            name={step.name}
                            description={step.description}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default HowItWorks;



/***************************
 * Types
 */
type StepDataType = {
    name: string,
    description: string
}

/***************************
 * Private properties
 */
const stepsData:StepDataType[] = [
    {
        name: 'Pick your coffee',
        description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
    },
    {
        name: 'Choose the frequency',
        description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
    },
    {
        name: 'Receive and enjoy!',
        description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
    }
]


