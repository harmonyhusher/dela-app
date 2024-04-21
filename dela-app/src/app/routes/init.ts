import { createEvent } from "effector";

export const initializeApp = createEvent();

initializeApp.watch(() => {
    console.log('s')
})