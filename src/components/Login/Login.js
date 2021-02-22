import React, { Component } from 'react';
import LoginForm from './LoginForm';
import '../../styles/forms.scss';

export default class Login extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    }

    handleSubmitSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/';
        history.push(destination);
    }

    render() {
        return (
            <>
                <main id='sign-up-form' className='form'>
                    <h1 className='h2'>Login</h1>
                    <LoginForm 
                        onSubmitSuccess={this.handleSubmitSuccess}
                    />
                </main>
            </>
        );
    }
}