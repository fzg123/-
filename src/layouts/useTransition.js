import { useEffect } from 'react'
import t from '../utils/opacityTransition'
export default function (getFlag, containerRef, contentRef, initOpacity, props) {
    useEffect(() => {
      
        if (getFlag()) {
            containerRef.current.style.opacity = initOpacity;
            t(containerRef.current, initOpacity, 1);
        }
        else {
            contentRef.current.style.opacity = initOpacity;

            t(contentRef.current, initOpacity, 1);

        }
    })
}