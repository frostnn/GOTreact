import React, {Component} from 'react';
import gotService from '../../services/gotService';
import './charDetails.css';
export default class CharDetails extends Component {
    gotService = new gotService();
    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar()
    }
    updateChar = () =>{
        const {charId} = this.props
        if(!charId) {
            return
        }
        this.gotService.getCharacter(charId)
        .then((char) => {
          this.setState({char})  
        })
    }
    
    render() {
        if(!this.state.char) {
            return <span className="select-error">Please select a Character</span>
        }
        const  { name, born, gender, died, culture } = this.state.char;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}