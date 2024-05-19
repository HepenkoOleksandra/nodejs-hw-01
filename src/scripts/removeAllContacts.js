import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parseContacts = JSON.parse(data);

    parseContacts.splice(0, parseContacts.length);

    const stringifyContacts = JSON.stringify(parseContacts);
    await fs.writeFile(PATH_DB, stringifyContacts);
};

await removeAllContacts();
