"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var Book=function Book(_ref){var _ref$color=_ref.color,color=_ref$color===void 0?"currentColor":_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size,style=_ref.style,props=(0,_objectWithoutProperties2["default"])(_ref,["color","size","style"]);return/*#__PURE__*/_react["default"].createElement("svg",(0,_extends2["default"])({fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",shapeRendering:"geometricPrecision",viewBox:"0 0 24 24"},props,{height:size,width:size,style:(0,_extends2["default"])({},style,{color:color})}),/*#__PURE__*/_react["default"].createElement("path",{d:"M4 19.5A2.5 2.5 0 016.5 17H20"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"}))};var _default=Book;exports["default"]=_default;