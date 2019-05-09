import { Router } from "express";
import app from "../server";
const router = Router();

//Database connection
import { connect } from "../database";
import { ObjectID } from "mongodb";//convert an id to object

router.get('/', async (req, res)=>{
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    //There are two ways to save the informacion received
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    // const {title, description} = req.body;
    const result = await db.collection('tasks').insertOne(task);//Save the task
    res.json(result['ops'][0]);
});

//This is the way to receive an id
router.get('/:id', async (req, res) => {
    const { id } = req.params;//get the id
    const db = await connect();
    //Mongo consults an object, so we need to convert id to object
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').deleteOne({_id:ObjectID(id)});
    res.json({
        message: `Task ${id} deleted`,
        result
    });
});

export default router;