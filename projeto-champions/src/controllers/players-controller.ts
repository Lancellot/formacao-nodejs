import { Request, Response } from "express";
import * as PlayerServices from "../services/players-services";

export const getAllPlayers = async (request: Request, response: Response) => {
  const httpResponse = await PlayerServices.getAllPlayerService();
  response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {
  const id = request.params.id;
  const httpResponse = await PlayerServices.getPlayerById(Number(id));
  response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const insertPlayer = async (request: Request, response: Response) => {
  const httpResponse = await PlayerServices.insertPlayer(request.body);
  response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (request: Request, response: Response) => {
  const httpResponse = await PlayerServices.deletePlayer(
    Number(request.params.id)
  );
  response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const patchPlayer = async (request: Request, response: Response) => {
  const httpResponse = await PlayerServices.patchPlayer(
    Number(request.params.id)
  );

  response.status(httpResponse.statusCode).json(httpResponse.body);
};
