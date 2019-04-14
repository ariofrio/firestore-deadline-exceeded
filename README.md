
```
npm install
npm run start
```

It gets stuck here:

```
user added: tuya:email:bha<REDACTED>
processing device: tuya:email:bha<REDACTED> / <REDACTED>
user processed: tuya:email:bha<REDACTED>
user added: tuya:email:bhi<REDACTED>
```

After 4 minutes, it prints:

```
(node:13061) UnhandledPromiseRejectionWarning: Error: 4 DEADLINE_EXCEEDED: Deadline Exceeded
    at Object.exports.createStatusError (/Users/ariofrio/Work/RonaldCundy/firestore-deadline-exceeded/node_modules/grpc/src/common.js:91:15)
    at ClientReadableStream._emitStatusIfDone (/Users/ariofrio/Work/RonaldCundy/firestore-deadline-exceeded/node_modules/grpc/src/client.js:233:26)
    at ClientReadableStream._receiveStatus (/Users/ariofrio/Work/RonaldCundy/firestore-deadline-exceeded/node_modules/grpc/src/client.js:211:8)
    at Object.onReceiveStatus (/Users/ariofrio/Work/RonaldCundy/firestore-deadline-exceeded/node_modules/grpc/src/client_interceptors.js:1272:15)
    at InterceptingListener._callNext (/Users/ariofrio/Work/RonaldCundy/firestore-deadline-exceeded/node_modules/grpc/src/client_interceptors.js:568:42)
    at InterceptingListener.onReceiveStatus (/Users/ariofrio/Work/RonaldCundy/firestore-deadline-exceeded/node_modules/grpc/src/client_interceptors.js:618:8)
    at /Users/ariofrio/Work/RonaldCundy/firestore-deadline-exceeded/node_modules/grpc/src/client_interceptors.js:1029:24
(node:13061) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 3)
(node:13061) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
