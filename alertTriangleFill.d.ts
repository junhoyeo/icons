import React from 'react';
interface Props extends React.SVGProps<SVGElement> {
  color?: string;
  size?: number | string;
}
type Icon = React.FunctionComponent<Props>;
declare const AlertTriangleFill: Icon;
export default AlertTriangleFill