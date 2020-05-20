import React, { Component } from "react"
import CharDetails, {Field}  from '../charDetails/charDetails';
import gotService from '../../services/gotService';


export default class BooksItem extends Component {
  gotService = new gotService();
  state = {
    selectedBook: 3,
    error: false
  }
  render() {
    return (
      
        <CharDetails 
          getData={this.gotService.getBook}
          charId={this.props.BookId}>
          <Field field="numberOfPages" label="Number Of Pages" />
          <Field field="publisher" label="Publisher" />
          <Field field="released" label="Released" />
        </CharDetails>
      
    )
  }
}