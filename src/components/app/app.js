import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../../components/errorMessage/errorMessage'
import CharacterPage from '../characterPage/characterPage'
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import gotService from '../../services/gotService';
export default class App extends Component {
    gotService = new gotService();
    state = {
        showRandomChar: true,
        error: false
    }

  
  
    toggleShowRandomChar = () => {
        this.setState({
           showRandomChar: !this.state.showRandomChar
        })
    }

    render(){
             
             const randomChar = this.state.showRandomChar ? <RandomChar/> : null

             if(this.state.error) {
                 return <ErrorMessage/> 
             }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <button 
                            onClick={this.toggleShowRandomChar} 
                            className="btn btn-secondary"
                            style={{marginBottom: 40, marginLeft: 120}}>
                            Show random Character</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <Row>
                    <Col md='6'>
                        <ItemList 
                        onCharSelected={this.onCharSelected} 
                        getData={this.gotService.getAllBooks}
                        />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar} />
                    </Col>
                  </Row>
                  <Row>
                  <Col md='6'>
                      <ItemList 
                      onCharSelected={this.onCharSelected} 
                      getData={this.gotService.getAllHouses}
                     />
                  </Col>
                  <Col md='6'>
                      <CharDetails charId={this.state.selectedChar} />
                  </Col>
                </Row>
                </Container>
            </>
        );
    }
   
};
