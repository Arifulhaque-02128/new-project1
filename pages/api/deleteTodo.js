import { minifyRecords, table } from './utils';


export default async (req, res) => {
    try {
        const { id } = req.body;
        const deletedRecords = await table.destroy([ id ]);
        res.statusCode = 200;
        res.json(minifyRecords(deletedRecords));
    } catch (err) {
        res.statusCode = 500;
        console.log(err)
        res.json({msg: "something went wrong..."});
    }
}