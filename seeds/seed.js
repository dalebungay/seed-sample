const db = require('../config/connection');
const { User,Event, Booking } = require('./models');

const userData = require('./userData.json');
const eventData = require('./eventData.json');


db.once('open', async() => {
    await Event.deleteMany();

    const event = await Event.insertMany([
      {
      title: '',
      date: '',
      description: '',
      creator: ''
      // to confirm
      }
    ]);
    
      await Booking.deleteMany();

      const booking = await Booking.insertMany({});
      


    await User.deleteMany();

  await User.create([{
    username: '',
    email: '',
    createdEvents: '',
    password: '',
    // to confirm
  }]);

  console.log('user seeded!');

  process.exit();
});
