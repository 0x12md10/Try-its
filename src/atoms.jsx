// linkedin nav bar mimic - learning recoil

import {atom, selector} from "recoil";

export const networkAtom = atom({
    key : "networkAtom",
    default : 102
})

export const notificationsAtom = atom({
    key : "notificationsAtom",
    default : 13
})


export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
})

export const homeAtom = atom({
    key : "homeAtom",
    default : 0
})

export const totalNotificationsSelector = selector({
    key : "totalNotificationsSelector",
    get : ({get}) => {
        const HomeNotificationCount = get(homeAtom);
        const jobsNotificationCount = get(jobsAtom);
        const networkNotificationCount = get(networkAtom);
        const notificationsCount = get(notificationsAtom);

        return HomeNotificationCount + jobsNotificationCount + networkNotificationCount + notificationsCount;

    }
})