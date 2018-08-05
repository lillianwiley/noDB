import React, {Component} from 'react';
import axios from 'axios';

class Favorites extends Component{
    constructor(){
        super();

        this.state = {
            favBooks: []
        }

    }
    componentDidMount(){
        axios.get('/api/books')
            .then(res => {
                console.log(res.data)
                this.setState({
                    favBooks: res.data
                })
            })
    }

    render(){
        return(
            <div>
                <h2>Reading List</h2>
                {this.state.favBooks}
            </div>
        )

    }
}

export default Favorites;