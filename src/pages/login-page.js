import React, { Component} from 'react';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 
import { userActions } from '../authentication/userActions';
 
class LoginPage extends Component {
    constructor(props) {
        super(props);
 
        // reset login status
        this.props.dispatch(userActions.logout());
 
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
 
    handleSubmit(e) {
        e.preventDefault();
 
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }
 
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        if(loggingIn){
          return (<Redirect to='/' />)
        }

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>{this.props.authMessage}</div>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
function mapStateToProps(state) {
    const loggingIn = state.userStore.authenticated;
    return {
        loggingIn,
        authMessage: state.userStore.authMsg
    };
}
 
export default connect(mapStateToProps)(LoginPage);