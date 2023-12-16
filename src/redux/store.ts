export type T_UserDialog = {
    name: string,
    id: number
}
export type T_Message = {
    id?: number
    message: string
}
export type T_PostData = {
    id: number, message: string, likesCount: number
}
export type T_Friend = {
    id: number, imageSrc: string
}
export type T_StateObject = {
    dialogPage: {
        newMessageTitle: string
        dialogsData: T_UserDialog[],
        messageData: T_Message[],
    },
    profilePage: {
        newTextForPost: string,
        posts: T_PostData[]
    }
    sidebar: {
        friends: T_Friend[]
    },

}


type T_AddPostAC = {
    type: "ADD_POST",
}

type T_ChangeNewTextAC = {
    type: "CHANGE_POST_VALUE",
    text: string
}

type T_AddNewMessageAC = {
    type: "ADD_NEW_MESSAGE",
    newMessageTitle: string
}



export type T_MainActionType = T_AddPostAC | T_ChangeNewTextAC | T_AddNewMessageAC







