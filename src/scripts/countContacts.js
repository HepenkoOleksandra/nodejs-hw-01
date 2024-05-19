import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');

    const parseContacts = JSON.parse(data);
    
    return parseContacts.length;
};

console.log(await countContacts());
