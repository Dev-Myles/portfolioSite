
import 'dotenv/config'

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import {router as mainRouter} from './routes/mainRoute.js';
import {fileURLToPath} from 'url';
import session from 'express-session';
import flash from 'connect-flash';

import sessionConfig from './config/sessionConfig.js';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use("/favicon.ico", express.static("public/images/favicon.svg"));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views/pages'));
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"],
        scriptSrc: ["'self'", 'https://ajax.googleapis.com']
      },
    })
  );

app.use(session(sessionConfig));  

app.use(flash());

app.use(function(req, res, next){
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next()
});

app.use(mainRouter);
  
app.listen(PORT, () => {
    console.log(`Code live, listening on port ${PORT}`);
});
