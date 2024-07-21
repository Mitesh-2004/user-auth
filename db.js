import mongoose from "mongoose";

export default async function connectToDB(URI) {
  await mongoose
    .connect(URI)
    .then(() => console.log(`Db Connected !!`))
    .catch((err) => console.error(err));
}
