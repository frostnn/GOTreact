import React, {Component} from 'react';
import gotService from '../../services/gotService.js';
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
                    {item.name}
                </li>
             )
         } )
     }
    render() {
        
        const {charList} = this.state
        if(!charList) {
            return <Spinner/>
        }
        const items = this.renderItem(charList)
        return (
            <ul className="item-list list-group">
              {items}
            </ul>
        );
    }
}