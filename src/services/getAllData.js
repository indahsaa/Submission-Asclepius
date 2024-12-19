const { Firestore } = require('@google-cloud/firestore');
const path = require('path');
async function getAllData() {
    const db = new Firestore({
        keyFilename: path.resolve(__dirname, '../../credentials-file.json') 
     
    });
    const predictCollection = db.collection('predictions');
    
    const allData = await predictCollection.get();
    return allData;
}

module.exports = getAllData;