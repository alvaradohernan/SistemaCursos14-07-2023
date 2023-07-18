import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgres://postgres:ot6j1RE8PkyWIzNDmvpx@containers-us-west-149.railway.app:7872/railway');


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }