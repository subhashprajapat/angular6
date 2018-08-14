export class HeroClass {
    id = 0;
    name = '';
    addresses: Address[];
}

export class Address {
    street = '';
    city = '';
    state = '';
    zip = '';
}

export const heroes: HeroClass[] = [
    {
        id: 101,
        name: 'Subhash',
        addresses: [
            { street: '123 abc', city: 'Jaipur', state: 'Rajasthan', zip: '302020' },
            { street: '325 abc', city: 'Jaipur', state: 'Rajasthan', zip: '302019' },
        ]
    },
    {
        id: 101,
        name: 'Saurabh',
        addresses: [
            { street: '652 abc', city: 'Rawatsar', state: 'Rajasthan', zip: '335524' },
        ]
    },
    {
        id: 3,
        name: 'Hariram Ji',
        addresses: []
    },
];

export const states = ['Raj', 'HR', 'PB', 'DL'];