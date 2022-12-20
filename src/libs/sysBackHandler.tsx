import React from 'react';
import { BackHandler, Platform } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/core/src/types';

import { useIsTablet } from './tableContext';

type SystemBackType = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const useBackHandler = ({ navigation }: SystemBackType) => {
  const [isTablet] = useIsTablet();

  const onBackPress = React.useCallback(() => {
    if (!navigation) {
      return false;
    }
    if (navigation.canGoBack() && navigation.isFocused()) {
      navigation.goBack();
      return true;
    }
    return false;
  }, [navigation]);

  React.useEffect(() => {
    if (!isTablet) {
      return;
    }

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );

    return () => subscription.remove();
  }, [isTablet, onBackPress]);
};

const withSysBackHook = (Component: any) =>
  Platform.select({
    android: React.forwardRef(
      (props: SystemBackType, ref: React.ForwardedRef<any>) => {
        useBackHandler(props);
        return <Component ref={ref} {...props} />;
      }
    ),
    default: Component,
  });

export default withSysBackHook;
