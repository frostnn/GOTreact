import React, { Component } from "react"
import ItemList from '../itemList/itemList';
import CharDetails, {Field}  from '../charDetails/charDetails';
import gotService from '../../services/gotService';
import RowBlock from '../../components/rowBlock/rowBlock';
import ErrorMessage from '../errorMessage/errorMessage'
import {withRouter} from 'react-router-dom'

 class booksPage extends Component {
  gotService = new gotService();
  state = {
    
    error: false
  }
 
  componentDidCatch(){
    this.setState({
        error: true
    })
  }
  render() {
    if(this.state.error) {
      return <ErrorMessage/> 
  }
 
 
    return (
      <ItemList 
      onCharSelected={(itemId)=>{
        this.props.history.push(`/books/${itemId}`)
      }} 
      getData={this.gotService.getAllBooks}
      renderItem={({name}) => name}/>
    )
  }
}

export default withRouter(booksPage)
