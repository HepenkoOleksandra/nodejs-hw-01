import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parseContacts = JSON.parse(data);

    const filterContacts = parseContacts.filter(() => Math.random() >= 0.5);

    const stringifyContacts = JSON.stringify(filterContacts);
    await fs.writeFile(PATH_DB, stringifyContacts);
};

await thanos();
