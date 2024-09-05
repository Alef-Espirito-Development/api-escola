const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      {
        type: "service_account",
        project_id: "escola-de-reforco-para-todos",
        private_key_id: "9ca83cc7b9801571824dd72d7923859a9ce4f2c3",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDKajkj2rLM0o9i\nSciiImCZ2nyl8Ss6aYaurT9OCcwmjVNIyzFrdR+DikK05zBtHrVnJOsrV3swOKbS\n1qc27utx0OMmQkN99bSzJK8P54a1zMnQCagQMF3sICxAi7t425XJ3hYJAgFmFFPs\nDyJ0MXgQUTcsBGIkbryeffxzAZastYKUZ9la+Q4Isjrc7WgFjVlrJT6/bUgoq7fF\nVuKP+TvraR0Tg8aTcsU2tu94S6vXyugsNJbL9vvC8dG3ihueM/643Ijj/0JDIJ8Z\nPSgQ41BhmKGRlqkTvM3xMwgycp6QtpoJogpZpusvt8ee96ZmWiHjO6Io/p81B6Cy\nK8RKXr6NAgMBAAECggEAEq/034kI2d0UrMPYGJPo7DteJ6nYzldAvm6zOf6wkNya\nVE2iHeQdyTSiDPaNI33izId9iK5WarDIQg3cOTecmBDrb7RNa9sb2DAqU2MSLkWe\nWi0SDZCRk0OzIjBkWfeX4B+3VBSR0X1N9Cy/hw+sIIGHAPLUpr1sf4ttG6cJZJ9h\nQMqlnt517xDQCz62O3qo0qkM+KQKaDYxTcriuaD2aqeoeMAu+krzi9cQD+bflo1d\nTN/x2QBLji+uKbPfVXJoRI0WalFwSCugySp3M3fa043E1WBp+AiBiUVOQMO/W8vI\nDYmGQaWMHqVr8Wo8Ybj2uLNYl+3hNi/zzhlhW0yJcQKBgQDt0FV7LN28xkEdZx4X\ng1rOunWt5ULK34YV0Ji/m+x/bJbbFf7pHAuyA61CYLihY7k/a9UuTF5z/YlCsY5N\nnuOqKwsbzwlxsDKP3bkKg1GqqCppOelxVXnMcn8IhsHNpSxd2ohdfEEvXDWq5M82\nWPcRw5lm8PkS71LkOpKghVKc9QKBgQDZ5ONHq5NBSUO7fNf9NlFqajOnX93nv+Mp\nf558zJZUC/zA3MOaG+i4qeIu8dYKPremVGLDMYFykwcaSyOC95pixacoxoXLFxHQ\nU04clSlMDQ2mqT2sKbXgRPogoKs0aVgwJ4CVT9A9PvmtlZKqvSFg0vFnMGLAi0zH\njOTK+TMcOQKBgGjiQVEZ8JGZPo6hM/xaymnygoQ3YMXo31Ivta6MLjnkwoPNp6dX\n3zCbvoZP8h37xW/bNyI8PEwbvbXUaVaChRY/9Z5GKXwioaoht8KTOCl0EYBnMjXx\n5M3ukWhJRqBUAMVD5HCWpIkmueStFVZ61jzXb4ifLrrTIlPWIWT6Z/0hAoGAdvI8\nICPJfxo/n1nHjrLYPv86s2Ph/2EA4OaJ3hbQ+ZCRqbbaEIarxCL5FiducKlMF8B5\nKZUc1S7t8ayS9iu0W7cKSXgWEYfGcbMIMRI8OQfnK9O3lwQuBP+ii60pyLK5MZBe\n4SNwyf5WziuYpRwZ3IFKxsnjHrjscQK44xSmkgECgYA2Xpptucp1TJG7RVT6ci/U\nSJPk9lL7pyrwRJbuGAzQEmDrrx3O9ENvRDBlb7y4DHw9mddL7X4G6U+p7KL2aMZ4\nx+IuTtspNtyJiowB6yh2lqVeFGKalk/xIEMhvSGIVjUF9kGw/mmACP3us1gF1L4N\nraGWvxdIjFnmMGuvTAh/Vw==\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-et8f2@escola-de-reforco-para-todos.iam.gserviceaccount.com",
        client_id: "110730280769128458061",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-et8f2%40escola-de-reforco-para-todos.iam.gserviceaccount.com",
        universe_domain: "googleapis.com"
      }
      
    ),
    storageBucket: 'escola-de-reforco-para-todos.appspot.com',
  });
}

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { admin, db, bucket };
