import React, {Component} from 'react';
import { formatNumber } from '../utils/functions';
import './Enemy.css'

export class Enemy extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    let timer;
    if (this.props.enemy.timer) {
      timer = <h2 className="timer">Time remaining : {this.props.timer}</h2>
    }

    return (
      <div className="enemy-wrap">
        <div className="img-wrap">
          <img src={this.props.enemy.env.src} />
          <div className="stats">
            <h2>{this.props.enemy.env.name} - Lvl {this.props.enemy.lvl}</h2>
            { timer }
            <div className="enemy">
            <h3 className="damagePerSec">{this.props.damagePerSec} DPS</h3>
              <button onClick={() => this.props.damageEnemy('clic')}>
                <img src={this.props.enemy.img}/>
              </button>
              <div className="enemy-header">                
                <h2>{this.props.enemy.name}</h2>
                <progress max={this.props.hpEnemy} value={this.props.enemy.hp}></progress>
                <h3>{formatNumber(this.props.enemy.hp)}/{formatNumber(this.props.hpEnemy)} HP</h3>
              </div>
            </div>
          </div>
          <div className="sign">By @JeanM</div>
        </div>
      </div>
    )
  }
}