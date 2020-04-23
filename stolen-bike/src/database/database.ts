import { Sequelize } from 'sequelize-typescript';
import { Bike } from '../bikes/bikes.entity';
import { Police } from '../police/police.entity';

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
            sequelize.addModels([Bike,Police]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
