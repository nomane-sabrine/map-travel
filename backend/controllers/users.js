const User = require("../model/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//SignUp

router.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // const newUser = new User({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: hashedPassword,
    // });

    // const user = await newUser.save();
    let obj = {
      Username: req.body.username,
      Email: req.body.email,
      Password: hashedPassword,
    };
    const user = await User.create(obj);
    console.log(obj, user);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong username or password");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong username or password");

    res.status(200).json({ _id: user._id, username: username });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
