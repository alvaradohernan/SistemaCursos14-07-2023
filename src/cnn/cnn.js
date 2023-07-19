import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgres://usuario:email:puerto/basededatos');


try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }