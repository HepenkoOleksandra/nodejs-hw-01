import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parseContacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
        parseContacts.push(createFakeContact());
    }
    const stringifyContacts = JSON.stringify(parseContacts);
    await fs.writeFile(PATH_DB, stringifyContacts);
   
};

await generateContacts(5);
