export const Utils = {
    generateId: () => {
        return Math.random().toString(36).slice(-8);
    },
}