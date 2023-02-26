import { Router } from "express";
const {lisLanguage} = require('../Controllers/language.controller');
const router = Router();

router.get('/', function(req,res) {
    res.json(lisLanguage());
});
// hola mundo
export default router;