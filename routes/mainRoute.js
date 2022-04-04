import express from 'express';
const router = express.Router();
import {renderMainPage, sendMessage} from '../controllers/mainController.js';

router.route("/")
    .get(renderMainPage);

router.route("/sendemail")
    .post(sendMessage);

export {router};