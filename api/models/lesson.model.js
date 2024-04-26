import mongoose from 'mongoose';
const { Schema } = mongoose;

const lessonsSchema = new Schema({
  skillId: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  pendingLessons: {
    type: Number,
    required: true,
  },
//   user1ID: {
//     type: String,
//     required: true,
//   },
//   user2ID: {
//     type: String,
//     required: true,
//   },
  isCompleted: {
    type: String,
    default: false,
  },

},
  { timestamps: true }
);

export default mongoose.model('Lessons', lessonsSchema);