import React, { Component } from 'react';
import RxApiService from '../services/RxNormApiService';
import '../styles/searchbar.scss';

export default class Searchbar extends Component {
    state = { error: null };

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({ error: null });

        const term  = ev.target[0].value;
        // console.log('term', term);
        
        RxApiService.searchByTerm(term)
        .then(res => {
            term.value = '';
            console.log('res', res);
        })
        .catch(res => {
            this.setState({ error: res.error });
        });
    } 

    render() {
        const { error } = this.state;
        
        return (
            <main id='searchbar'>
                <h1>Search for Prescriptions</h1>
                <form onSubmit={this.handleSubmit}>
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    <div className='input-box'>
                        <label 
                            htmlFor='term'
                            className='hidden'
                        >
                            term
                        </label>
                        <input
                            autoComplete="on"
                            type='text'
                            name="term"
                            aria-label="term"
                            className="term"
                            id='term'
                            required
                        />
                    </div>
                    <button type='submit' className='btn2'>Search</button>
                </form>
            </main>
        )
    }
}
