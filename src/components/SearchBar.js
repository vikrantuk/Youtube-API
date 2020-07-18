import React, { Component } from 'react';

class SearchBar extends Component{
    state = {term: ''};

    onInputChange =(event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();

        //TODO: Make sure we call callback from parent component
    };

    render(){
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;