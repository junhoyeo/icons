"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var PieChart=function PieChart(_ref){var _ref$color=_ref.color,color=_ref$color===void 0?"currentColor":_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size,style=_ref.style,props=(0,_objectWithoutProperties2["default"])(_ref,["color","size","style"]);return/*#__PURE__*/_react["default"].createElement("svg",(0,_extends2["default"])({fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",shapeRendering:"geometricPrecision",viewBox:"0 0 24 24"},props,{height:size,width:size,style:(0,_extends2["default"])({},style,{color:color})}),/*#__PURE__*/_react["default"].createElement("path",{d:"M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"}))};var _default=PieChart;exports["default"]=_default;