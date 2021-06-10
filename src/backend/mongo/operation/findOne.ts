import { Collection } from "mongodb";

const findOne = (collection: Collection, value: any = {}) => {
    return new Promise((resolve, reject) => {
        collection.findOne(value, (err: any, result: any) => {
            if (err) return reject(err);
            resolve(result);
        });
    })
}

export default findOne;