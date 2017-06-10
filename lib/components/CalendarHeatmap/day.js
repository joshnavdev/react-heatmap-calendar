'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _antd = require('antd');

require('antd/lib/tooltip/style/css');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultTooltipText = function defaultTooltipText(count, date) {
  return _react2.default.createElement(
    'span',
    null,
    date + ' : ' + count
  );
};

var Day = function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day() {
    _classCallCheck(this, Day);

    var _this = _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).call(this));

    _this.state = {
      hovered: false
    };

    _this.mouseEnter = function () {
      _this.setState({
        hovered: true
      });
    };

    _this.mouseLeave = function () {
      _this.setState({
        hovered: false
      });
    };

    _this.render = function () {
      var _this$props = _this.props,
          postCount = _this$props.postCount,
          date = _this$props.date,
          _this$props$className = _this$props.classNames,
          classNames = _this$props$className === undefined ? (0, _classnames2.default)('blue', 'is-level-2') : _this$props$className,
          _this$props$canHover = _this$props.canHover,
          canHover = _this$props$canHover === undefined ? false : _this$props$canHover,
          _this$props$tooltipTe = _this$props.tooltipText,
          tooltipText = _this$props$tooltipTe === undefined ? defaultTooltipText : _this$props$tooltipTe;


      var hoveredClass = {
        'is-hovered': canHover && _this.state.hovered
      };
      if (!canHover) {
        return _react2.default.createElement('div', {
          onMouseEnter: _this.mouseEnter,
          onMouseLeave: _this.mouseLeave,
          className: (0, _classnames2.default)('cal-heatmap_day', hoveredClass, classNames)
        });
      }

      return _react2.default.createElement(
        _antd.Tooltip,
        {
          title: tooltipText(postCount, date)
        },
        _react2.default.createElement('div', {
          onMouseEnter: _this.mouseEnter,
          onMouseLeave: _this.mouseLeave,
          className: (0, _classnames2.default)('cal-heatmap_day', hoveredClass, classNames)
        })
      );
    };

    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
    return _this;
  }

  return Day;
}(_react2.default.Component);

exports.default = Day;