import {T_GetUsers} from "../../redux/reducers/usersReducer";


export const objectFieldHelper = <T extends object>(
    state: T_GetUsers,
    itemId: number,
    newObjProperty: T
) => {
    const updatedItems = state.items.map(e => {
        return e.id === itemId ? { ...e, ...newObjProperty } : e;
    });

    return { ...state, items: updatedItems };
};