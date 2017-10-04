import React, { Component } from 'react';
import { connect } from 'react-redux'; // single property if written like this { connect }

class BookDetail extends Component {

    render() {
        if(!this.props.book) {

            return <div>Select a book to get Started</div>
        }
        return(
            <div>
                <h4>Details for: </h4>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }

}

function mapStateToProps (state) {
    // Whatever is returned will show up as props inside of BookList container
    return {
        book: state.activeBook,
    };
}

export default connect(mapStateToProps)(BookDetail)