// TODO
const mongoose = require('mongoose');
const DATABASE = 'tycho';

const DB_URI = `mongodb://localhost/${DATABASE}`;

mongoose.connect(DB_URI, { useNewUrlParser: true })
  .then(() => console.log('Connection Exquisite!'))
  .catch(err => console.log('Failure!', err));


const factSchema = new mongoose.Schema({
  title: String,
  fact: String
});

const Fact = mongoose.model('Fact', factSchema);

const saveFact = ({ fact }) => {
  return Fact.findOne({ fact })
    .then(factoid => {
      if (!factoid) {
        return Fact.create({ fact })
          .then(factoid => factoid);
      } else {
        return;
      }
    });
};

const seedDatabase = async () => {
  await Fact.deleteMany([]);
  await Fact.create({ fact: 'Doggies go woof!'});
  console.log('DATABASED');
};



module.exports = {
  seedDatabase,
  Fact,
  saveFact
};
//module.exports.saveFact = saveFact;

