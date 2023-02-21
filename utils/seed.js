const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing courses
    await User.deleteMany({});

    // Drop existing students
    await Thought.deleteMany({});

    // Add students to the collection and await the results
    await User.collection.insertOne({
        username: "Vakarian",
        email: "vakarian@vakarian.com"
    })

    await User.collection.insertOne({
        username: "Arterius",
        email: "arterius@arterius.com"
    })

    process.exit(0);
});
