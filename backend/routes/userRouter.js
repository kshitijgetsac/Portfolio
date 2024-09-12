const express = require("express");
const { string } = require("zod");
const z = require("zod");
const userRouter = express.Router();
const { sendMail } = require("./utils");
const messageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});
userRouter.post("/contact", (req, res) => {
  const success = messageSchema.safeParse(req.body);
  if (!success) {
    res.status(400).json({
      msg: "invalid credentials please send the message again",
    });
    return;
  }
  sendMail(req.body.message, req.body.email, req.body.name);
  res.status(200).json({ msg: "thanks will contact you soon" });
});

module.exports = {
  userRouter,
};
