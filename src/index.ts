import express from "express";
import { notesRoutes } from "./routes/notes.routes";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', notesRoutes.router,);

app.set('port', 3000);
app.listen(app.get('port'), ()=>{

    console.log(`http://localhost:${app.get('port')}`);
    
});

