import { useEffect } from "react";

const TIMEOUT = 10000;

export const useInterval = (callback: () => void, delay = TIMEOUT) => {

    useEffect(() => {
        callback();
        const timerId = setInterval(() => {
            callback();
        }, delay);

        return () => clearInterval(timerId);
    }, []);
}