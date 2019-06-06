export const Creators = {
    doLogin: (user, pass) => {
        return {
            type: 'DO_LOGIN',
            user,
            pass
        }
    } 
}