import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/spinner'
export default class RandomChar extends Component {
constructor(){
    super();
    this.updateChar();
}

gotService = new gotService();
    state = {
      char: {},
      loading: true,
    }

onCharLoaded = (char) => {
    this.setState({
        char,
        loading: false
    })
   
}

    updateChar(){
        const id = Math.floor(Math.random() * 180 + 20);
        this.gotService.getCharacter(id)
            .then((char) => {
                this.setState({char})
            })
    }
    render() {
        const {char: { name, born, gender, died, culture }, loading } = this.state;
        if(loading) {
           return <Spinner/>
        }
        return (
            <div className="random-block rounded">
                <h4>Random Character: { name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{ born }</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{ died }</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{ culture }</span>
                    </li>
                </ul>
            </div>
        );
    }
}
