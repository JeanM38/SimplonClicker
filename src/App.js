import './App.css';
import React, { Component } from 'react';
import { Player } from './Components/Player';
import { Enemy } from './Components/Enemy';
import { createLevel, formatItemPrice, getRandomArbitrary, formatNumber } from './utils/functions';

export class App extends Component {
  constructor (props) {
    super(props);
    this.addLevel = this.addLevel.bind(this)
    this.damageEnemy = this.damageEnemy.bind(this)
    this.buyItem = this.buyItem.bind(this)
    this.createParticle = this.createParticle.bind(this)
    this.state = {
      level:          null,
      score:          null,
      items:          null,
      damagePerSec:   null,
      damagePerClic:  null,
      enemy:          null,
      hpEnemy:        null,
      interval:       null,
      criticalChance: null
    }
    this.dataIsReturned = false
  }

  addLevel () {
    this.setState({
      level: ++this.state.level,
      enemy: createLevel(this.state.level),
      hpEnemy: createLevel(this.state.level).hp
    });
  }

  createParticle (elem, mode) {
    const particle = document.createElement('p');
    let val = document.createTextNode(formatNumber(elem));
    if (mode === "critical") {
      particle.classList = 'particle critical';
    } else if (mode === "dmg") {
      particle.classList = 'particle';
    } else {
      particle.classList = 'particle treasure';
      val = document.createTextNode(`+${formatNumber(elem)} Gold`);
    }

    particle.appendChild(val);
    particle.style.top = `${getRandomArbitrary(20, 30)}%`;
    particle.style.left = `${getRandomArbitrary(30, 70)}%`;
    document.querySelector('.enemy-wrap').appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 3000)
  }

  damageEnemy (method) {
    const enemyImg = document.querySelector('.enemy img');

    if (method === "clic") {
      let criticalRoll = Math.floor(Math.random() * this.state.criticalChance) + 1;

      if (criticalRoll === this.state.criticalChance) {
        criticalRoll = 2;
        enemyImg.animate({
          transform: "scale(1.15)"
        }, 50);
        this.createParticle(this.state.damagePerClic * criticalRoll, "critical");
      } else {
        criticalRoll = 1;
        enemyImg.animate({
          transform: "scale(1.05)"
        }, 50);
        this.createParticle(this.state.damagePerClic * criticalRoll, "dmg");
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
      this.createParticle(this.state.enemy.reward,'particle treasure')
      this.addLevel();
    }
  }

  /* Init app */
  componentDidMount () {
    this.setState({
      level:            1,
      score:            0,
      items:            [],
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

  render () {
    if (this.dataIsReturned) {
      return (
        <div className="App">
          <Player 
            level={this.state.level} 
            items={this.state.items}
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