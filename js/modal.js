const modal = () => {
    const modal = document.querySelector('.search-model');
const modalBtn = document.querySelector('.icon_search');
const modalClose = modal.querySelector('.search-close-switch');
const searchInput = modal.querySelector('.search-model-form')
const input = modal.querySelector('input');
// console.log(input.value);

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})

input.addEventListener('keydown', () => {
    console.log(input.value);
});
}
modal();