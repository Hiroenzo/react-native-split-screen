import React from 'react';

import DefaultView from './libs/splitView';

export const SplitView = (
  props: JSX.IntrinsicAttributes & {
    master:
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | undefined;
    detail:
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | undefined;
  }
) => <DefaultView {...props} />;

export * from './libs/tableContext';
export * from './libs/sysBackHandler';

export * from './libs/navigator/navigate';
export * from './libs/navigator/detailNavigator';
export * from './libs/navigator/masterNavigator';
