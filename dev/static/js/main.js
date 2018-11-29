$(document).ready(function () {
    selects();
    selectPeriod();
    selectDiagGraph();
    orderDetails();
    toggleContent();
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

    if (range.length > 0) {
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
}

function selectDiagGraph() {
    $('[name="diag-graph"]').on('change', function (e) {
       if($(this).val() == 'diag') {
           $('.js-data-diag').show();
           $('.js-data-graph').hide();
       } else {
           $('.js-data-diag').hide();
           $('.js-data-graph').show();
       }
    });
}

function orderDetails() {
    $('.js-open-details').on('click', function (e) {
        e.preventDefault();
        $('.js-order-details').show();
    });
    $('.js-order-details-close').on('click', function (e) {
        e.preventDefault();
        $('.js-order-details').hide();
    });
}

function toggleContent() {

    /* Аналитика */
    var analytics_ch = $('.js-analytics-ch'),
        analytics_data = $('.js-analytics-data');

    if (analytics_ch.length > 0) {
        analytics_ch.on('change', function () {
            analytics_data.toggle();
        });
    }

    /* Табы */

    var graphs_container = $('.js-analytics-graphs');

    graphs_container.find('[data-type='+ $('.js-analytics-graph input:checked').val() + ']').show();

    $('.js-analytics-graph input').on('change', function () {
        graphs_container.find('[data-type]').hide();
        graphs_container.find('[data-type='+ $('.js-analytics-graph input:checked').val() + ']').show();
    });

    var profit_turnover = $('.js-profit-turnover-data');

    profit_turnover.find('[data-type='+ $('.js-profit-turnover input:checked').val() + ']').show();

    $('.js-profit-turnover input').on('change', function () {
        profit_turnover.find('[data-type]').hide();
        profit_turnover.find('[data-type='+ $('.js-profit-turnover input:checked').val() + ']').show();
    });


    var tables = $('.js-orders-tables');

    tables.find('[data-type='+ $('.js-orders-radio input:checked').val() + ']').show();

    $('.js-orders-radio input').on('change', function () {
        tables.find('[data-type]').hide();
        tables.find('[data-type='+ $('.js-orders-radio input:checked').val() + ']').show();
    });



}