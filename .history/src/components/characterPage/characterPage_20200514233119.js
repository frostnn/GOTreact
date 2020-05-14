import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';

export default class characterPage extends Component {
  state = {
    selectedChar: 130,
  }
  onCharSelected= (id) => {
    this.setState({
        selectedChar: id
     })
}
  render() {
    return (
      <Row>
        <Col md='6'>
            <ItemList onCharSelected={this.onCharSelected} />
        </Col>
        <Col md='6'>
            <CharDetails charId={this.state.selectedChar} />
        </Col>
      </Row>
    )
  }
}