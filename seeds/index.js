const seedUsers = require('./user-seeds');
const seedPoxsts = require('./post-seed');
const seedComments = require('./comments-seeds');

const sequelize = require('./config/commection');

const seeAll = async () => {
    await sequelize.sync({ force: true});
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedPoxsts();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    process.exit(0);
};

seedAll();