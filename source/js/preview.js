import { addAd } from './data.js';

const TYPES_OF_HOUSE = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
};

const getRoomsEnding = (roomCount) => {
    switch (roomCount) {
        case 1:
            return 'комната';
        case 2:
        case 3:
        case 4:
            return 'комнаты';
        default:
            return 'комнат';
    }
};

const getGuestsEnding = (guestCount) => {
    if (guestCount === 0) {
        return 'не для гостей';
    }
    if (guestCount > 1) {
        return `для ${guestCount} гостей`;
    }
    return `для ${guestCount} гостя`;
};

const createFeatures = (features) => {
    const featuresFragment = document.createDocumentFragment();
    features.forEach((element) => {
        const feature = document.createElement('li');
        feature.classList.add('popup__feature', `popup__feature--${element}`);
        featuresFragment.appendChild(feature);
    });
    return featuresFragment;
};

const createPhotos = (photos) => {
    const photosFragment = document.createDocumentFragment();

    photos.forEach((photoSrc) => {
        const newPhoto = document.createElement('img');
        newPhoto.src = photoSrc;
        newPhoto.classList.add('popup__photo');
        newPhoto.alt = 'Фотография жилья';
        newPhoto.setAttribute('width', '45');
        newPhoto.setAttribute('height', '40');
        photosFragment.appendChild(newPhoto);
    });
    return photosFragment;
};



// Шаблон для функции renderCard
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
// Функция клонирует и заполняет шаблон cardTemplate
const renderCard = (ad) => {
    const card = cardTemplate.cloneNode(true);

    card.querySelector('.popup__avatar').src = ad.author.avatar || '';
    card.querySelector('.popup__title').textContent = ad.offer.title || '';
    card.querySelector('.popup__text--address').textContent = ad.offer.address || '';
    card.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь` || '';
    card.querySelector('.popup__type').textContent = TYPES_OF_HOUSE[ad.offer.type] || '';
    card.querySelector('.popup__text--capacity').textContent = (!ad.offer.rooms || !Number.isInteger(ad.offer.guests)) ? '' : `${ad.offer.rooms} ${getRoomsEnding(ad.offer.rooms)} ${getGuestsEnding(ad.offer.guests)}`;
    card.querySelector('.popup__text--time').textContent = (!ad.offer.checkin || !ad.offer.checkout) ? '' : `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
    card.querySelector('.popup__description').textContent = ad.offer.description || '';

    const cardFeatures = card.querySelector('.popup__features');
    cardFeatures.innerHTML = '';

    if (ad.offer.features) {
        const newFeatureElements = createFeatures(ad.offer.features);
        cardFeatures.appendChild(newFeatureElements);
    } else {
        cardFeatures.remove();
    }

    const cardPhotos = card.querySelector('.popup__photos');
    cardPhotos.innerHTML = '';

    if (ad.offer.photos) {
        const newPhotoElements = createPhotos(ad.offer.photos);
        cardPhotos.appendChild(newPhotoElements);
    } else {
        cardPhotos.remove();
    }

    return card;
};


export {
    renderCard
};