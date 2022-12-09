import { FunctionComponent } from "react";
import styles from './CoffeePicker.module.scss';

const CoffeePicker:FunctionComponent = () => {

    return (
        <div className={styles.wrapper}>
            01 Preferences
            02 Bean type
            03 Quantity
            04 Grind option
            05 Deliveries

            How do you drink your coffee?

            Capsule
            Compatible with Nespresso systems and similar brewers

            Filter
            For pour over or drip methods like Aeropress, Chemex, and V60

            Espresso
            Dense and finely ground beans for an intense, flavorful experience

            What type of coffee?

            Single origin
            Distinct, high quality coffee from a specific family-owned farm

            Decaf
            Just like regular coffee, except the caffeine has been removed

            Blended
            Combination of two or three dark roasted beans of organic coffees

            How much would you like?
            250g
            Perfect for the solo drinker. Yields about 12 delicious cups.
            
            500g
            Perfect option for a couple. Yields about 40 delectable cups.

            1000g
            Perfect for offices and events. Yields about 90 delightful cups.

            Want us to grind them?

            Wholebean
            Best choice if you cherish the full sensory experience

            Filter
            For drip or pour-over coffee methods such as V60 or Aeropress

            Cafetiére
            Course ground beans specially suited for french press coffee

            How often should we deliver?

            Every week
            $14.00 per shipment. Includes free first-class shipping.

            Every 2 weeks
            $17.25 per shipment. Includes free priority shipping.

            Every month
            $22.50 per shipment. Includes free priority shipping.

            Order Summary
            “I drink coffee _____, with a _____ type of bean. _____ ground ala _____, 
            sent to me _____.”

            Create my plan!

        </div>
    )
}

export default CoffeePicker;