import { connect } from "mongoose";

const connectToDb = connect('mongodb://localhost:27017/userStore?authSource=admin')
export default connectToDb