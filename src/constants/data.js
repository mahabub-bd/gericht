import images from './images';

const wines = [
    {
        title: 'Chapel Hill Shiraz',
        key: '1',
        price: '$56',
        tags: 'Chapel | Bottle |',
    },
    {
        title: 'Catena Malbee',
        key: '2',
        price: '$59',
        tags: 'AU | Bottle',
    },
    {
        title: 'La Vieillw Rose',
        key: '3',
        price: '$44',
        tags: 'FR | 750 ml',
    },
    {
        title: 'Rhino Pale Ale',
        price: '$31',
        key: '4',
        tags: 'CA | 750 ml',
    },
    {
        title: 'Irish Guinness',
        key: '5',
        price: '$26',
        tags: 'IE | 750 ml',
    },
];

const cocktails = [
    {
        title: 'Aperol Sprtiz',
        key: '1',
        price: '$20',
        tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
    },
    {
        title: "Dark 'N' Stormy",
        key: '2',
        price: '$16',
        tags: 'Dark rum | Ginger beer | Slice of lime',
    },
    {
        title: 'Daiquiri',
        key: '3',
        price: '$10',
        tags: 'Rum | Citrus juice | Sugar',
    },
    {
        title: 'Old Fashioned',
        key: '4',
        price: '$31',
        tags: 'Bourbon | Brown sugar | Angostura Bitters',
    },
    {
        title: 'Negroni',
        key: '5',
        price: '$26',
        tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    },
];

const awards = [
    {
        imgUrl: images.award02,
        title: 'Bib Gourmond',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award01,
        title: 'Rising Star',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award05,
        title: 'AA Hospitality',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    {
        imgUrl: images.award03,
        title: 'Outstanding Chef',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
    },
];

export default { wines, cocktails, awards };
