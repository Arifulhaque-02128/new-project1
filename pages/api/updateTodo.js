import { minifyRecords, table } from './utils';


export default async (req, res) => {
    try {
        const { id, fields } = req.body;
        const updatedRecords = await table.update([ { id, fields } ]);
        res.statusCode = 200;
        res.json(minifyRecords(updatedRecords));
    } catch (err) {
        res.statusCode = 500;
        console.log(err)
        res.json({msg: "something went wrong..."});
    }
}