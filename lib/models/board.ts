import { string } from "better-auth";
import mongoose, {Schema,Document} from "mongoose";

export interface IBoard extends Document {
    title: string;
    useID : string;
    columns: mongoose.Types.ObjectId[];

    createdAt: Date;
    updatedAt: Date;
}
const BoardSchema: Schema = new Schema( {   
    name : {
        type: String,
        required: true,
    },
    userId : {
        type: string,
       index: true,
        required: true,
    },
    columns: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Column",
        }
    ],
},
{
    timestamps: true,
}
);

export const Board = mongoose.models.Board || mongoose.model<IBoard>("Board",BoardSchema);
