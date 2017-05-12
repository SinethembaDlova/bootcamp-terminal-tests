module.exports = function isWeekDay(day) {
    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var todayDate = new Date();
    var isDay = weekDays[todayDate.getDay()];

    var checkDay = day === isDay;

    return checkDay;
};
