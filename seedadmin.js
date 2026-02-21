const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // ✅ halkan ayaa laga beddelay
const User = require('./models/userModel'); 

mongoose.connect('mongodb+srv://badri736:Somaliland%40123@cluster0.667ltbr.mongodb.net/?appName=Cluster0/test')
  .then(async () => {
    console.log('MongoDB connected');

    const hashedPassword = await bcrypt.hash('123456', 10);

    await User.create({
      email: "admin@homefix.com",
      password: hashedPassword,
      role: "admin"
    });

    console.log("Admin user created successfully");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });