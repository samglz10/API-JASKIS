// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
  use jaskis

// 2. Create a collection called bounties
  db.createCollection('bounties')
  show collections
// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
  db.destinations.insertOne({
    name: "Thanoceros",
    species: "Rhinoceros",
    location: "Grasslands",
    wantedFor: "Eating too much grass",
    client: "Songbird",
    reward: 10000,
    captured: false
  })

// 2. Query for all bounties in the bounties collection
  db.destinations.insertMany([
  {
    "name": "Lokinkajou",
    "species": "Kinkajou",
    "location": "Tropical rainforest",
    "wantedFor": "Partying too late at night",
    "client": "White tiger",
    "reward": 1000,
    "captured": false
  },
  {
    "name": "Nebullama",
    "species": "Llama",
    "location": "Grasslands",
    "wantedFor": "Drinking all the water from the ocean",
    "client": "Songbird",
    "reward": 2500,
    "captured": false
  },
  {
    "name": "Polarwind",
    "species": "Polar Bear",
    "location": "Arctic",
    "wantedFor": "Not hibernating",
    "client": "Sabertooth",
    "reward": 4000,
    "captured": false
  },
  {
    "name": "Wrecking Crows",
    "species": "Crow",
    "location": "Grasslands",
    "wantedFor": "Cawing too loudly",
    "client": "Red wolf",
    "reward": 40000,
    "captured": false
  },
  {
    "name": "Grandhog",
    "species": "Groundhog",
    "location": "Woodlands",
    "wantedFor": "Not coming out of the hole on time and prolonging winter",
    "client": "Songbird",
    "reward": 50000,
    "captured": false
  },
  {
    "name": "Grim Panda",
    "species": "Giant Panda",
    "location": "Temperate forest",
    "wantedFor": "Eating all the bamboo",
    "client": "Red wolf",
    "reward": 5000,
    "captured": false
  }
])

// 3. Insert many bounties at once using the given objects


// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
 db.destinations.find({location:"Grasslands"})
  { _id: ObjectId("62b254792ab8634a5a372a63"),
    name: 'Thanoceros',
    species: 'Rhinoceros',
    location: 'Grasslands',
    wantedFor: 'Eating too much grass',
    client: 'Songbird',
    reward: 10000,
    captured: false }
  { _id: ObjectId("62b254e02ab8634a5a372a66"),
    name: 'Nebullama',
    species: 'Llama',
    location: 'Grasslands',
    wantedFor: 'Drinking all the water from the ocean',
    client: 'Songbird',
    reward: 2500,
    captured: false }
  { _id: ObjectId("62b254e02ab8634a5a372a68"),
    name: 'Wrecking Crows',
    species: 'Crow',
    location: 'Grasslands',
    wantedFor: 'Cawing too loudly',
    client: 'Red wolf',
    reward: 40000,
    captured: false }

// 2. Query for all bounties with a reward worth 10000 or more
  

// 3. Query for all bounties, but exclude the client attribute from being shown

// 4. Query for a Groundhog in the Woodlands

// Update and Delete
// 1. Update the reward for Polarwind to 10000

// 2. Remove Lokinkajou

// 3. Delete all bounties sent by Songbird

// 4. Update all captured statuses to true
