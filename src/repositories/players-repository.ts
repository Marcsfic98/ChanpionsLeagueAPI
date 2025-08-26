import { playerModel } from "../models/player-model";

const dataBase: playerModel[] = [
    {id:1,name:"messi"},
    {id:2,name:"Ronaldinho"},
    {id:3,name:"Neymar"},
    {id:4,name:"Cristiano ronaldo"}
];

export const findAllPlayers = async ():Promise<playerModel[]> => {
    return dataBase
};

export const findPlayerById = async (id:number):Promise<playerModel | undefined> => {
    return dataBase.find(player => player.id === id)
}

export const insertPlayer = async (player: playerModel) => {
    dataBase.push(player)
}