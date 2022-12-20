import Navigator from './navigator';

export const {
  isMounted: isDetailNavigatorMounted,
  push: detailPush,
  navigate: detailNavigate,
  setNavigator: setDetailNavigator,
} = new Navigator();
