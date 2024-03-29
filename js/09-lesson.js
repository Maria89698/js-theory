const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playerIdToUpdate = 'player-3';
players.map((player) => {
    if (playerIdToUpdate === player.id) {
        return {
            ...player,
            timePlayed: player.timePlayed += 100
        }
    }
})

const numbers = [5, 10, 15, 20, 25];

const onlinePlayers = players.filter (player =>{
    return player.online;
}).map(onlinePlayer => onlinePlayer.name);

console.log(onlinePlayers);


const hardcorePlayers = players.filter;
