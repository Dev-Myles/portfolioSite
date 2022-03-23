import express from 'express';
const router = express.Router();
import renderMainPage from '../controllers/mainController.js';

router.route("/")
    .get(renderMainPage);

export {router};