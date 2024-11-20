const express = require('express')
const path = require('path')
const hbs = require('hbs')
require("./db/connect")
const Register = require("./models/register")
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
const port = process.env.PORT || 3000

const static_path = path.join(__dirname,'../public')
const template_path = path.join(__dirname,'../templates/views')
const partials_path = path.join(__dirname,'../templates/partials')
app.use(express.static(static_path))
app.set('view engine', 'hbs')
app.set('views', template_path)
hbs.registerPartials(partials_path)
app.use(cookieParser())

const isLoggedIn = (req, res, next) => {
    if(req.cookies.token === "") return res.send("please login first to access the website")
    else{
        let user = jwt.verify(req.cookies.token, "secret")
        req.user = user
        next()
    }
}

app.get("",(req,res)=>{
    res.render("register")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/home", isLoggedIn , async (req,res)=>{
    let data = await Register.findOne({email: req.user.email})
    res.render("home",{
            // name:data.name
    })
})
app.get("/weather", isLoggedIn, (req,res)=>{
    res.render("weather")
})

app.get("/news", isLoggedIn, (req,res)=>{
    res.render("news")
})

app.get("/movies", isLoggedIn, (req,res)=>{
    res.render("movies")
})

app.post("/register", async (req,res)=>{
    try{
        const password = req.body.password
        const cpassword = req.body.cpassword
        if(password === cpassword){
            const RegisterUser = Register({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                password: req.body.password
            })
            const registered = RegisterUser.save()
            let token = jwt.sign({email: req.body.email}, "secret")
            res.cookie("token", token)
            res.redirect('/home')
        }
    }catch(err)
    {
        res.status(400).send("Invalid credintials")
    }
})

app.post("/login", async(req,res)=>{
    try{
        const email = req.body.email
        const password = req.body.password

        const useremail = await Register.findOne({email})
        const name = useremail.name
        if(useremail.password == password){
            let token = jwt.sign({email: req.body.email, name:req.body.name}, "secret")
            res.cookie("token", token)
            res.redirect('/home')
        }
        else{
            res.send("password does't match")
        }
    }
    catch(err){
        res.status(400).send("Invalid email")
    }
})

app.get('/logout', isLoggedIn, (req, res)=>{
    res.clearCookie("token")
    res.redirect('/login')
})



app.listen(port, ()=>{
    console.log(`server started 'http://localhost:${port}'`)
})