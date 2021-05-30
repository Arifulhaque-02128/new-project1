import { table } from './utils';


export default async (req, res) => {
    try {
        const { Description } = req.body;
        const createdRecords = await table.create([ {fields: { Description } } ]);
        const createdRecord = {
            id: createdRecords[0].id,
            data: createdRecords[0].fields
        }
        res.statusCode = 200;
        res.json(createdRecord);
    } catch (err) {
        res.statusCode = 500;
        console.log(err)
        res.json({msg: "something went wrong..."});
    }
}