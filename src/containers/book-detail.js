import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render() {
        // state.activeBook has not set
        if(!this.props.book) {
            return (
                <div>Select a book to get started.</div>
            );
        }

        // state.activeBook is set by the reducer_active_book
        return (
            <div> 
                 <h3> Details for:  </h3>
                 <div> Title: { this.props.book.title } </div>
                 <div> Pages: { this.props.book.pages } </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        book : state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);