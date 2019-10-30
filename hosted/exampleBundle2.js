'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelloUser = function (_React$Component) {
    _inherits(HelloUser, _React$Component);

    function HelloUser(props) {
        _classCallCheck(this, HelloUser);

        var _this = _possibleConstructorReturn(this, (HelloUser.__proto__ || Object.getPrototypeOf(HelloUser)).call(this, props));

        _this.state = {
            username: props.username
        };

        _this.handleNameChange = _this.handleNameChange.bind(_this); //makes keyword inside handleNameChange use the class when calling this
        return _this;
    }

    _createClass(HelloUser, [{
        key: 'handleNameChange',
        value: function handleNameChange(e) {
            this.setState({ username: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Hello ',
                this.state.username,
                React.createElement(
                    'p',
                    null,
                    'Change Name: '
                ),
                React.createElement('input', { type: 'text', value: this.state.username, onChange: this.handleNameChange })
            );
        }
    }]);

    return HelloUser;
}(React.Component);

var init = function init() {
    ReactDOM.render(React.createElement(HelloUser, { username: 'Austin' }), document.getElementById('app'));
};

window.onload = init;
