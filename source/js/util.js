const getRandomInt = (min, max) => {
    if (min < 0 || max < 0) {
        return -1;
    }

    if (max < min) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*
 *Функция возвращает случайное число с плавающей точкой из диапазона
 */

const getRandomNumber = (numIn, numTo, numCount) => {
    if (numIn < 0 || numTo < 0) {
        return -1;
    }

    if (numTo < numIn) {
        [numIn, numTo] = [numTo, numIn];
    }
    let random = Math.random() * (numTo - numIn + 1) + numIn;
    return Math.round(random * Math.pow(10, numCount)) / Math.pow(10, numCount);
};

//Функция возвращает массив случайной длины из случайных неповторяющихся значений
const getRandomArray = (array) => {
    const randomArray = new Array(getRandomInt(1, array.length)).fill(' ').map(() => (getRandomElement(array)));
    const uniqueElementsArray = [...new Set(randomArray)];
    return uniqueElementsArray;
};

// Функция возвращает случайное значение из массива
const getRandomElement = (element) => {
    const randomElement = Math.floor(Math.random() * element.length);
    return element[randomElement];
};

//нажатие кнопок выхода для popup
const ESC_ALL_BROWSERS = 'Escape';
const ESC_IE = 'Esc';

const isEscEvent = (evt) => evt.key === ESC_ALL_BROWSERS || evt.key === ESC_IE;

const debounce = (callback, timeoutDelay) => {
    let timeoutId;
    return (...rest) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
};


export {
    getRandomInt,
    getRandomNumber,
    getRandomArray,
    getRandomElement,
    isEscEvent,
    debounce
};