import { playerModel } from "../models/player-model";
import { findAllPlayers, findPlayerById, insertPlayer } from "../repositories/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper"


export const getPlayerService = async () => {
    const data = await findAllPlayers();
    let response = null
    if(data){
         response = await  ok(data);
    }else{
        response = await  noContent();
    }
    return response;
}

export const getPlayerByIdService = async (id:number) => {
    const data = await findPlayerById(id)
    let response = null 

    if(data){
         response = await  ok(data);
    }else{
        response = await  noContent();
    }
    return response;
};

export const createPlayerService = async (player:playerModel) => {
    
    let response = null

    if(player){
       await insertPlayer(player);
      response = created()
    }else{
        response = badRequest();
    }

    return response
}