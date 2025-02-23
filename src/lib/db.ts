import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  try {
    if (cached.conn) {
      console.log('Đã kết nối MongoDB (cached)');
      return cached.conn;
    }

    if (!cached.promise) {
      console.log('Đang kết nối MongoDB...');
      cached.promise = mongoose.connect(MONGODB_URI);
    }
    
    cached.conn = await cached.promise;
    console.log('Kết nối MongoDB thành công!');
    return cached.conn;
  } catch (error) {
    console.error('Lỗi kết nối MongoDB:', error);
    throw error;
  }
}

export default connectDB;

connectDB()
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch((err) => console.error('Lỗi kết nối MongoDB:', err));