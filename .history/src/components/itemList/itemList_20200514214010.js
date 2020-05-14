import React, {Component} from 'react';
import GotService from '../../services/gotService';
import './itemList.css';
import Spinner from '../spinner/spinner';
export default class ItemList extends Component {
    state = {
        charList: null
    }
     componentDidMount() {
         this.GotService.getAllCharacters()
         .then((charList) => {
             this.setState({
                 charList
             })
         })
     }
    render() {
        const {charList} = this.state
        if(!charList) {
            return <Spinner/>
        }
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}