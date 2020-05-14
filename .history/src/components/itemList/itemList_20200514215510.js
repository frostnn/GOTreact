import React, {Component} from 'react';
import gotService from '../../services/gotService';
import './itemList.css';
import Spinner from '../spinner/spinner';
export default class ItemList extends Component {
    state = {
        charList: null
    }
     componentDidMount() {
         this.gotService.getAllCharacters()
         .then((charList) => {
             this.setState({
                 charList
             })
         })
     }
     renderItem(arr) {
         return arr.map((item, i) => {
             return (
                <li 
                key={i}
                className="list-group-item">
                    John Snow
                </li>
             )
         } )
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