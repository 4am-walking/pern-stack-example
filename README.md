# senior-capstone

Steps to run locally:
- Install npm and git
```
sudo apt install npm git
git clone https://github.com/4am-walking/senior-capstone.git
```
- Copy .env.example to .env and set environment variables for PostgreSQL database (You must have a valid PostgreSQL instance for the project to function)
```
cp .env.example .env
```
- Install packages
```
cd frontend && npm install
cd ../common && npm install
cd ../backend && npm install
```
- Run the following in the frontend directory first, and then the backend directory to build production
```
npm run build
```
- Make sure you're in the backend directory and start the production app
```
npm start
```
