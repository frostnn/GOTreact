import React, {Component} from 'react';
import gotService from '../../services/gotService';
import './charDetails.css';
export default class CharDetails extends Component {
    gotService = new gotService();
    state = {
        char: null
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
        return (
            <div className="char-details rounded">
                <h4>John Snow</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </li>
                </ul>
            </div>
        );
    }
}