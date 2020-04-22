import { Bike } from './bikes.entity';

export const bikesProviders = [
    {
        provide: 'BikesRepository',
        useValue: Bike,
    },
];