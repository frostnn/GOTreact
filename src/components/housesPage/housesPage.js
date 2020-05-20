import React, { Component } from "react"
import ItemList from '../itemList/itemList';
import CharDetails, {Field} from '../charDetails/charDetails';
import gotService from '../../services/gotService';
import RowBlock from '../../components/rowBlock/rowBlock';
import ErrorMessage from '../errorMessage/errorMessage'

export default class housesPage extends Component {
  gotService = new gotService();
  state = {
    selectedHouse: null,
    error: false
  }
  onCharSelected= (id) => {
    this.setState({
      selectedHouse: id
     })
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
  const itemList = (
    <ItemList 
      onCharSelected={this.onCharSelected} 
      getData={this.gotService.getAllHouses}
      renderItem={(item) => `${item.name} (${item.gender})`}/>
  )
  const charDetails = (
    <CharDetails 
    charId={this.state.selectedHouse}
    getData={this.gotService.getHouses}>
      <Field field="numberOfPages" label="Number Of Pages" />
      <Field field="publisher" label="Publisher" />
      <Field field="released" label="Released" />
    </CharDetails>
  )
    return (
      <RowBlock 
        left={itemList} 
        right={charDetails}/>
    )
  }
}

