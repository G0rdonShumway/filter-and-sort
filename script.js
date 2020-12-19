let el = $('.element');

function filter(element) {
    let colorValue = $('.colorFilter').val();
    let shapeValue = $('.shapeFilter').val();
    element.show();
    for(let i = 0; i < element.length; i++){
        if(element[i].children[1].innerHTML == colorValue || colorValue == 'Все'){
            element[i].style.display = 'flex';
            if(element[i].children[2].innerHTML == shapeValue || shapeValue == 'Все'){
                element[i].style.display = 'flex';
            } else {
                element[i].style.display = 'none';
            }
        } else {
            element[i].style.display = 'none';
        }
    }
}
$('.colorFilter').change(function () {
    filter(el);
})
$('.shapeFilter').change(function () {
    filter(el);
})
$('.color').each(function () {
    if ($(this).text() == 'Красный') {
        $(this).css('background', '#d63737')
    }
    if ($(this).text() == 'Синий') {
        $(this).css('background', '#3636ab')
    }
    if ($(this).text() == 'Желтый') {
        $(this).css('background', '#d0d001')
    }
    if ($(this).text() == 'Зеленый') {
        $(this).css('background', '#089408')
    }
})
const selectionSort = (arr, direction) => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (direction == 'lowToHigh') {
                if (arr[indexMin].children[3].innerText > arr[j].children[3].innerText) {
                    indexMin = j;
                }
            } else if (direction == 'highToLow') {
                if (arr[indexMin].children[3].innerText < arr[j].children[3].innerText) {
                    indexMin = j;
                }
            } else if (direction == 'default') {
                if (parseInt(arr[indexMin].innerText.match(/\d+/)) > parseInt(arr[j].innerText.match(/\d+/))) {
                    indexMin = j;
                }
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    arr.appendTo($('.wrapper'))
    return arr;
};
$('.sort').change(function () {
    selectionSort(el, $(this).val());
});
