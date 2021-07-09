import { environment } from '../Components/data/environment';
import { enemyHpMultiply, itemPriceMultiply, rewardMultiply } from './constants';
import { forest_enemies } from '../Components/data/enemies/forest_enemies';
import { cave_enemies } from '../Components/data/enemies/cave_enemies';
import { hell_enemies } from '../Components/data/enemies/hell_enemies';

/* Set timer or not */
export const updateCategoryEnemy = (enemy) => {
    if (enemy.category === "midBoss" || enemy.category === "boss")
        return {...enemy, timer: true};
    return {...enemy};
}

/* Update enemy stats */
export const updateEnemy = (enemy, lvl) => {
    /* Update hp */
    for (let i = 1; i < lvl; ++i) {
        enemy.hp *= enemyHpMultiply;
        enemy.reward *= rewardMultiply;
    }
    enemy.hp = Math.floor(enemy.hp);
    enemy.reward = Math.floor(enemy.reward);

    /* Update reward */
    return enemy;
}

/* Create level */
export const createLevel = (level) => {
    /* Get current player level */
    const lvl = level;
    let enemy;

    /* Get environment of the level */
    const envIndex = parseInt(lvl / 50 - 0.01);
    const env = environment[envIndex];

    /* Align enemies to environment */
    if (env.name === 'Forest') {
      enemy = forest_enemies
    } else if (env.name === 'Cave') {
      enemy = cave_enemies
    } else if (env.name === 'Hell') {
      enemy = hell_enemies
    }

    /* Construct enemy */
    const boss = updateCategoryEnemy(enemy[7]);
    const midBoss = updateCategoryEnemy(enemy[6]);
    const e = updateCategoryEnemy(enemy[Math.round(Math.random(0, 5))]);

    /* Check lvl scale */
    if (lvl % 50 == 0) {
        return {...updateEnemy(boss, lvl), env, lvl};
    } else if (lvl % 5 == 0) {
        return {...updateEnemy(midBoss, lvl), env, lvl};
    } else {
        return {...updateEnemy(e, lvl), env, lvl};
    }
}

/* Format price */
export const formatItemPrice = (item) => {
    item.price *= itemPriceMultiply;

    return Math.ceil(item.price);
}

/* Format number */
export const formatNumber = (num) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
}

/* Random interval */
export const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

/* Create particle */
export const createParticle = (elem, mode) => {
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