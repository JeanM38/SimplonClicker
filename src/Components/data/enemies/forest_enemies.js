/* FOREST */
import chaman from '../../../ressources/images/forest/chaman.png';
import executioner from '../../../ressources/images/forest/executioner.png';
import great_spirit from '../../../ressources/images/forest/great-spirit.png';
import knight from '../../../ressources/images/forest/knight.png';
import spirit from '../../../ressources/images/forest/spirit-of-the-forest.png';
import ancient from '../../../ressources/images/forest/the-ancient.png';
import mushroomSoldier from '../../../ressources/images/bosses/mushroom-soldier.png';
import raznak from '../../../ressources/images/bosses/raznak-the-great.png';

export const forest_enemies = [
    /* Standard enemies */
    {
        name: "Chaman",
        category: 'standard',
        img: chaman,
        hp: 30,
        reward: 20
    },
    {
        name: "Executioner",
        category: 'standard',
        img: executioner,
        hp: 30,
        reward: 20
    },
    {
        name: "Great Spirit",
        category: 'standard',
        img: great_spirit,
        hp: 30,
        reward: 20
    },
    {
        name: "Knight",
        category: 'standard',
        img: knight,
        hp: 30,
        reward: 20
    },
    {
        name: "Spirit of the forest",
        category: 'standard',
        img: spirit,
        hp: 30,
        reward: 20
    },
    {
        name: "The Ancient",
        category: 'standard',
        img: ancient,
        hp: 30,
        reward: 20
    },
    /* Mid-boss */
    {
        name: "Mushroom Man",
        category: 'midBoss',
        img: mushroomSoldier,
        hp: 100,
        reward: 100
    },
    /* Main boss */
    {
        name: "Raznak the great",
        category: 'boss',
        img: raznak,
        hp: 300,
        reward: 200
    }
]