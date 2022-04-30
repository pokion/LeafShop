import mysql from 'mysql';

export default async (req, res) => {
	try{
		let params = req.params; // {id: '123'}
		console.log(params)
		res.status(200).send(params)

	} catch (err){
		console.log(err);
		res.status(500).send(err);
	}
}
