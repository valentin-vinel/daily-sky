# daily-sky 🌤️

**App web full-stack: journal météo avec notes quotidiennes.**

## Stack 

- **Backend** : Node.js, Express, Sequelize, PostgreSQL
- **Frontend** : React, SCSS
- **Base de données** : PostgreSQL

---

## Initialisation du projet

>  ⚙️ **Prérequis**
> - Node.js (>= 18)
> - PostgreSQL (>= 14)
> - `npm`

### 1. 📦 Installation des dépendances

À la racine du projet :

```bash
npm install
```

➡ Cela installe les dépendances du back et du front automatiquement.

---

### 2. 🔑 Variables d'environnement

Création des fichiers `.env` à partir des exemples :

```bash
cd back
cp .env.example .env

cd ../front
cp .env.example .env

cd ..
```

---

### 3. 🛠️ Création de la base de données (PostgreSQL)

[Commandes pour une BDD PostgreSQL](./back/data/db-init.md)

---

### 4. ⚡ Lancement du projet en développement

⚠️ **Remplissez bien les variables d'environnement**

À la racine du projet :

`npm run dev`

➡ Démarre à la fois le backend et le frontend.