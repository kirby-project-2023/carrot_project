import { firestore } from '../firebase';

const getCollectionData = (collectionName) => {
    return firestore.collection(collectionName).get()
        .then(temp => {
            const result = [];
            temp.forEach(data => {
                const obj = data.data();
                obj.docId = data.id;
                result.push(obj);
            });
            return result;
        })
}

const addCollectionData = async (collectionName, obj) => {
    const bucket = firestore.collection(collectionName);
    await bucket.add(obj);
}

const updateDocData = async (collectionName, docId, obj) => {
    const bucket = firestore.collection(collectionName).doc(docId)
    await bucket.update(obj);
}

export {getCollectionData, addCollectionData, updateDocData};