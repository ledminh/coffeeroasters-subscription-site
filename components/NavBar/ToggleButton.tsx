import { MouseEventHandler } from "react";
import { FunctionComponent } from "react";

import IconHamburgerSVG from '../../assets/images/shared/mobile/icon-hamburger.svg';
import IconCloseSVG from '../../assets/images/shared/mobile/icon-close.svg';

import styles from './ToggleButton.module.scss';


/*******************
 * Types
 */

interface ToggleButtonPropsType {
    onClick: () => void;
    navscreenIsOpen: boolean;
}

type ToggleButtonType = FunctionComponent<ToggleButtonPropsType>;


/*******************
 * Main Component
 */

const ToggleButton:ToggleButtonType = ({onClick, navscreenIsOpen}) => {

    const handleClick:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        onClick();
    }


    return (
        <button
            className={styles.button}
            aria-label="open navigation bar"
                onClick={handleClick}
            >
                {navscreenIsOpen && <IconCloseSVG/>}
                {!navscreenIsOpen && <IconHamburgerSVG/>}
        </button>
    )
}

export default ToggleButton;