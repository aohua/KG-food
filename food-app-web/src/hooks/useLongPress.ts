import { useCallback, useRef, useState, MouseEventHandler, TouchEventHandler } from "react";

const useLongPress = (
    onLongPress: (event: TouchEvent) => void,
    onClick?: () => void,
    { shouldPreventDefault = true, delay = 500 } = {}
    ): {
        onMouseDown: MouseEventHandler<any>,
        onTouchStart: TouchEventHandler<any>,
        onMouseUp: MouseEventHandler<any>,
        onMouseLeave:MouseEventHandler<any>,
        onTouchEnd:TouchEventHandler<any>,
    } => {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timeout = useRef<NodeJS.Timeout>();
    const target = useRef<HTMLElement>();

    const start = useCallback(
        event => {
            if (shouldPreventDefault && event.target) {
                    event.target.addEventListener("touchend", preventDefault, {
                    passive: false
                });
                target.current = event.target;
            }
            timeout.current = setTimeout(() => {
                onLongPress(event);
                setLongPressTriggered(true);
            }, delay);
        },
        [onLongPress, delay, shouldPreventDefault]
    );

    const clear = useCallback(
        (event, shouldTriggerClick = true) => {
            timeout.current && clearTimeout(timeout.current);
            shouldTriggerClick && !longPressTriggered && typeof onClick === "function" && onClick();
            setLongPressTriggered(false);
            if (shouldPreventDefault && target.current) {
                target.current.removeEventListener("touchend", preventDefault);
            }
        },
        [shouldPreventDefault, onClick, longPressTriggered]
    );

    return {
        onMouseDown: (e) => start(e),
        onTouchStart: (e) => start(e),
        onMouseUp: (e) => clear(e),
        onMouseLeave: (e) => clear(e, false),
        onTouchEnd: (e) => clear(e)
    };
};

const isTouchEvent = (event: TouchEvent) => {
return "touches" in event;
};

const preventDefault = (event: TouchEvent) => {
if (!isTouchEvent(event)) return;

if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
}
};

export default useLongPress;