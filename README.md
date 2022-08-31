# jokes_app

## Requirements

* Node 8
* Git

## Setup

Create a new folder on your local machine, clone the repo and install the dependencies.

```bash
mkdir my-folder
cd my-folder
```

```bash
git clone https://github.com/AngelaCandela/jokes_app.git
```

```bash
npm install
```
Use your preferred database management tool to create a new database (I've used MySQL Workbench). Then, in order to get the `joke` table, import the SQL dump file you can find inside the `db/` folder into the database you've just created.

Create a `.env` file by duplicating the `.env.example` file and set your local environment variables in there. For example:

```
PORT = 3000
HOST = 'localhost'
DB_USER = 'root'
PASSWORD = 'your_password'
DB_NAME = 'you_db_name'
```

Then, to start the express server, run the following command:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) and take a look around. Enjoy!