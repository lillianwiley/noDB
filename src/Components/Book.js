import React, {Component} from 'react';

class Book extends Component{
    constructor(){
        super();

        this.state = {
            counter: 0
        }
    }

    handleNext(){
        let i =this.state.counter+1
        this.setState({
            counter: i
        })
    }

    render(){
        // const{author, flapcopy, titleweb} = this.props.oneBook;
        let title =''
        if(this.props.arrBook){
            console.log('we made it ');
            let showBook = this.props.arrBook[this.state.counter]
            console.log('this is the showBook obj' +showBook);
            title = <div>
                        <h3>{showBook.titleweb}</ h3>
                        <h3>{showBook.author}</ h3>
                        <h3>{showBook.flapcopy}</ h3>
                    </div>

        }
        return(
            <div>
                <input type="checkbox"/>
                {title}
                <button onClick={()=>this.handleNext()}>Click for next</button>
            </div>
        )
    }
}
export default Book;
