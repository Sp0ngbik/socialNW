import {
    addPostAC,
    profileReducer,
    setUserProfile,
    setUserStatus,
    T_ProfileReducer,
    T_UserProfileBody
} from "../profileReducer";


let state: T_ProfileReducer
beforeEach(() => {


    state = {
        posts: [
            {id: 1, message: 'Hello,fellow', likesCount: 3},
            {id: 2, message: 'Welcome bro', likesCount: 5},
        ],
        status: null,
        userId: null,
        profile: null
    }

})


test('new post should be added', () => {
    const newPost = 'hello'
    const action = addPostAC(newPost)
    const endState = profileReducer(state, action)

    expect(endState.posts[0].message).toBe(newPost)
    expect(endState.posts.length).toBe(3)
})

test('user body should update', () => {
    let userBody: T_UserProfileBody = {
        aboutMe: 'hi',
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'no',
        fullName: 'vlad',
        userId: 25,
        photos: {
            small: null,
            large: null
        }
    }
    const action = setUserProfile(userBody)
    const endState = profileReducer(state, action)

    expect(endState.profile?.fullName).toStrictEqual('vlad')
    expect(endState.profile).toBeDefined()
})


test('should change user status', () => {
    const newStatus = 'new status'
    const action = setUserStatus(newStatus)
    const endState = profileReducer(state, action)

    expect(endState.status).toBe(newStatus)
})