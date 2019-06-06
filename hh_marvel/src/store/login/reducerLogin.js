export default function login(state, action) {
    switch (action.type) {
        case 'DO_LOGIN':
            return { user: action.user, pass: action.pass };

        default: state;
    }
}