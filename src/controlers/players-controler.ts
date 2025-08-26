import { Request,Response } from "express"
import { createPlayerService, deletPlayerService, getPlayerByIdService, getPlayerService } from "../services/player-service"
import { badRequest, noContent } from "../utils/http-helper";


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