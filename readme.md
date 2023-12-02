1. créer projet:

```sh
npm init
```

3. installer express (qui est notre serveur et qui récupère et distribue les requêtes HTTP):

```sh
npm install express --save
```

4. créer la configuration serveur dans `app.js`
5. créer l'entrypoint: (ici) `server.js` (attribut `"main"` dans `package.json`)
6. installer sqlite3 (qui est notre ORM pour communiquer avec la base de données):

```sh
npm install sqlite3 --save
```

7.  créer le fichier de connexion à la base de données `db/index.js` en utilisant sqlite3
8.  créer des routes pour les articles dans le dossier `routes` et les importer dans `app.js`
9.  créer des controllers pour les articles dans le dossier `controllers` et les importer dans `routes/articles.js`
10. écrire le script de lancement du serveur: `"start": "node server.js"` dans `package.json`
11. installer nodemon (qui permet de relancer automatiquement le serveur à chaque modification):

```sh
npm install nodemon --save-dev
```

12. écrire le script de lancement du serveur en mode dev: `"dev": "nodemon server.js"` dans `package.json`
13. lancer le serveur:

```sh
npm run start
```

OU

```sh
npm run dev
```

14. tester les routes avec postman
