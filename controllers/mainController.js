import { sendEmail } from "../config/nodeMailer.js";

export async function renderMainPage (req, res){
    try {

        res.render('./main-page');
    } catch (error) {
        console.log(error);
    }
};

export async function sendMessage(req, res){
    try {
       const {email, name, company, message} = req.body.email;
       await sendEmail(email, name, company, message);
      req.flash('success', 'Message has been sent!');
        res.redirect('/');
    } catch (error) {
        req.flash('error', 'Message could not be sent.');
        res.redirect('/');
        console.log(error);        
  }
};

