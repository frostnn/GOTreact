import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import ErrorMessage from '../../components/errorMessage/errorMessage'

export default class App extends Component {
    state = {
        showRandomChar: true,
        selectedChar: null,
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    toggleShowRandomChar = () => {
        this.setState({
           showRandomChar: !this.state.showRandomChar
        })
    }

    onCharSelected= (id) => {
        this.setState({
            selectedChar: id
         })
    }

    render(){
             
             const randomChar = this.state.showRandomChar ? <RandomChar/> : null
             
             if(this.state.error) {
                 return (
                     <ErrorMessage/>
                 )
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
                            <button onClick={this.toggleShowRandomChar}>Show random Character</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>
                </Container>
            </ErrorMessage>
        );
    }
   
};
