"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var Calendar=function Calendar(_ref){var _ref$color=_ref.color,color=_ref$color===void 0?"currentColor":_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size,style=_ref.style,props=(0,_objectWithoutProperties2["default"])(_ref,["color","size","style"]);return/*#__PURE__*/_react["default"].createElement("svg",(0,_extends2["default"])({fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",shapeRendering:"geometricPrecision",viewBox:"0 0 24 24"},props,{height:size,width:size,style:(0,_extends2["default"])({},style,{color:color})}),/*#__PURE__*/_react["default"].createElement("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2"}),/*#__PURE__*/_react["default"].createElement("path",{d:"M16 2v4M8 2v4M3 10h18"}))};var _default=Calendar;exports["default"]=_default;