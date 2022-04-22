import { atom } from "recoil";

//count
export const countState = atom({
    key: "count",
    default: 0
});

//user
export const userState = atom({
    key: "user",
    default: {
        name: "hoge",
        age: 11
    }
});

export const myState = atom({
    key: "me",
    default: {
        name: "katayama",
        age: 20
    }
})
