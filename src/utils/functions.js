import { environment } from '../Components/data/environment';
import { enemyHpMultiply, itemPriceMultiply, rewardMultiply } from './constants';
import { enemy } from '../Components/data/enemy';

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

    /* Get environment of the level */
    const envIndex = parseInt(lvl / 50 - 0.01);
    const env = environment[envIndex];

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

/* Append item tooltip */
export const appendItemStats = (e, item) => {
    if (e.target.closest('.item') && document.getElementById('#tooltip') === null) {
        const elem = document.createElement
    }
}

/* Random interval */
export const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }