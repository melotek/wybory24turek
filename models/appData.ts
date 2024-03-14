import type {IAppData} from '@/types.d.ts'
import {Schema, model, Types} from 'mongoose';

export const appDataSchema = new Schema<IAppData>({
   questionForms: [{ type: Types.ObjectId, ref: 'questionForm' }],
    users: [{ type: Types.ObjectId, ref: 'User' }],
    ratings: [{ type: Types.ObjectId, ref: 'Rating' }],
    questionRates: [{ type: Types.ObjectId, ref: 'questionRate' }],
})
const AppData = model<IAppData>('AppData', appDataSchema);
export default AppData;