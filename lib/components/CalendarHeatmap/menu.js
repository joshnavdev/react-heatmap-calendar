'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('antd/lib/radio/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = _antd.Radio.Button;
var RadioGroup = _antd.Radio.Group;

var Menu = function Menu(_ref) {
  var views = _ref.views,
      onChangeView = _ref.onChangeView;

  var handleChange = function handleChange(e) {
    var nextView = e.target.value;
    onChangeView(nextView);
  };

  return _react2.default.createElement(
    'div',
    { className: 'cal-heatmap_menu' },
    _react2.default.createElement(
      RadioGroup,
      { onChange: handleChange, defaultValue: views[0].dataIndex },
      views.map(function (view) {
        var nameDisplay = view.nameDisplay,
            dataIndex = view.dataIndex;

        return _react2.default.createElement(
          RadioButton,
          { key: dataIndex, value: dataIndex },
          nameDisplay
        );
      })
    )
  );
};

exports.default = Menu;