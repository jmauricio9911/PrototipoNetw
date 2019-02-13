import mysql from 'promise-mysql';
import keys from './Keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('Conexion Exitosa');
    });

export default pool;