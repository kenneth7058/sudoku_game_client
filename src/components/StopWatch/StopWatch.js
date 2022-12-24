import React, { useState } from "react";

import Timer from "../Timer/Timer";

const { forwardRef, useImperativeHandle } = React;

const StopWatch = forwardRef((props, ref) => {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive]);

    useImperativeHandle(ref, () => ({

        handleStart() {
            setIsActive(true);
            return true
        },
        handleStop() {
            setIsActive(false);
            return time
        }
    }));

    return (
        <div className="stop-watch">
            <Timer time={time} />

        </div>
    );
});
export default StopWatch;