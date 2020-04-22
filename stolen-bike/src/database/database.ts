import { Sequelize } from 'sequelize-typescript';
import { Bike } from '../bikes/bikes.entity';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
              dialect: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'postgres',
              database: 'nest',
            });
            sequelize.addModels([Bike]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
