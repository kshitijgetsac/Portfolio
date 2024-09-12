const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your email id",
    pass: "your password",
  },
});
function sendMail(body, fromid, username) {
  let mailOptions = {
    from: fromid,
    to: "your email id",
    subject: "Hello from " + username + " my email id is " + fromid,
    text: body,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Error occurred:", error);
    }
    console.log("Message sent:", info.response);
  });
}

module.exports = {
  sendMail,
};
