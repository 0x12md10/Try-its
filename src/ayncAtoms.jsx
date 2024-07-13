import { atom, selector } from "recoil";

export const notificationsAtom2 = atom({
    key :"allNotifications",
    default : selector({
        key : "allNotificationsSelector",
        get : async ()=> {
            const data = await new Promise(r => setTimeout(r({
            home : 0,
            jobs : 12,
            notifications : 11,
            network : 102    
            }) , 5000))

            return data;
        }
    })
});

export const totalNotificationsSelector = selector({
    key : "totalNotificationSelector1",
    get : ({get}) => {
        const notifications = get(notificationsAtom2);
        let total = 0;
        for(let key in notifications) {
            total += notifications[key];
        }

        return total
    }
})
