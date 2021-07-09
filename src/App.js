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
    this.timer = this.timer.bind(this)
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
      /* Clic damage */
      let criticalRoll = Math.floor(Math.random() * this.state.criticalChance) + 1;
      let rewardRoll = Math.floor(Math.random() * this.state.rewardChance) + 1;

      /* Critical damage? */
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

      /* Bonus reward? */
      if (rewardRoll === this.state.rewardChance) {
        this.state.score += Math.round(this.state.enemy.reward * 0.05);
        createParticle(Math.round(this.state.enemy.reward * 0.05), "treasure");
      }

      const damage = this.state.damagePerClic * criticalRoll;
      this.state.enemy.hp -= damage;  
    } else if (method === "interval") {
      /* DPS */
      this.state.enemy.hp -= this.state.damagePerSec;
    }

    if (this.state.enemy.hp > 0) {
      this.setState({
        enemy: this.state.enemy,
        score: this.state.score
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

  /* Timer */
  timer (time) {
    let timer;
    if (this.state.timer >= 1) {
      if (this.state.enemy.category === "midBoss" || this.state.enemy.category === "boss") {
        this.setState({
          timer: --this.state.timer
        })
      } else {
        clearInterval(timer);
      }
    } else {
      this.setState({
        timer: 15,
        level: --this.state.level,
        enemy: createLevel(this.state.level),
        hpEnemy: createLevel(this.state.level).hp
      });
    }
  }

  /* Init app */
  componentDidMount () {
    this.setState({
      level:            1,
      score:            0,
      timer:            15,
      damagePerSec:     0,
      damagePerClic:    1,
      enemy:            createLevel(1),
      hpEnemy:          createLevel(1).hp,
      criticalChance:   10,
      rewardChance:     10,
      interval: setInterval(() => {
        this.damageEnemy("interval");
      }, 1000),
      timerInterval: setInterval(() => {
        this.timer(15);
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
            timer={this.state.timer}
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