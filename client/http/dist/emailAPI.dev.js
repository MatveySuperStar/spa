"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessageEmail = void 0;
var API_URL = "http://localhost:5000/";

var sendMessageEmail = function sendMessageEmail(_ref) {
  var phone, name, data, json;
  return regeneratorRuntime.async(function sendMessageEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          phone = _ref.phone, name = _ref.name;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("http://localhost:5000/api/email/send", {
            method: "POST",
            body: JSON.stringify({
              phone: phone,
              name: name
            }),
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 4:
          data = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(data.json());

        case 7:
          json = _context.sent;
          return _context.abrupt("return", {
            errors: json.errors || [json]
          });

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
};

exports.sendMessageEmail = sendMessageEmail;