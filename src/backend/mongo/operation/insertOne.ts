import { Collection } from "mongodb";

const insertOne = (collection: Collection, value: any) => {
    return new Promise((resolve, reject) => {
        collection.insertOne(value, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}

export default insertOne;