import mongoose from 'mongoose';

const Todo = mongoose.model('Todo', {
  text: String,
  list: mongoose.Schema.Types.ObjectId,
  deadline: Date,
  updateAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export default Todo;
