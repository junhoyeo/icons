"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var InfoFill=function InfoFill(_ref){var _ref$color=_ref.color,color=_ref$color===void 0?"currentColor":_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size,style=_ref.style,props=(0,_objectWithoutProperties2["default"])(_ref,["color","size","style"]);return/*#__PURE__*/_react["default"].createElement("svg",(0,_extends2["default"])({stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",shapeRendering:"geometricPrecision",viewBox:"0 0 24 24"},props,{height:size,width:size,style:(0,_extends2["default"])({},style,{color:color})}),/*#__PURE__*/_react["default"].createElement("circle",{cx:"12",cy:"12",r:"10",fill:color}),/*#__PURE__*/_react["default"].createElement("path",{stroke:"var(--geist-icons-background)",d:"M12 16v-4M12 8h.01"}))};var _default=InfoFill;exports["default"]=_default;