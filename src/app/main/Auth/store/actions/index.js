import * as types from "./types";

const usersDB = [
    {
        userName: "TomRoj",
        password: "123456",
    },
    {
        userName: "Mati",
        password: "mati123",
    },
    {
        userName: "Juancito",
        password: "john123",
    },
];

export const logIn = user => dispatch => {
    const profilePicUrl = `https://robohash.org/${user.userName.toLowerCase()}`;
    dispatch({
        type: types.LOGIN_INIT,
    });
    const finded = usersDB.find(dbUser => dbUser.userName === user.userName);

    if (finded) {
        if (finded.password === user.password) {
            setTimeout(() => {
                dispatch({
                    type: types.LOGIN_SUCCEED,
                    payload: {
                        ...user,
                        profilePic: profilePicUrl,
                    },
                });
            }, 1000);
        } else {
            dispatch({
                type: types.LOGIN_FAILED,
                payload: "Usuario o contraseña incorrectos",
            });
        }
    } else {
        dispatch({
            type: types.LOGIN_FAILED,
            payload: "Usuario no existe",
        });
    }
};

export const logInVisitor = user => dispatch => {
    const profilePicUrl = `https://robohash.org/${user.userName.toLowerCase()}`;
    setTimeout(() => {
        dispatch({
            type: types.LOGIN_SUCCEED,
            payload: {
                ...user,
                profilePic: profilePicUrl,
            },
        });
    }, 1000);
};

export const register = (user, repeatedPassword) => dispatch => {
    dispatch({
        type: types.REGISTER_INIT,
    });

    const finded = usersDB.find(dbUser => dbUser.userName === user.userName);

    if (finded) {
        dispatch({
            type: types.REGISTER_FAILED,
            registerErrorMessage: "El usuario ya existe",
        });
    } else {
        if (user.password === repeatedPassword) {
            dispatch({
                type: types.REGISTER_SUCCEED,
                registerErrorMessage: "El usuario ya existe",
            });
            usersDB.push(user);
        } else {
            dispatch({
                type: types.REGISTER_FAILED,
                registerErrorMessage: "Las contraseñas no coinciden",
            });
        }
    }
};

export const setAvatar = url => dispatch => {
    dispatch({
        type: types.CHANGE_AVATAR,
        payload: url,
    });
};
