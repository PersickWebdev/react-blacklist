export const Utils = {
    generateId: () => {
        return Math.random().toString(36).slice(-8);
    },
    debounce: (callback: (args: any) => void, delay: number) => {
        let timeout: NodeJS.Timeout;

        return function <A>(...args: [A]) {
            clearTimeout(timeout);
            // @ts-ignore
            timeout = setTimeout(() => callback.apply(this, args), delay);
        }
    },
}