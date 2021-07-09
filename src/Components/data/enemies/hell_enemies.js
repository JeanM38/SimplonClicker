/* Hell */
import bigOne from '../../../ressources/images/hell/big-one.png';
import curseMonster from '../../../ressources/images/hell/curse-monster.png';
import darkSoldier from '../../../ressources/images/hell/dark-soldier.png';
import daemon from '../../../ressources/images/hell/daemon.png';
import skeleton from '../../../ressources/images/hell/skeleton.png';
import slave from '../../../ressources/images/hell/slave.png';
import archiDaemon from '../../../ressources/images/bosses/archi-daemon.png';
import theOldOne from '../../../ressources/images/bosses/the-old-one.png';

export const hell_enemies = [
    /* Standard enemies */
    {
        name: "The Big One",
        category: 'standard',
        img: bigOne,
        hp: 30,
        reward: 20
    },
    {
        name: "Curse Monster",
        category: 'standard',
        img: curseMonster,
        hp: 30,
        reward: 20
    },
    {
        name: "Dark Soldier",
        category: 'standard',
        img: darkSoldier,
        hp: 30,
        reward: 20
    },
    {
        name: "Daemon",
        category: 'standard',
        img: daemon,
        hp: 30,
        reward: 20
    },
    {
        name: "Skeleton",
        category: 'standard',
        img: skeleton,
        hp: 30,
        reward: 20
    },
    {
        name: "Slave",
        category: 'standard',
        img: slave,
        hp: 30,
        reward: 20
    },
    /* Mid-boss */
    {
        name: "Archi Daemon",
        category: 'midBoss',
        img: archiDaemon,
        hp: 100,
        reward: 100
    },
    /* Main boss */
    {
        name: "The Old One",
        category: 'boss',
        img: theOldOne,
        hp: 300,
        reward: 200
    }
]