import { ICompany } from '../types/interfaces';

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

    searchCompanies: (companies: Array<ICompany>, optionsObject: {}) => {
        const matchesSet = new Set();
        companies.forEach((item: ICompany) => {
            Object.keys(item).forEach((key: string) => {
                // @ts-ignore
                if (typeof item[key] === 'object') {
                    // @ts-ignore
                    Object.keys(item[key]).forEach((k: string) => {
                        // @ts-ignore
                        if (optionsObject[k] === '') return;
                        // @ts-ignore
                        if (String(item[key][k]).toLowerCase().includes(String(optionsObject[k]).toLowerCase())) {
                            matchesSet.add(item);
                        }
                    });
                } else {
                    // @ts-ignore
                    if (optionsObject[key] === '') return;
                    // @ts-ignore
                    if (String(item[key]).toLowerCase().includes(String(optionsObject[key]).toLowerCase())) {
                        matchesSet.add(item);
                    }
                }
            });
        });
        console.log(Array.from(matchesSet));
        return Array.from(matchesSet);
    },
}