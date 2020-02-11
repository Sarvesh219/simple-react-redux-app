import { CREATE_USER, DELETE_USER } from './constants/actionType';

export function createUsers(body) {
    return { type: CREATE_USER, details: body }
}

export function deleteUser(body) {
    return { type: DELETE_USER, name: body }
}