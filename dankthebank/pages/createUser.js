import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import excuteQuery from '../lib/db';
import moment from 'moment';
import { nanoid } from "nanoid";

export async function createUser({ email, password }) {
    const salt = nanoid(16);
    const hash = password;
    const user = {
        id: uuidv4(),
        createdAt: moment().format( 'YYYY-MM-DD HH:mm:ss'),
        email,
        hash,
        salt,
    };

    try {
        const result = await excuteQuery({
            query: 'INSERT INTO users (id, createdAt, email, hash, salt) VALUES(?, ?, ?, ?, ?)',
            values: [user.id, user.createdAt.toString(), user.email, user.hash, user.salt],
        });
        console.log( result );
    } catch ( error ) {
        console.log( error );
    }

    return user;
}


export async function findUser({ id }) {
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM Customers WHERE Customer_ID = ?',
            values: [ id ],
        });
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

export async function validatePassword(user, inputPassword) {
    const inputHash = inputPassword;
    const passwordsMatch = user.hash === inputHash;
    return passwordsMatch;
}