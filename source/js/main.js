import { disablePage, publishFormSubmit, onButtonReset } from './form.js';
import { activateMapFilter, checkAllFilters, changeFilters } from './filter.js';
import { getMap, mainMarkerCoordinates } from './map.js';
import { getData } from './server.js';
import { debounce } from './util.js';

disablePage(); // по умолчанию страница выключена до загрузки карты
getMap(); // получение карты
mainMarkerCoordinates(); //создание точки координат

getData((ads) => {
    checkAllFilters(ads),
        changeFilters(debounce(() => checkAllFilters(ads), TIMEOUT_DELAY));
    activateMapFilter(); // При успешной загрузке карты фильтр для карты переключается в активное состояние
    publishFormSubmit(() => checkAllFilters(ads));
    onButtonReset(() => checkAllFilters(ads));
});