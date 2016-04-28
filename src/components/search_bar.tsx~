///<reference path='../../typings/main.d.ts' />
import * as React from 'react';

class SearchBar extends React.Component <any,any> {
    constructor(props: any) {

        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return <div className="search-bar">
		<input value={this.state.term} onChange = {
			(event: React.KeyboardEvent) => { this.onInputChange((event.target as HTMLInputElement).value);}
		}
		type = "text" / > 
		<br/>
		value of the input is {this.state.term}
		</div>
    }


	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}
export default SearchBar;
