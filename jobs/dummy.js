const { workerData } = require("worker_threads");
const {
  db,
  models: { Subscriber, Workout, Mail },
} = require("../server/db");
// console.log(workerData.newContacts);
// console.log("Job Executed");

async function addContacts() {
  const parsedContacts = JSON.parse(workerData.newContacts);
//   console.log("ggggg--->", workerData.newContacts);
  const newContact = await Promise.all([
    Subscriber.findOrCreate({
      where: {
        email: parsedContacts.contacts[0].email,
      },
      defaults: {
        email: parsedContacts.contacts[0].email,
        createdAt: parsedContacts.contacts[0].createdAt,
        workoutId: 1,
      },
    }),
  ]);
  composeMail();
}

async function composeMail(){
    const parsedEmails =  Workout.findAll();
    
    await Subscriber.findAll().then(function(subscriber) {
        subscriber.forEach(async function(sub) {
            const encodedEmail = await Workout.findByPk(sub.id);
            const newEmail = await Promise.all([
                Mail.findOrCreate({
                  where: {
                    id: sub.id,
                  },
                  defaults: {
                    encodedMail: encodedEmail.saveData,
                  },
                }),
              ]);
        //    const email = await Promise.all ([Mail.findOrCreate({
        //         where: {
        //             subscriberId: sub.id
        //         },
        //         defaults: {
        //             encodedMail: encodedEmail.dataValues.saveData,
        //             subscriberId: sub.id
        //         }
        //     })])
            console.log('email->>>', encodedEmail.saveData)
        })
    })
}

async function processMail(){
    //todo
}

addContacts();
