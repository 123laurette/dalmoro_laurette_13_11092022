Projet #10 - API Banque d'Argent
Cette base de code contient le code nécessaire pour exécuter le backend pour Argent Bank.

Commencer
Conditions préalables
Argent Bank utilise la pile technologique suivante :

Node.js v12
Serveur communautaire MongoDB
Assurez-vous d'avoir les bonnes versions et téléchargez les deux packages. Vous pouvez le vérifier en utilisant les commandes suivantes dans votre terminal :

# Check Node.js version
node --version

# Check Mongo version
mongo --version
Des instructions
Fourchez ce dépôt
Cloner le dépôt sur votre ordinateur
Ouvrir une fenêtre de terminal dans le projet cloné
Exécutez les commandes suivantes :
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
Votre serveur devrait maintenant fonctionner sur http://locahost:3001 et vous aurez maintenant deux utilisateurs dans votre base de données MongoDB !

Données de base de données remplies
Une fois le populate-dbscript exécuté, vous devriez avoir deux utilisateurs dans votre base de données :

Tony Stark
Prénom:Tony
Nom de famille:Stark
E-mail:tony@stark.com
Mot de passe:password123
Steve Rogers
Prénom : Steve,
Nom : Rogers,
Courriel : steve@rogers.com,
Mot de passe:password456
Documentation API
Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : http://localhost:3001/api-docs

Actifs de conception
HTML et CSS statiques ont été créés pour la majeure partie du site et se trouvent dans : /designs.

Pour certaines des fonctionnalités dynamiques, comme le basculement de l'édition utilisateur, il existe une maquette pour cela dans /designs/wireframes/edit-user-name.png.

Et pour le modèle d'API que vous proposerez pour les transactions, le wireframe se trouve dans /designs/wireframes/transactions.png.






# Project #10 - Argent Bank API

This codebase contains the code needed to run the backend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
