import { useEffect, useState } from "react";

const useNavScreen = () => {
    const [navscreenIsOpen, _setNavscreenIsOpen] = useState(false);

    const closeNavscreen = () => setNavscreenIsOpen(false);

    useEffect(() => {
        if(!navscreenIsOpen) {
            document.body.style.overflow = 'auto';
            document.body.removeEventListener('click', closeNavscreen);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navscreenIsOpen]);

   
    const setNavscreenIsOpen = (isOpen:boolean) => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
            
            document.body.addEventListener('click', closeNavscreen);
        }

        _setNavscreenIsOpen(isOpen);
    }

    return {
        navscreenIsOpen,
        setNavscreenIsOpen
    }


}

export default useNavScreen;