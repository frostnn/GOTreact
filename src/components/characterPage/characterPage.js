import React, { Component } from 'react';
import ItemList from '../itemList/itemList';
import CharDetails , {Field} from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage/errorMessage'
import gotService from '../../services/gotService';
import RowBlock from '../../components/rowBlock/rowBlock';


export default class characterPage extends Component {
  gotService = new gotService();
  state = {
    selectedChar: 130,
    error: false
  }
  onCharSelected= (id) => {
    this.setState({
        selectedChar: id
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
      getData={this.gotService.getAllCharacters}
      renderItem={(item) => `${item.name} (${item.gender})`}/>
  )
  const charDetails = (
    <CharDetails charId={this.state.selectedChar}>
    <Field field="gender" label="Gender" />
    <Field field="born" label="Born" />
    <Field field="died" label="Died" />
    <Field field="culture" label="Culture" />
    </CharDetails>
  )
    return (
      <RowBlock 
        left={itemList} 
        right={charDetails}/>
    )
  }
}