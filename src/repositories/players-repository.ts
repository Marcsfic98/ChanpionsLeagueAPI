import { playerModel } from "../models/player-model";

const dataBase: playerModel[] = [
    {id:1,name:"messi"},
    {id:2,name:"Ronaldinho"}
];

export const findAllPlayers = async ():Promise<playerModel[]> => {
    return dataBase
};

export const findPlayerById = async (id:number):Promise<playerModel | undefined> => {
    return dataBase.find(player => player.id === id)
}