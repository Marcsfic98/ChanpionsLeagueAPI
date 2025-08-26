import { Request,Response } from "express"
import { createPlayerService, deletPlayerService, getPlayerByIdService, getPlayerService, updatePlayerService } from "../services/player-service"
import { badRequest, noContent } from "../utils/http-helper";
import { statisticsModel } from "../models/statistics-model";


export const getPlayer = async (req:Request , res:Response)=>{
        const httpResponse = await getPlayerService();

        res.status(httpResponse.statusCode).json(httpResponse.body)
    };

export const getPlayerById = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body)
};

export const postPlayer = async (req:Request, res:Response) => {
    const bodyValue = req.body;
    const httpResponse = await createPlayerService(bodyValue);
    
    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deletPlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const HttpResponse = await deletPlayerService(id);

     res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const updatePlayer = async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    const bodyValue:statisticsModel = req.body
    const httpResponse = await updatePlayerService(id,bodyValue)

    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}
