import React, { Component } from 'react';

export default class SignUpForm extends Component {
    static defaultProps = {
        onSubmitSuccess: () => {}
    }

    state = { error: null };

    render() {
        const { error } = this.state;
        return (
            <>
                <form>
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    
                    <div className="input-box">
                        <label htmlFor="first-name-sign" className='h4'>First Name</label>
                        <input 
                            type="text" 
                            name='first_name' 
                            aria-label='first_name'
                            className='h4' 
                            id='first-name-sign'
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor='last-name-sign' className='h4'>Last Name</label>
                        <input
                            type="text" 
                            name='last_name' 
                            aria-label='last_name'
                            className='h4' 
                            id='last-name-sign'
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor='email-sign' className='h4' >Email</label>
                        <input
                            type="text" 
                            name='email' 
                            aria-label='email'
                            className='h4' 
                            id='email-sign'
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor='password-sign' className='h4' >Password</label>
                        <input
                            type="password" 
                            name='password' 
                            aria-label='password'
                            // className='password'
                            className='h4' 
                            id='password-sign' 
                            required
                        />
                    </div>

                    <button className='btn2'>
                        Register
                    </button>

                </form>
            </>
        )
    }
}