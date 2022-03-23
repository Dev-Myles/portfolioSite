
import 'dotenv/config'

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import {router as mainRouter} from './routes/mainRoute.js';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use("/favicon.ico", express.static("public/favicon/favicon.ico"));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views/pages'));

app.use(cors());
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"],
        scriptSrc: ["'self'"]
      },
    })
  );



app.use(mainRouter);
  
app.listen(PORT, () => {
    console.log(`Code live, listening on port ${PORT}`);
});
