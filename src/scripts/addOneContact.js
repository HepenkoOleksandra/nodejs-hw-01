import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parseContacts = JSON.parse(data);

    parseContacts.push(createFakeContact());

    const stringifyContacts = JSON.stringify(parseContacts);
    await fs.writeFile(PATH_DB, stringifyContacts);
};

await addOneContact();
