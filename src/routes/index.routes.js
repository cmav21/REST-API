import { Router } from "express";
const router = Router();//debe inicializarse y devuelve objeto

router.get('/', (req, res) => {
    res.send("Welcome to my API");
});

export default router;
