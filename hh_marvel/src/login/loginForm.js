import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Style from './style';
import doLogin from '../service/loginAPI'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: ''
        }
    }
   
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
	console.log("teste");
    };

    render() {
        const classes = Style;

        return (
            <div className={classes.container}>
                <TextField
                    label="Login"
                    className={classes.textField}
                    onChange={this.handleChange('login')}
                />
                  <TextField
                    label="Password"
                    className={classes.textField}
                    onChange={this.handleChange('pass')}
                />
                <button onClick={() => doLogin(this.state.login, this.state.pass)}> login </button>
            </div>
        )
    }
}

export default LoginForm;