import app from "./App";

const main =()=>{
   app.listen(app.get('port'));
   console.log("Server on port ", app.get('port'));
};
//run main function
main();