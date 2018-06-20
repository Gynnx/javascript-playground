'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App component!');
var p = document.querySelectorAll('p');
p.forEach(function (p) {
    // console.log(p.textContent);
    // p.remove();
    if (p.textContent.toLowerCase().includes('the')) {
        p.remove();
    };
    // p.textContent = '***'
});

var newParagraph = document.createElement('p');
newParagraph.textContent = 'New element from javascript';
var appendChild = [];
appendChild.push(document.querySelector('body').appendChild(newParagraph));

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {

            var name = 'Jan Cyngynn';
            var person = [{
                name: 'Anne Charmaine',
                location: 'UAE',
                expenses: [],
                income: [],
                id: 1
            }];
            var todoList = [{
                task: 'Feed Natalya',
                status: true

            }, {
                task: 'Walk Natalya',
                status: true
            }, {
                task: 'Buy dog food',
                status: false
            }, {
                task: 'Get a frontend job',
                status: false
            }, {
                task: 'Play the games',
                status: false
            }];
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello, ',
                    name
                ),
                person.map(function (person) {
                    return React.createElement(
                        'div',
                        { key: person.id },
                        React.createElement(
                            'p',
                            null,
                            person.name
                        ),
                        React.createElement(
                            'p',
                            null,
                            person.location
                        )
                    );
                }),
                todoList.map(function (todo, index) {
                    return React.createElement(
                        'div',
                        { key: index },
                        React.createElement(
                            'p',
                            null,
                            todo.task
                        )
                    );
                }),
                appendChild[0]
            );
        }
    }]);

    return App;
}(React.Component);

; //App end

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(App, null), appRoot);
