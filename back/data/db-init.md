Commande pour la création d'une base de données en PostgreSQL.

```sql
CREATE USER username WITH PASSWORD 'password';
```

```sql
CREATE DATABASE dbname OWNER username;
```

---

Une fois la BDD mise en place, nous pouvons effectuer les migrations:
- ```npm db:create```
- ```npm db:seed```

Si nous voulons réinitialiser les données de la BDD:
- ```npm db:reset```