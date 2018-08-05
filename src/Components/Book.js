import React, {Component} from 'react';
import axios from 'axios';

class Book extends Component{
    constructor(){
        super();

        this.state = {
            counter: 0,
            books: []
        }
    }

    handleNext(){
        let i =this.state.counter+1
        this.setState({
            counter: i
        })
    }
    handleClick(val){
        const {titleweb, authorweb} = val
        axios.post('/api/books', {titleweb, authorweb }).then(res => {
            console.log(titleweb, authorweb)
            this.setState({
                books: res.data
            })
        })
    }

    render(){
        // const{author, flapcopy, titleweb} = this.props.oneBook;
        let title =''
        if(this.props.arrBook){
            console.log('we made it ');
            let showBook = this.props.arrBook[this.state.counter]
            //console.log('this is the showBook obj' +showBook);
            title = <div>
                        <button onClick={() => this.handleClick(showBook)}> Add to Favorites </button>
                        <h3>{showBook.titleweb}</ h3>
                        <h3>{showBook.author}</ h3>
                        <h3>{showBook.flapcopy}</ h3>
                    </div>

        }
        return(
            <div>
                {title}
                <button onClick={()=>this.handleNext()}>Click for next</button>
            </div>
        )
    }
}
export default Book;
