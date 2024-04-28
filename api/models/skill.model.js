import mongoose from 'mongoose';
const { Schema } = mongoose;

const SkillSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  totalStars: {
    type: Number,
    default: 0,
  },
  starNumber: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: false,
  },
  shortDesc: {
    type: String,
    required: false,
  },
  lessons:{
    type: Number,
    default: 0
  }
},
  { timestamps: true }
);

export default mongoose.model('Skill', SkillSchema);