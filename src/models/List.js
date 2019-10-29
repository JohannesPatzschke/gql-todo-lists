import mongoose from 'mongoose';

const List = mongoose.model('List', {
  title: String,
  updateAt: Date,
  createdAt: { type: Date, default: Date.now }
});

export default List;
