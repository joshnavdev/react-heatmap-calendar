'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _week = require('./week');

var _week2 = _interopRequireDefault(_week);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Month = function Month(_ref) {
  var streakData = _ref.streakData,
      maxCount = _ref.maxCount,
      startDate = _ref.startDate,
      color = _ref.color,
      tooltipText = _ref.tooltipText,
      dataIndex = _ref.dataIndex;


  var getWeekComponents = function getWeekComponents() {
    var monthStart = (0, _moment2.default)(startDate);
    var monthEnd = (0, _moment2.default)(monthStart).endOf('month');
    var weekStart = (0, _moment2.default)(monthStart).startOf('week');
    var weeks = [];

    if (0 === monthStart.day()) {
      weekStart.subtract(6, 'day');
    } else {
      weekStart.add(1, 'day');
    }

    do {
      weeks.push(_react2.default.createElement(_week2.default, {
        key: weekStart.format('YYYYMMDD'),
        startDate: (0, _moment2.default)(weekStart),
        month: monthStart,
        streakData: streakData,
        maxCount: maxCount,
        color: color,
        tooltipText: tooltipText,
        dataIndex: dataIndex
      }));
      weekStart.add(1, 'week');
    } while (weekStart.isBefore(monthEnd, 'day') || weekStart.isSame(monthEnd, 'day'));
    return weeks;
  };

  return _react2.default.createElement(
    'div',
    { className: 'cal-heatmap_month' },
    _react2.default.createElement(
      'div',
      null,
      getWeekComponents()
    ),
    _react2.default.createElement(
      'div',
      { className: 'cal-heatmap_label' },
      startDate.format('MMM')
    )
  );
};

exports.default = Month;