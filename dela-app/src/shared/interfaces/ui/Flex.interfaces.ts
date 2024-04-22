import React from 'react';

export enum Align {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
  Stretch = 'stretch',
  Baseline = 'baseline',
}

export enum Direction {
  Row = 'row',
  Column = 'column',
}

export interface Props {
  align?: Align;
  direction?: Direction;
  className?: string;
  style?: React.CSSProperties;
}
