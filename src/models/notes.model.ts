import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Notes = new Schema({
    description: String,
    createAt: Date,
    updatedAt: Date,

});

export const notes = mongoose.model('Note', Notes);