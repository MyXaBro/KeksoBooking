import { getRandomInt, getRandomNumber, getRandomArray } from './util.js';

let addAd = [];

const getRandomItemType = (elements) => {
    return elements[getRandomInt(0, elements.length - 1)];
};

const createAd = () => {
    const avatar = '/img/avatars/user0' + getRandomInt(1, 8) + '.png';
    const location = {
        lat: getRandomNumber(35.65000, 35.70000, 5),
        lng: getRandomNumber(139.70000, 139.80000, 5)
    };

    const offer = {
        title: getRandomItemType(['Skyline Inn',
            'Parkview Palace ',
            'The Regal Residence',
            'Royal View',
            'Hilltop Haven',
            'Mountain Mirage',
            'Garden Getaway '
        ]),
        address: ([location.x, location.y]),
        price: getRandomInt(100, 10000),
        type: getRandomItemType(['palace', 'flat', 'house', 'bungalow']),
        rooms: getRandomInt(1, 5),
        guests: getRandomInt(1, 100),
        checkin: getRandomItemType(['12:00', '13:00', '14:00']),
        checkout: getRandomItemType(['12:00', '13:00', '14:00']),
        features: getRandomArray(['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']),
        description: getRandomItemType(['Полюбуйтесь городским пейзажем в отеле Skyline Inn, расположенном в самом сердце шумного мегаполиса.',
            'Почувствуйте себя по-королевски в Parkview Palace, где из каждого номера открывается потрясающий вид на парк.',
            'Оставайтесь стильными в Королевской резиденции, где элегантность и класс - это само собой разумеющееся.',
            'Полюбуйтесь панорамным видом в Royal View, где каждая комната представляет собой окно в мир.',
            'Уединитесь в Hilltop Haven, окруженном спокойными холмами и захватывающими дух пейзажами.',
            'Найдите безмятежность в Mountain Mirage, где красота гор повергнет вас в благоговейный трепет.',
            'Вырвитесь на природу в Garden Getaway, в окружении пышной зелени и спокойствия.'
        ]),
        photos: getRandomArray(['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
            'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
        ])
    };

    return {
        author: {
            avatar
        },
        offer,
        location
    };
};

addAd = new Array(10).fill(null).map(createAd);

export { addAd };