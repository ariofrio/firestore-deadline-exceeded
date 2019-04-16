import * as admin from 'firebase-admin'
const serviceAccount = require('./firebase-adminsdk.json')

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://rectecgrills-app.firebaseio.com',
})
// admin.firestore.setLogFunction((log) => {
//   console.log(log)
// })

console.log('starting')
firebase
  .firestore()
  .collection('_privateUsers')
  .limit(200)
  .onSnapshot(async (snapshot) => {
    console.log('snapshot')
    for (const change of snapshot.docChanges()) {
      if (change.type === 'added') {
        console.log(`user added: ${change.doc.id}`)
        const devices = await firebase
          .firestore()
          .collection('users')
          .doc(change.doc.id)
          .collection('devices')
          .get()
        for (const device of devices.docs) {
          console.log(`processing device: ${change.doc.id} / ${device.ref.id}`)

          // Comment this out to get rid of deadline exceeded errors.
          device.ref.collection('alarms').onSnapshot(() => {})

          await device.ref.set(
            { _privateDeadlineExceededTest: false },
            { merge: true },
          )
        }
        console.log(`user processed: ${change.doc.id}`)
      }
    }
    process.exit()
  })
