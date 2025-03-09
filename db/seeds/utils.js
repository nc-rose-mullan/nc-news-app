const db = require("../../db/connection");

exports.convertTimestampToDate = ({ created_at, ...otherProperties }) => {
  if (!created_at) return { ...otherProperties };
  return { created_at: new Date(created_at), ...otherProperties };
};


exports.createLookup = (dataArray, key, value) => { 
  const lookupObj = {};
  dataArray.forEach((entry) => { 
    lookupObj[entry[key]] = entry[value]
  })

  return lookupObj
}
