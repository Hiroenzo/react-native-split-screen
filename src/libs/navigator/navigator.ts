import {
  StackActions,
  CommonActions,
  StackActionType,
} from '@react-navigation/native';

class Navigator {
  navigator: any;

  // 设置路由
  setNavigator = (navigatorInstance: any) => {
    this.navigator = navigatorInstance;
  };

  // 校验当前路由是否已挂载
  isMounted = () => Boolean(this.navigator);

  // 路由dispatch方法
  dispatch = (action: CommonActions.Action | StackActionType) => {
    this.navigator.dispatch(action);
  };

  // 调用CommonActions.navigate
  navigate = (screenName: string, params: any) => {
    this.dispatch(CommonActions.navigate({ name: screenName, params }));
  };

  // 调用StackActions.push
  push = (screenName: string, params: any) => {
    this.dispatch(StackActions.push(screenName, params));
  };
}

export default Navigator;
