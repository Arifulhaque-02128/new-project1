const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

export const table = base(process.env.AIRTABLE_TABLE_NAME);



const getMinifiedRecord = (record) => {
    if(record.fields && !record.fields.Completed){
        record.fields.Completed = false;
    }
    return {
        id: record.id,
        data: record.fields
    }
}

export const minifyRecords = (records) => {
    return records.map( record => getMinifiedRecord(record))
}

