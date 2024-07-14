import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";

let app;

if(!admin.apps.length){
    app = admin.initializeApp({
        credential:admin.credential.cert({
            projectId:process.env.FIREBASE_PROJECT_ID,
            clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
            privateKey:process.env.FIREBASE_PRIVATE_KEY,
        }),
    });
}

const adminDB = initFirestore({
    credential:admin.credential.cert({
        projectId:process.env.FIREBASE_PROJECT_ID,
        clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
        privateKey:process.env.FIREBASE_PRIVATE_KEY,
    }),
});

const adminAuth = admin.auth(app);

export {adminDB,adminAuth};

// adminAuth --> admin authentications such as - custom tokens for users to sign in with
// adminDB --> admin database for firestore , allows us to modify the databse with zero restrictions


