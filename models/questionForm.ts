import type { IquestionForm } from '@/types.d.ts'
import {Schema, model} from 'mongoose';


export const questionFormSchema = new Schema<IquestionForm>({
    firstname: {
        type: String,
        required: true,
    },
    secondname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    question: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    recipient: {type: String, enum: ["MAYOR", "CITY_COUNCIL", "COUNTY"], required: true},
    district: {
        type: Number,
        required: false,
    },

})
const questionForm = model<IquestionForm>('questionForm', questionFormSchema);
export const questionMayor = model<IquestionForm>("wyboryTurek.pytania-burmistrz", questionFormSchema );
export const questionCityCouncil = model<IquestionForm>("wyboryTurek.pytania-gminy", questionFormSchema);
export const questionCounty = model<IquestionForm>( "wyboryTurek.pytania-powiat", questionFormSchema);

export default questionForm;