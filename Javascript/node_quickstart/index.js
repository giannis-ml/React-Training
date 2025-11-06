const { MongoClient } = require('mongodb');

async function runGetStarted() {
    
  const uri = 'mongodb://localhost:27017/';
  const client = new MongoClient(uri);

  try {
    const database = client.db('Trainingdb');
    const customers = database.collection('Customers');

    const query = { firstName: 'Giorgos' };
    const customer = await customers.findOne(query);

    console.log(customer);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
