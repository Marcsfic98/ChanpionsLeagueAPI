import { playerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";

const dataBase: playerModel[] = [
    {   
        id:1,
        name:"messi",
        statistics:{
            chute:85,
            velocidade:72
        }
    },
    {
        id:2,
        name:"Ronaldinho",
        statistics:{
            chute:85,
            velocidade:72
        }
    },
    {
        id:3,
        name:"Neymar",
        statistics:{
            chute:85,
            velocidade:72
        }
    },
    {
        id:4,
        name:"Cristiano ronaldo",
        statistics:{
            chute:85,
            velocidade:72
        }
    }
];

export const findAllPlayers = async ():Promise<playerModel[]> => {
    return dataBase
};

export const findPlayerById = async (id:number):Promise<playerModel | undefined> => {
    return dataBase.find(player => player.id === id)
};

export const insertPlayer = async (player: playerModel) => {
    dataBase.push(player)
};

export const deleteOnePlayer = async (id:number) => {
    const index = dataBase.findIndex(p => p.id === id);

    if(index !== -1){
        dataBase.splice(index,1)
    }
    
};

export const findAndModifyPlayer = async (id:number , statistics:statisticsModel):Promise<playerModel>=> {
    const playerIndex = dataBase.findIndex(p => p.id === id)

    if(playerIndex !== -1){
        dataBase[playerIndex].statistics = statistics
    }

    return dataBase[playerIndex]
}