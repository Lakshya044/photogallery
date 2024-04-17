const app=require("./app");
const connectToDBs= require('./utils/db')
connectToDBs();
app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});
