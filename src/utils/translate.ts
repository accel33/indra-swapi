import { TranslateClient, TranslateTextCommand } from '@aws-sdk/client-translate';
import * as dotenv from 'dotenv';
dotenv.config();
// account for the region and credentials to use AWS transalate
const configure = {
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
};
export class Translate {
  private readonly translateClient = new TranslateClient(configure);

  async translateText(text: string): Promise<string> {
    const translateTextCommand = new TranslateTextCommand({
      SourceLanguageCode: 'en',
      TargetLanguageCode: 'es',
      Text: text,
    });
    const { TranslatedText } = await this.translateClient.send(translateTextCommand);

    const cleanString = TranslatedText.replace(/«|»/g, '');
    return cleanString;
  }
}
