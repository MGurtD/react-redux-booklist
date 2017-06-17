import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    
    renderList() {
        // Map to a callback function every item on the array
        return this.props.books.map( (book) => {
            return (
                // Generates for every item a list element
                <li 
                    key={book.title} 
                    onClick={ () => this.props.selectBook(book) }
                    className="list-group-item"> {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }

}

function mapStateToProps(state) {
    // Whenever is returned will show up as props 
    // inside the BookList
    return {
        books : state.books
    };
}

// Anything returned from this function, will end up as props
// on the BookList component
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch) // this.props.selectedBook is binded throught the action
}

// Propote BookList from a component to a container  - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);