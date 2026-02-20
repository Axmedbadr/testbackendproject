const mongoose = require('mongoose');
const User = require('./modols/userModel'); // path sax ah

mongoose.connect('mongodb://mongo:FhZtpJhdNhRDWEbfRwAUpSGoqorzFAgr@shortline.proxy.rlwy.net:22415')
  .then(async () => {
    console.log('MongoDB connected');

    await User.create({
      email: "admin@homefix.com",
      password: "123456",
      role: "admin"
    });

    console.log("Admin user created successfully");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
