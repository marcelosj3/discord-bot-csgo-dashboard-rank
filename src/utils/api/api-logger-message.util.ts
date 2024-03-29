import { ChatInputCommandInteraction } from "discord.js";

import { APIVerbs } from "../../enums";

import { Logger, LoggerLevel, LoggerName } from "../logger";

export const APILoggerMessage = (
  verb: APIVerbs,
  path: string,
  status: "WAITING" | "SUCCESS" | "FAIL",
  data?: any,
  interaction?: ChatInputCommandInteraction,
  log: boolean = true
) => {
  const dataInfo = data ? `payload: ${JSON.stringify(data)}` : "";
  const message = `${verb} ${path} [${status}] - ${dataInfo}`;
  if (log) {
    Logger(LoggerName.API, LoggerLevel.INFO, message, interaction);
  }
  return message;
};
