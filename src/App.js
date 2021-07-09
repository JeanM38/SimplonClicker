import './App.css';
import React, { Component } from 'react';
import { Player } from './Components/Player';
import { Enemy } from './Components/Enemy';
import { createLevel, formatItemPrice, createParticle } from './utils/functions';

export class App extends Component {
  constructor (props) {
    super(props);
    this.addLevel = this.addLevel.bind(this)
    this.damageEnemy = this.damageEnemy.bind(this)
    this.buyItem = this.buyItem.bind(this)
  }

  addLevel () {
    this.setState({
      level: ++this.state.level,
      enemy: createLevel(this.state.level),
      hpEnemy: createLevel(this.state.level).hp
    });
  }

  /* Damage on enemy on clic or DPS */
  damageEnemy (method) {
    const enemyImg = document.querySelector('.enemy img');

    if (method === "clic") {
      let criticalRoll = Math.floor(Math.random() * this.state.criticalChance) + 1;

      if (criticalRoll === this.state.criticalChance) {
        criticalRoll = 2;
        enemyImg.animate({
          transform: "scale(1.15)"
        }, 50);
        createParticle(this.state.damagePerClic * criticalRoll, "critical");
      } else {
        criticalRoll = 1;
        enemyImg.animate({
          transform: "scale(1.05)"
        }, 50);
        createParticle(this.state.damagePerClic * criticalRoll, "dmg");
      }

      const damage = this.state.damagePerClic * criticalRoll;
      this.state.enemy.hp -= damage;  
    } else if (method === "interval") {
      this.state.enemy.hp -= this.state.damagePerSec;
    }

    if (this.state.enemy.hp > 0) {
      this.setState({
        enemy: this.state.enemy
      })
    } else {
      const newsScore = this.state.score + this.state.enemy.reward;
      this.setState({
        score: newsScore
      })
      createParticle(this.state.enemy.reward,'particle treasure')
      this.addLevel();
    }
  }

  /* When user buys an item */
  buyItem (item) {
    if (item.price <= this.state.score) {      
      if (item.category === "clicDamage") {
        this.setState({
          score: this.state.score - item.price,
          damagePerClic: this.state.damagePerClic + item.damage
        })
      } else {
        this.setState({
          score: this.state.score - item.price,
          damagePerSec: this.state.damagePerSec + item.damage
        })
      }

      /* Update item level */
      ++item.level;
      item.price = formatItemPrice(item);
    }
  }

  /* Init app */
  componentDidMount () {
    this.setState({
      level:            1,
      score:            0,
      damagePerSec:     0,
      damagePerClic:    1,
      enemy:            createLevel(1),
      hpEnemy:          createLevel(1).hp,
      criticalChance:   10,
      interval: setInterval(() => {
        this.damageEnemy("interval");
      }, 1000)
    });
    this.dataIsReturned = true;
  }

  render () {
    if (this.dataIsReturned) {
      return (
        <div className="App">
          <div id="tooltip"></div>
          <Player 
            level={this.state.level} 
            score={this.state.score} 
            buyItem={this.buyItem}
          />
          <Enemy 
            enemy={this.state.enemy} 
            score={this.state.score}
            damageEnemy={this.damageEnemy}
            damagePerSec={this.state.damagePerSec}
            hpEnemy={this.state.hpEnemy}
          />
        </div>
      )
    } else {
      return (
        <div className="App">
          <div className="loading"></div>
        </div>
      )
    }
  }
}

export default App;