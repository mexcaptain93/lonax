$(document).ready(function () {
    selects();
    selectPeriod();
});

function selects() {
    $('.js-select').niceSelect();
}

function selectPeriod() {

    $('.js-select-date-input').on('click', function (e) {
        e.preventDefault();
        $('.js-popup-date').show();
    });

    $('.js-popup-date-close').on('click', function (e) {
        e.preventDefault();
        $('.js-popup-date').hide();
    });

    $('body').on('click', '.js-popup-date-save', function (e) {
        e.preventDefault();
        $('.js-select-date-input').val(start.val() + ' - ' + end.val());
        $('.js-popup-date').hide();
    });

    var input = $('.js-select-date'),
        range = $('.js-popup-date-range'),
        start = $('.js-popup-date-start'),
        end = $('.js-popup-date-end');
    range.datepicker({
        range: 'period', // режим - выбор периода
        numberOfMonths: 3,
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        firstDay: 1,
        dateFormat: 'dd.mm.yy',


        onSelect: function(dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            start.val(extensionRange.startDateText);
            end.val(extensionRange.endDateText);

        }
    });

    input.datepicker('setDate', ['+4d', '+8d']);

    // объект расширения (хранит состояние календаря)
    var extensionRange = range.datepicker('widget').data('datepickerExtensionRange');
    if(extensionRange.startDateText) start.val(extensionRange.startDateText);
    if(extensionRange.endDateText) end.val(extensionRange.endDateText);


}