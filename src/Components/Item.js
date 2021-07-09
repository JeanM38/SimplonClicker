import React, {Component} from 'react';
import { formatNumber } from '../utils/functions';

export class Item extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="item">
                <div className="itemImg">
                    <img src={this.props.item.img}></img>
                </div>
                <div className="itemBody">
                    <h3>{this.props.item.name} - Lvl {this.props.item.level}</h3>
                    <p>{this.props.item.description}</p>
                </div>
                <div className="itemBuy">
                    {this.props.score >= this.props.item.price ?                    
                        <button onClick={() => this.props.buyItem(this.props.item)}><p>{formatNumber(this.props.item.price)}<br/>Buy</p></button> :
                        <button disabled><p>{formatNumber(this.props.item.price)}<br/>Buy</p></button>
                    }
                </div>
            </div>
        )
    }
}