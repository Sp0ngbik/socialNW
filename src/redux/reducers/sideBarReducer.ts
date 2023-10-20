import {T_Friend} from "../store";

const initialState = {
    friends: [
        {
            id: 1,
            imageSrc: 'https://www.handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e'
        },
        {
            id: 2,
            imageSrc: 'https://www.handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e'
        },
        {
            id: 3,
            imageSrc: 'https://www.handcraftguide.com/sites/default/files/styles/original___water/public/sketchingforkids4handcraftguide.com_.jpg?itok=I2Q9q-2e'
        }
    ]
}

export const sideBarReducer = (state: { friends: T_Friend[] } = initialState, action: any) => {
    return state
}