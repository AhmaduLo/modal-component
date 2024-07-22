"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//import './style/modal.scss'; // Importez le fichier SCSS

const Modal = _ref => {
  let {
    show,
    onClose,
    message
  } = _ref;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "close",
    onClick: onClose,
    role: "button",
    "aria-label": "Fermer"
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", null, message)));
};
var _default = exports.default = Modal;