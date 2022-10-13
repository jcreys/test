const { workerData } = require("worker_threads");
const {
  db,
  models: { Subscriber, Workout, Mail },
} = require("../server/db");
const Sib = require("sib-api-v3-sdk");
require("dotenv").config();
const client = Sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;
let apiInstance = new Sib.TransactionalEmailsApi();
let sendSmtpEmail = new Sib.SendSmtpEmail();

const sender = {
  email: "reyes.j15@gmail.com",
};

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

async function composeMail() {
  const parsedEmails = Workout.findAll();

  await Subscriber.findAll().then(function (subscriber) {
    subscriber.forEach(async function (sub) {
      const encodedEmail = await Workout.findByPk(sub.id);
      const newEmail = await Promise.all([
        Mail.findOrCreate({
          where: {
            id: sub.id,
          },
          defaults: {
            encodedMail: encodedEmail.html,
            subject: `Workout #${sub.id}`,
            sendTo: sub.email,
            workoutId: encodedEmail.id,
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
    });
    processMail();
  });
}

async function processMail() {
  await Mail.findAll().then(function (mail) {
    mail.forEach((item) => {
      apiInstance.sendTransacEmail({
        sender,
        to: [{ email: item.sendTo }],
        subject: item.subject,
        htmlContent: item.encodedMail,
      }).then(console.log).catch(console.log);
    });
  });
}

addContacts();
