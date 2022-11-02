require('dotenv').config();

const 
{
    request,
    response
} = require('express');

let webServer = express();
let express = require('express');

webServer.set('view engine' , 'ejs');

let port = process.env.PORT
let host = process.env.HOST

webServer.use(express.static("public"));
webServer.use(express.urlencoded());

webServer.get('/' , (request , response , next) => 
{
    response.render("index.ejs");
});

webServer.get('/Contact' , (request , response , next) => 
{
    response.render("Contact.ejs");
});

webServer.get('/Education' , (request , response , next) => 
{
    response.render("Education.ejs");
});

webServer.get('/Personal' , (request , response , next) => 
{
    response.render("Personal.ejs");
});

webServer.get('/References' , (request , response , next) => 
{
    response.render("References.ejs");
});

webServer.get('/Skills' , (request , response , next) => 
{
    response.render("Skills.ejs");
});

webServer.get('/Work' , (request , response , next) => 
{
    response.render("Work.ejs");
});


webServer.listen(port , host , () => 
{
    console.log(`The server is running on port ${port} and on the server ${host}`);
});
