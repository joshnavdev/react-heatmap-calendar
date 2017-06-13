'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Week = function Week(_ref) {
  var _ref$streakData = _ref.streakData,
      streakData = _ref$streakData === undefined ? {} : _ref$streakData,
      maxCount = _ref.maxCount,
      month = _ref.month,
      startDate = _ref.startDate,
      color = _ref.color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'default' : _ref$size,
      tooltipText = _ref.tooltipText,
      dataIndex = _ref.dataIndex;


  var getDayComponents = function getDayComponents() {
    var days = [];
    for (var i = 0; i < 7; i++) {
      var canHover = false;
      var dayDate = (0, _moment2.default)(startDate).add(i, 'days');
      var postCount = streakData[dayDate.format('YYYY-MM-DD')] && streakData[dayDate.format('YYYY-MM-DD')][dataIndex] || 0;
      var classNames = [];
      var level = 0;
      var interval = maxCount / 4;
      if (postCount !== 0) {
        if (postCount <= interval) {
          level = 1;
        } else if (postCount <= interval * 2) {
          level = 2;
        } else if (postCount <= interval * 3) {
          level = 3;
        } else {
          level = 4;
        }
      }

      if (dayDate.isBefore((0, _moment2.default)(month).startOf('month')) || dayDate.isAfter((0, _moment2.default)(month).endOf('month'))) {
        classNames.push('is-outside-month');
      } else if (dayDate.isAfter((0, _moment2.default)().endOf('day'))) {
        classNames.push('is-after-today');
      } else if (level) {
        canHover = true;
        classNames.push('is-level-' + level);
      }
      classNames.push(color);
      days.push(_react2.default.createElement(_day2.default, {
        key: (0, _moment2.default)(dayDate.format('MMDD')),
        classNames: classNames.join(' '),
        size: size,
        date: dayDate.format('DD/MM/YYYY'),
        postCount: postCount,
        canHover: canHover,
        tooltipText: tooltipText
      }));
    }
    return days;
  };
  var classSize = size === 'default' ? '' : '-' + size;

  return _react2.default.createElement(
    'div',
    { className: 'cal-heatmap_week' + classSize },
    getDayComponents()
  );
};

exports.default = Week;