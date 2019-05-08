import { Router } from "express";
import app from "../server";
const router = Router();

//Database connection
import { connect } from "../database";

router.get('/', async (req, res)=>{
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    res.json('Task created');
})

export default router;