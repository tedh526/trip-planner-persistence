const Sequelize = require('sequelize');
const db = require('./_db');

const Day = db.define('day', {
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
   hooks: {
       beforeDestroy: function (dayBeingDestroyed) {
            // Maybe this hook could help?
            // we will  need to remove day's rows on
            // join tables day_activities and day_restaurants
       }
   }
});


module.exports = Day;
