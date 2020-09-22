import {createConnection, Connection} from "typeorm"

let connection : Connection;

export async function getConnection() : Promise<Connection> {
    if (connection === null) {
        connection = await createConnection();
    }
    return connection;
}