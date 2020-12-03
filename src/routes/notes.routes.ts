import { Router } from "express";
import { notesController } from "../controllers/notes.controller";

class NotesRoutes {

router:Router = Router();
    constructor() {

        this.router.get('/notes', notesController.getAll);
        this.router.post('/note', notesController.setOne);
        this.router.delete('/note/:id', notesController.delOne);
        this.router.put('/note/:id', notesController.updateOne);

    }



}

export const notesRoutes = new NotesRoutes();