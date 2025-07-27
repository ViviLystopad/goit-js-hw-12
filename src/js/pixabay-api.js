// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query).Ця функція повинна приймати один параметр query(пошукове слово, яке є рядком),
// здійснювати HTTP - запит і повертати значення властивості data з отриманої відповіді.

import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51418271-3ce051128b40e60140119ef7a';

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };
    return axios.get(BASE_URL, { params }).then(response => response.data);
}


