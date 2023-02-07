import { Client, HTTPError, Message, TextMessage } from "@line/bot-sdk";

const config = {
  channelAccessToken: "", // typo Token
  channelSecret: "",
};

export const client = new Client(config);

// userId: ID of a receiver
export async function send(
  userId: string,
  message: Message | Message[]
): Promise<void> {
  await client.pushMessage(userId, message);
}

export async function reply(
  replyToken: string,
  message: TextMessage
): Promise<void> {
  await client.replyMessage(replyToken, message).catch((err) => {
    if (err instanceof HTTPError) {
      console.error(err.statusCode);
    }
  });
  //   const messageId = ""; // message id
  //   const stream = client.getMessageContent(messageId);
  //   (await stream).on("error", (err: any) => {
  //     console.log(err.message);
  //   });
}