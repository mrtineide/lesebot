import { Command, CommandoClient, CommandoMessage } from "discord.js-commando";
import { Message } from "discord.js";
import axios from "axios";

class DadJokeCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: "dadjoke",
      group: "fun",
      memberName: "dadjoke",
      description: "DAD YOKE, ha ha ha",
    });
  }

  run = async (message: CommandoMessage): Promise<Message | Message[]> => {
    const api = await axios.get(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: "application/json",
      },
    });
    const joke = api.data.joke;

    return await message.say(joke);
  };
}

export default DadJokeCommand;