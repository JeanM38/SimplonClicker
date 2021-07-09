import React, {Component} from 'react';
import { Item } from './Item';
import gold from '../ressources/images/gold.png'
import { formatNumber } from '../utils/functions';
import './Player.css';

export class Player extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <div className="playerHeader">
          <img src={gold}></img>
          <h2>{formatNumber(this.props.score)}</h2>
        </div>
        <div className="playerItems">
          {this.props.items.map((item, index) => {     
            return (
              <Item item={item} key={index} score={this.props.score} buyItem={this.props.buyItem}/>
            ) 
          })}
        </div>
      </div>
    )
  }
}