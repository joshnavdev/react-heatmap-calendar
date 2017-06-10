'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('antd/lib/tooltip/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyDayStyle = {
  width: 20,
  height: 20
};

var Keys = function Keys(_ref) {
  var color = _ref.color,
      fewerText = _ref.fewerText,
      lowerText = _ref.lowerText,
      maxCount = _ref.maxCount;

  var interval = Math.floor(maxCount / 4);
  // Ar
  var basicCaption = [[0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 2], [0, 1, 2, 3]];
  var getCaption = function getCaption() {
    var keys = [];
    for (var i = 0; i <= 4; i++) {
      var y = i - 1;
      var start = interval * y + 1;
      var end = start + interval - 1;
      var title = ' From ' + start + ' to ' + (i === 4 ? maxCount : end);
      if (i === 0) {
        keys.push(_react2.default.createElement(
          _antd.Tooltip,
          {
            key: i,
            title: '0'
          },
          _react2.default.createElement('div', { style: keyDayStyle, className: 'cal-heatmap_day' })
        ));
      } else {
        if (maxCount < 4) {
          var number = '' + basicCaption[maxCount][i - 1];
          title = number === '0' ? '0' : 'From ' + number + ' to ' + number;
        }
        keys.push(_react2.default.createElement(
          _antd.Tooltip,
          {
            key: i,
            title: title
          },
          _react2.default.createElement('div', { style: keyDayStyle, className: 'cal-heatmap_day is-level-' + i + ' ' + color })
        ));
      }
    }
    return keys;
  };
  return _react2.default.createElement(
    'div',
    { className: 'cal-heatmap_container' },
    _react2.default.createElement(
      'span',
      { className: 'cal-heatmap_label' },
      fewerText
    ),
    _react2.default.createElement(
      'div',
      { className: 'cal-heatmap_day-showers' },
      getCaption()
    ),
    _react2.default.createElement(
      'span',
      { className: 'cal-heatmap_label' },
      lowerText
    )
  );
};

exports.default = Keys;