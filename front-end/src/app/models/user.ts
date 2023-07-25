export interface User {
  username: String,
  email: String,
  password: String,
  fullName: String,
  role: String,
  birthday: Date,
  createdAt: Date,
  updateAt: Date,
  userId: Number,
  _id: Number,
}
export interface UserResults{
  results:Array<User>
}
