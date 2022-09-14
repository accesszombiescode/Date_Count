const calculate = document.querySelector('.calculate-button');

calculate.addEventListener('click', () => {

    var enterDate = new Date(document.querySelector('.date').value);
    var inputdate = {
        year: enterDate.getFullYear(),
        month: enterDate.getMonth(),
        day: enterDate.getDate(),
    }

    var date = new Date()
    var d2 = date.getDate();
    var m2 = date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (inputdate.day > d2) {
        d2 = d2 + month[m2 - 1]
        m2 = m2 - 1
    }
    if (inputdate.month > m2) {
        m2 = m2 + 12
        y2 = y2 - 1
    }
    document.querySelector('.day').innerHTML = d2 - inputdate.day;
    document.querySelector('.month').innerHTML = m2 - inputdate.month;
    document.querySelector('.year').innerHTML = y2 - inputdate.year;

})