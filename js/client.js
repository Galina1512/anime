import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://sfo.cloud.appwrite.io/v1')
    .setProject('68b470350000f6671ada'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

