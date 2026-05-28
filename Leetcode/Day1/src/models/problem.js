import mongoose from "mongoose";

const {Schema}=mongoose;

const problemSchema=new Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    difficultylevel:{
        type:String,
        enum:['easy','medium','hard'],
        required:true
    },

    tage:{
        type:String,
        enum:['array','linked-list','graph','dp'],
        required:true
    },

    visibleTestcases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            },
            explanation:{
                type:String,
                required:true
            }
        }
    ],

    invisibleTestcases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            },
            
        }
    ],

    startCode:[
        {
            language:{
                type:String,
                required:true
            },

            initialCode:{
                type:String,
                required:true
            }
        }
    ],

    problemCreator:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
});

const Problem=mongoose.model("problem",problemSchema);

export default Problem;