// У файлі main.js напиши всю логіку роботи додатка.Виклики нотифікацій iziToast,
// усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.
// Імпортуй в нього функції із файлів pixabay - api.js та render - functions.js та
// викликай їх у відповідний момент.

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements['search-text'].value.trim();

    if (!searchQuery) {
        iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(searchQuery)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            }
            createGallery(data.hits);
        })
        .catch(error => {
            iziToast.error({
                message: 'Oops! Something went wrong. Try again later.',
                position: 'topRight',
            });
            console.error(error);
        })
        .finally(() => {
            hideLoader();
        });
});