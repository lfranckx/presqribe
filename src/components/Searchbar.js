import React, { Component } from 'react';
import RxApiService from '../services/RxNormApiService';
import '../styles/searchbar.scss';

export default class Searchbar extends Component {
    state = { error: null };

    handleSubmit = ev => {
        ev.preventDefault();
        console.log(ev);
        this.setState({ error: null });
        const { term } = ev.target;

        RxApiService.searchByTerm(term)
        .then(res => {
            term.value = '';
            console.log(res);
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
                    <div className='input-box'>
                        <label 
                            htmlFor='search'
                            className='hidden'
                        >
                            search
                        </label>
                        <input
                            type='text'
                            name="term"
                            aria-label="search"
                            className="search"
                            id='search'
                        />
                    </div>
                    <button className='btn2'>Search</button>
                </form>
                <div role='alert'>{error && <p className='error'>{error}</p>}</div>
            </main>
        )
    }
}
