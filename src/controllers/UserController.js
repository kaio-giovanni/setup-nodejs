const User = require('../models/User');

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).send({ message: 'User not found' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).send({ message: 'Password is incorrect ' });
    }
    return res.status(200).send({ success: true });
  }
}

module.exports = new UserController();
