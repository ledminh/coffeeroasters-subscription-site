import { FunctionComponent } from "react";


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


/***************************
 * Main Component
 */
const HowItWorks:FunctionComponent = () => {


    return (
        <section>
            <div>How it works?</div>
            {
                stepsData.map(step => (
                    <div key={step.name}>
                        <div>{step.name}</div>
                        <div>{step.description}</div>
                    </div>
                ))
            }
        </section>
    )
}

export default HowItWorks;