const app = require('./app');

const port= process.env.port || 3001;

app.get('/',(req,res)=>{
    res.send("Hello World!!!....xxx");
});

app.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`);
});
