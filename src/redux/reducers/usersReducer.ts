export type T_UserReducerInitial = {
    users: {
        id: string,
        fullName: string,
        followed: boolean,
        status: string,
        photoUrl: string
        location: {
            city: string,
            country: string
        }
    }[]
}

const initialState: T_UserReducerInitial = {
    users: [
        {
            id: crypto.randomUUID(),
            fullName: 'Uladzislau',
            followed: true,
            status: 'Hello there',
            photoUrl: 'https://avatars.githubusercontent.com/u/18171050?v=4?s=400',
            location: {city: 'Brest', country: 'Belarus'}
        },
        {
            id: crypto.randomUUID(),
            followed: true,
            fullName: 'Darya',
            status: 'General Kenobi',
            photoUrl: 'https://avatars.githubusercontent.com/u/18171050?v=4?s=400',
            location: {city: 'Brest', country: 'Belarus'}
        },
        {
            id: crypto.randomUUID(),
            followed: false,
            fullName: 'Pavel',
            status: 'Spook there',
            photoUrl: 'https://avatars.githubusercontent.com/u/18171050?v=4?s=400',
            location: {city: 'Brest', country: 'Belarus'}
        },
        {
            id: crypto.randomUUID(),
            followed: false,
            fullName: 'Ihor',
            status: 'Aight there',
            photoUrl: 'https://avatars.githubusercontent.com/u/18171050?v=4?s=400',
            location: {city: 'Brest', country: 'Belarus'}
        }
    ]
}

export const followAC = (userId: string) => {
    return {type: 'FOLLOW_ACTION', userId} as const
}

export const unFollowAC = (userId: string) => {
    return {type: 'UNFOLLOW_ACTION', userId} as const
}

export const setUsersAC = (users: any) => {
    return {type: 'SET_USERS', users} as const
}

type T_SetUsers = ReturnType<typeof setUsersAC>
type T_FollowAC = ReturnType<typeof followAC>
type T_UnFollowAC = ReturnType<typeof unFollowAC>

export type T_MainUsersAction = T_FollowAC | T_UnFollowAC | T_SetUsers

export const usersReducer = (state = initialState, action: T_MainUsersAction) => {
    switch (action.type) {
        case "FOLLOW_ACTION": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW_ACTION": {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}

        }
        case "SET_USERS": {
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state
    }
}

