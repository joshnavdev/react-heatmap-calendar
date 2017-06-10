'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _month = require('./month.js');

var _month2 = _interopRequireDefault(_month);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarHeatMap = function (_React$Component) {
  _inherits(CalendarHeatMap, _React$Component);

  function CalendarHeatMap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CalendarHeatMap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalendarHeatMap.__proto__ || Object.getPrototypeOf(CalendarHeatMap)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentCalHeatmap: _this.props.views[0].dataIndex
    }, _this.getMonthComponents = function (streakData, maxCount, color, tooltipText, dataIndex) {
      var months = [];
      for (var i = 11; i >= 0; i--) {
        var startDate = (0, _moment2.default)().subtract(i, 'month').startOf('month');
        months.push(_react2.default.createElement(_month2.default, {
          key: startDate.format('YYYYMM'),
          startDate: startDate,
          streakData: streakData,
          maxCount: maxCount,
          color: color,
          tooltipText: tooltipText,
          dataIndex: dataIndex
        }));
      }
      return months;
    }, _this.getCalHeatmapModifided = function (dataIndex) {
      var _this$props = _this.props,
          views = _this$props.views,
          _this$props$lowerText = _this$props.lowerText,
          lowerText = _this$props$lowerText === undefined ? 'lower' : _this$props$lowerText,
          _this$props$fewerText = _this$props.fewerText,
          fewerText = _this$props$fewerText === undefined ? 'fewer' : _this$props$fewerText;

      var currentView = views.filter(function (view) {
        return view.dataIndex === dataIndex;
      })[0];
      console.log('currentVIew', currentView);
      var streakData = _this.props.streakData;
      var maxCount = currentView.maxCount,
          _currentView$color = currentView.color,
          color = _currentView$color === undefined ? 'blue' : _currentView$color,
          tooltipText = currentView.tooltipText;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'cal-heatmap_year' },
          _this.getMonthComponents(streakData, maxCount, color, tooltipText, dataIndex)
        ),
        _react2.default.createElement(_keys2.default, {
          maxCount: maxCount,
          color: color,
          fewerText: fewerText,
          lowerText: lowerText
        })
      );
    }, _this.changeView = function (nextView) {
      _this.setState({
        currentCalHeatmap: nextView
      });
    }, _this.render = function () {
      var views = _this.props.views;
      var currentCalHeatmap = _this.state.currentCalHeatmap;

      return _react2.default.createElement(
        'div',
        { className: 'cal-heatmap' },
        _this.getCalHeatmapModifided(currentCalHeatmap),
        _react2.default.createElement(_menu2.default, { onChangeView: _this.changeView, views: views })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return CalendarHeatMap;
}(_react2.default.Component);

;

exports.default = CalendarHeatMap;