const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

async function storeData(id, data) {
    const db = new Firestore({
        keyFilename: path.resolve(__dirname, '../../credentials-file.json') 
     
    });

    try {
        const docRef = db.collection('predictions').doc(id);
        await docRef.set(data);
        console.log('Data berhasil disimpan ke Firestore');
    } catch (error) {
        console.error('Gagal menyimpan data ke Firestore:', error);
        throw error;
    }
}

module.exports = storeData;
