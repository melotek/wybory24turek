import type { IquestionForms } from '@/types.d.ts'
import {Schema, model, models} from 'mongoose';


export const questionFormSchema = new Schema<IquestionForms>({
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
  
    status: {type: String, enum: ["draft", "published", "rejected"], required: true},

})
questionFormSchema.set("timestamps", true);

export const questionCityCouncil = models.QuestionCityCouncil || model<IquestionForms>('QuestionCityCouncil', questionFormSchema, "pytania-gmina");
export const questionMayor = models.QuestionMayor || model<IquestionForms>('QuestionMayor', questionFormSchema, "pytania-burmistrz");
export const questionCountyCouncil = models.QuestionCountyCouncil || model<IquestionForms>('QuestionCountyCouncil', questionFormSchema, "pytania-powiat");
// const questionForm = model<IquestionForms>('questionForm', questionFormSchema);
// export const  questionMayor =  model("QuestionForm", questionFormSchema);
// // export const questionMayor = model<IquestionForm>("questionFormSchema", questionFormSchema );
// export const questionCityCouncil = model<IquestionForms>("wyboryTurek.pytania-gminy", questionFormSchema);
// export const questionCounty = model<IquestionForms>( "wyboryTurek.pytania-powiat", questionFormSchema);

// export default questionForm;