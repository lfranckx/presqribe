import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import '../../styles/forms.scss';

export default class SignUp extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    }

    handleSubmitSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/create_profile';
        history.push(destination);
    }

    render() {
        return (
            <>
                <main id='sign-up-form' className='form'>
                    <h2 className='h2'>Register</h2>
                    <SignUpForm 
                        onSubmitSuccess={this.handleSubmitSuccess}
                    />
                </main>
            </>
        );
    }
}