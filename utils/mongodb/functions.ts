import clientPromise from "./mongodb";



async function getDatabase(dbName:string) {
    const client = await clientPromise;
    return client.db(dbName);
}


async function getCollection(dbName:string, collectionName:string) {
    const db = await getDatabase(dbName);
    return db.collection(collectionName);
}   

export async function insertOne(dbName:string, collectionName:string, document:any) {
    const collection = await getCollection(dbName, collectionName);
    return collection.insertOne(document);
}

export async function insertMany(dbName:string, collectionName:string, documents:any[]) {
    const collection = await getCollection(dbName, collectionName);
    return collection.insertMany(documents);
}

export async function findOne(dbName:string, collectionName:string, filter:any) {
    const collection = await getCollection(dbName, collectionName);
    return collection
        .findOne(filter);
}

export async function findMany(dbName:string, collectionName:string, filter:any) {
    const collection = await getCollection(dbName, collectionName);
    return collection
        .find(filter)
        .toArray();
}

export async function updateOne(dbName:string, collectionName:string, filter:any, update:any) {
    const collection = await getCollection(dbName, collectionName);
    return collection.updateOne(filter, update);
}

export async function updateMany(dbName:string, collectionName:string, filter:any, update:any) {
    const collection = await getCollection(dbName, collectionName);
    return collection.updateMany(filter, update);
}

export async function deleteOne(dbName:string, collectionName:string, filter:any) {
    const collection = await getCollection(dbName, collectionName);
    return collection.deleteOne(filter
    );
}

export async function deleteMany(dbName:string, collectionName:string, filter:any) {
    const collection = await getCollection(dbName, collectionName);
    return collection.deleteMany(filter);
}




