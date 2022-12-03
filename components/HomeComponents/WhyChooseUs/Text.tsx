import { FunctionComponent } from "react";

import styles from './Text.module.scss';

const Text:FunctionComponent = () => (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>
            Why choose us?
        </h2>
        <div className={styles.content}>
            A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
        </div>
    </div>
)

export default Text;