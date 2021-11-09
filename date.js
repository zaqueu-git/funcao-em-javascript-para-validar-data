function date(value) {
    let array = value.split("-");

    let day = array[2];
    let month = array[1];
    let year = array[0];

    let newDate = new Date(year, (month - 1), day);
    let sameDay = parseInt(day, 10) == parseInt(newDate.getDate());
    let sameMonth = parseInt(month, 10) == parseInt(newDate.getMonth()) + 1;
    let sameYear = parseInt(year) == parseInt(newDate.getFullYear());

    if ((sameDay) && (sameMonth) && (sameYear)) {
        return true;
    }
    return false;
}