import { Police } from './police.entity';

export const policeProviders = [
    {
        provide: 'PoliceRepository',
        useValue: Police,
    },
];