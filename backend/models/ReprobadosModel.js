import {Schema, model} from 'mongoose';

const ReprobadosSchema = new Schema({
    name: String,
    ApPat: String,
    Matricule: String
})

export const modelReprobados = new model("REPROBADOS", ReprobadosSchema)


 