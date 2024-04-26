import mongoose from 'mongoose';
const { Schema } = mongoose;

const conversationSchema = new Schema({
  id:{
    type: String,
    required: true,
    required: true,
  },
  user1Id: {
    type: String,
    required: true,
  },
    user2Id: {
        type: String,
        required: true,
    },
    readbyUser1: {
        type: Boolean,
        required: true,
    },
    readbyUser2: {
        type: Boolean,
        required: true,
    },
    lastMessage: {
        type: String,
        required: false,
    },
},
  { timestamps: true }
);

export default mongoose.model('Conversation', conversationSchema);