# reactMenu

##Objective
This is a project using React to create a customizable restaurant menu template.

future features:
user login
user ability to save created menus
the ability to save the created menu to pdf

## Database Setup
Install PostgreSQL then create a database called "ReactMenu".

```
{
  "development": {
    "username": "NAME",
    "password": null,
    "database": "ReactMenu",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "NAME",
    "password": null,
    "database": "ReactMenu",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "NAME",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

In the config folder, create a file named config.json. Then, copy the contents above and paste it into the config.json file you created.

Also, change the "username", "database", and "dialect" fields in the config.json
file. Username should be your username for the database, database should be
"ReactMenu", and dialect should be "postgres".

Change the fields for development, test, and production

## Start
First: `npm install`
Build: `npm run-script build`
To start: `npm start`
