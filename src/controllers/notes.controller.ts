import { Request, Response } from "express";
import mongoose from "mongoose";
import { notes } from "../models/notes.model";
import { db } from "./../databases";

class NotesController {


    async getAll(req: Request, res: Response) {

        try {

            await mongoose.connect(db.dbcloud, db.dbdeprecado);
            const allnotes = await notes.find();

            
            res.send(allnotes);

        } catch (error) {
            res.sendStatus(501);
        }

    }



    async setOne(req: Request, res: Response) {

        try {

            const text = req.body.description;
            await mongoose.connect(db.dbcloud, db.dbdeprecado);
            const newsnote = new notes({
                description: text,
                createAt: new Date(),
                updatedAt: new Date()
            });
            await newsnote.save();
  
            res.send(`Nota creada correctamente`)

        } catch (error) {
            res.sendStatus(501);
        }

    }


    async delOne(req: Request, res: Response) {

        try {

            const id = req.params.id;
            await notes.deleteOne({ _id: id});
            res.send('Nota borrada correctamente')

        } catch (error) {
            res.sendStatus(501);
        }

    }


    async updateOne(req: Request, res: Response) {

        try {

            const id = req.params.id;
            const text = req.body.description;
 
            
           await  notes.updateOne({ _id: id}, { description:text });


            res.send('Nota actualizada correctamente')

        } catch (error) {
            res.sendStatus(501);
        }

    }

}

export const notesController = new NotesController();