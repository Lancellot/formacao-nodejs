import * as PlayerRepository from "../repositories/players-repository";
import { HttpResponseInterface } from "../interfaces/http-response-interface";
import { InsertPlayerInterface } from "../interfaces/players-interface";
import * as HttpRequest from "../utils/http-helper";

export const getAllPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayer();
  let response: HttpResponseInterface;

  if (data) {
    response = await HttpRequest.ok(data);
  } else {
    response = await HttpRequest.noContent();
  }

  return response;
};

export const getPlayerById = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);
  let response: HttpResponseInterface;

  if (data) {
    response = await HttpRequest.ok(data);
  } else {
    response = await HttpRequest.noContent();
  }

  return response;
};

export const insertPlayer = async (dataPlayer: InsertPlayerInterface) => {
  let dataToSavePlayer = {
    ...dataPlayer,
    statistics: {
      Overall: 85,
      Pace: 92,
      Shooting: 76,
      Passing: 88,
      Dribbling: 86,
      Defending: 96,
      Physical: 99,
    },
  };
  const data = await PlayerRepository.insertPlayer(dataToSavePlayer);
  let response: HttpResponseInterface;

  if (data) {
    response = await HttpRequest.ok(data);
  } else {
    response = await HttpRequest.noContent();
  }

  return response;
};

export const deletePlayer = async (id: number) => {
  let response: HttpResponseInterface;
  const data = await PlayerRepository.deletePlayer(id);

  if (data) {
    response = await HttpRequest.ok(data);
  } else {
    response = await HttpRequest.noContent();
  }
  return response;
};

export const patchPlayer = async (id: number) => {
  let response: HttpResponseInterface;
  const data = await PlayerRepository.patchPlayer(id);

  if (data) {
    response = await HttpRequest.ok(data);
  } else {
    response = await HttpRequest.noContent();
  }

  return response;
};
