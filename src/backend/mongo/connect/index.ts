import { Db, MongoClient } from 'mongodb';
import { config } from 'dotenv';
config();


class Mongo {
    connect: MongoClient
    url: string
    dbName: string
    constructor() {
        this.dbName = process.env.DB_NAME || 'yuk'
        this.url = process.env.MONGO_URL || ''
        this.connect = new MongoClient(this.url);
    }
    async connectDb(): Promise<Db> {
        return new Promise((resolve, reject) => {
            this.connect.connect((err: any) => {
                if (err) {
                    return reject(err);
                }
                console.log('Connected successfully to server');
                const db = this.connect.db(this.dbName);
                return resolve(db);
            })
        })
    }
    closeConnection() {
        this.connect.close();
    }
}
export default Mongo;