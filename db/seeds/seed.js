const db = require("../connection")

const seed = ({ topicData, userData, articleData, commentData }) => {
  return db.query(`DROP TABLE IF EXISTS....`)
    .then(() => { 
      return db.query(``)
    }) 
};
module.exports = seed;
