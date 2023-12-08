import {addPostAC, profileReducer, T_ProfileReducer} from "../redux/reducers/profileReducer";


let profileState: T_ProfileReducer
beforeEach(() => {
    profileState = {
        profile: {
            contacts: {
                facebook: 'string | null',
                website: 's',
                vk: 's',
                twitter: 's',
                instagram: 's',
                youtube: 's',
                github: 's',
                mainLink: 's'
            },
            userId: 2,
            aboutMe: 'asd',
            fullName: 'asd',
            lookingForAJob: true,
            photos: {
                small: 'asd',
                large: null
            },
            lookingForAJobDescription: 'asd',
        },
        userId: null,
        posts: [
            {id: 4, message: 'testPost', likesCount: 0}
        ],
        status: null,
    }
})


test('should add post', () => {
    let afterAction = profileReducer(profileState, addPostAC('23'))
    expect(afterAction.posts[1].message).toStrictEqual('testPost')
    expect(afterAction.posts.length).toBe(2)
})

