import { connect } from "mongoose";

const connectToDb = connect('mongodb://localhost:27017/userStore')

export default connectToDb