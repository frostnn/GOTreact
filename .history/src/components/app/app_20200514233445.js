import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../../components/errorMessage/errorMessage'
import CharacterPage from '../characterPage/characterPage'

export default class App extends Component {
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
                            <button onClick={this.toggleShowRandomChar}>Show random Character</button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
   
};
