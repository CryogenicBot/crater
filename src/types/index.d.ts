declare module 'victory-core' {
  import * as React from 'react';

  export interface SliceProps {
    name?: string;
  }

  export class Slice extends React.Component<SliceProps, any> {}
}
