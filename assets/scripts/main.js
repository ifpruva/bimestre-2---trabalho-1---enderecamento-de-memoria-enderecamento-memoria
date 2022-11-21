function showOnlyPrevButton() {
    document.querySelector('.prev-button').classList.remove('hidden');
    document.querySelector('.next-button').classList.add('hidden');
}

function showOnlyNextButton() {
    document.querySelector('.next-button').classList.remove('hidden');
    document.querySelector('.prev-button').classList.add('hidden');
}

function showAllButtons() {
    document.querySelector('.next-button').classList.remove('hidden');
    document.querySelector('.prev-button').classList.remove('hidden');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}