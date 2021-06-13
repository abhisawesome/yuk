import { Collection, Cursor } from "mongodb";

const find = (collection: Collection) => {
    return new Promise((resolve, reject) => {
        collection.find((err: any, result: Cursor) => {
            if (err) return reject(err);
            if (result === null) {
                return resolve(result);
            }
            return resolve(result.toArray());
        });
    })
}

export default find;