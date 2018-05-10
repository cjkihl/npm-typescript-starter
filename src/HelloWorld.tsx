import * as React from 'react';
import printMessage from './printMessage';

type Props = {
  color?: string;
};

export const HelloWorld = ({ color = 'red' }: Props) => <div style={{ color }}>{printMessage()}</div>;
