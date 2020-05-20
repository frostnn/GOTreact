import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../../components/errorMessage/errorMessage'
import CharacterPage from '../characterPage/characterPage'
import gotService from '../../services/gotService';
import BooksPage from '../booksPage/booksPage';
import HousesPage from '../housesPage/housesPage';
import BooksItem from '../booksPage/booksItem';



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
            <div className="app">
             <BrowserRouter>
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
                    
                    <Route path="/Characters" component={CharacterPage}/>
                    <Route path="/Houses" component={HousesPage}/>
                    <Route path="/Books" exact component={BooksPage}/>
                    <Route path="/Books/:id" render={
                        ({match}) =>{
                            const { id } = match.params
                            return <BooksItem bookID={id}/>
                    }}/>
                </Container>
             </BrowserRouter>
            </div>
        );
    }
   
};
