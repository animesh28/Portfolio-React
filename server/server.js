const express = require('express')
const app = express()
require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const nodeMailer = require('nodemailer')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('Server is running')
})

app.post('/send_email', cors(), async (req,res) => {
    let { fName, lName, email, phone, message, frontEnd, backEnd, other } = req.body

    const transport = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: 'animesh.raj.om@gmail.com',
        subject: 'test mail',
        html: `<div>
                    <p>Name: ${fName} ${lName}</p>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Message: ${message}</p>
                    <p>Front-End: ${frontEnd}</p>
                    <p>Back-ENd: ${backEnd}</p>
                    <p>Other: ${other}</p>
                </div>`
    })

    res.send('Message Sent!').status(200)
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running")
})
