const DATA = 'https://23.javascript.pages.academy/keksobooking/data';
const SERVER = 'https://23.javascript.pages.academy/keksobooking';

const getData = async(onSuccess, onFail) => {
    try {
        const response = await fetch(DATA);
        if (response.ok) {
            const data = await response.json();
            onSuccess(data);
        } else {
            throw new Error(`Ошибка загрузки данных ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        onFail(`Ошибка загрузки данных: ${error}`);
    }
};

const sendData = async(onSuccess, onFail, body) => {
    try {
        const response = await fetch(SERVER, {
            method: 'POST',
            body,
        });
        if (response.ok) {
            onSuccess('Ваше объявление успешно размещено!');
        } else if (response.status >= 500 && response.status <= 505) {
            throw new Error('Не удалось получить данные с сервера. Попробуйте ещё раз!');
        } else {
            throw new Error('Не удалось отправить форму. Попробуйте ещё раз!');
        }
    } catch (error) {
        onFail(`Ошибка отправки формы: ${error}`);
    }
};

export {
    getData,
    sendData
};