import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchPhotos, PER_PAGE } from "./js/pixabay-api.js";
import { createGalleryMarkup } from "./js/render-functions.js";

const galleryEl = document.querySelector('.gallery');
const searchField = document.querySelector('.search-field');
const searchForm = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

let currentPage = 1;
let currentQuery = '';

async function fetchAndRenderPhotos(query, page) {
    try {
        const imagesData = await searchPhotos(query, page);
        loaderEl.classList.add('is-hidden');

        if (imagesData.totalHits === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                color: '#EF4040',
            });
            return;
        }

        galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(imagesData.hits));

        const lightbox = new SimpleLightbox('.gallery a');
        lightbox.refresh();

        if (page * PER_PAGE >= imagesData.totalHits) {
            loadMoreBtn.classList.add('is-hidden');
            iziToast.show({
                message: 'We are sorry, but you have reached the end of search results.',
                position: 'topRight',
                color: '#EF4040',
            });
        } else {
            loadMoreBtn.classList.remove('is-hidden');
        }
    } catch (error) {
        console.log(error);
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong',
            position: 'topRight',
            color: '#EF4040',
        });
    } finally {
        loaderEl.classList.add('is-hidden');
    }
}

function onSearchFormSubmit(event) {
    event.preventDefault();

    currentQuery = searchField.value.trim();

    if (currentQuery === '') {
        galleryEl.innerHTML = '';
        event.target.reset();
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation',
            position: 'topRight',
            color: '#EF4040',
        });
        return;
    }

    currentPage = 1;
    galleryEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');

    fetchAndRenderPhotos(currentQuery, currentPage);

    event.target.reset();
}

function onLoadMoreBtnClick() {
    currentPage += 1;
    loaderEl.classList.remove('is-hidden');
    fetchAndRenderPhotos(currentQuery, currentPage);
}

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
