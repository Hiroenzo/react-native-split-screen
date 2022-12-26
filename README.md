# react-native-split-screen

![预览图](https://s3.bmp.ovh/imgs/2022/12/22/602e25854a2ff0af.gif)

基于 [retyui](https://github.com/retyui) 的 [react-native-split-view-demo](https://github.com/retyui/react-native-split-view-demo) 提取和整理代码；

项目依赖于 [react-navigation](https://github.com/react-navigation/react-navigation)，分屏采用两个路由栈实现：

```javascript
import { setMasterNavigator, setDetailNavigator } from 'react-native-split-screen'

// 注册不同的路由栈
export const RegisterStack = ({ isMaster, target, extendTarget }: ScreenStackType) => {
  return (
    <NavigationContainer
      independent
      ref={isMaster ? setMasterNavigator : setDetailNavigator}
    >
      <Stack.Navigator
        initialRouteName={target}
        screenOptions={{ headerBackTitleVisible: false }}
      >
        {Object.entries(RegisterScreen(screens, [target, ...extendTarget])).map(([key, value]) => (
          <Stack.Screen key={key} name={key} component={value} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

全局路由初始化：

```javascript
import { isTablet } from 'react-native-device-info'

export const Index = () => {
  const _isTablet = isTablet()
  return (
    <TabletContextProvider isTablet={_isTablet}>
      <NavigationContainer>
        ...
      </NavigationContainer>
    </TabletContextProvider>
  )
}
```

主路由页面：

```javascript
import { navigate } from 'react-native-split-screen'

const SplitViewMaster: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 默认路由提供的跳转方法 */}
      <Button label={'page'} onPress={() => navigation.navigate('page')} />
      {/* 主路由跳转至子路由，需要使用组件提供的 navigate 或 push 方法 */}
      <Button label={'SplitViewDetail'} onPress={() => navigate('SplitViewDetail')} />
    </View>
  )
}
```

分屏路由：

```javascript
const SplitViewDetail: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SplitViewDetailScreen</Text>
    </View>
  )
}
```
合并之后的页面：

```javascript
import { SplitView, useIsTablet } from 'react-native-split-screen'

const SplitViewScreen = () => {
  // 判断当前是否为平板
  const [isTablet] = useIsTablet()

  /**
   * 平板模式下采用分屏显示：
   * 左侧为主路由，一般为列表页，右侧为子路由，一般为详情页；
   * 非平板模式只显示主路由；
   * @param target       主路由名称
   * @param extendTarget 扩展路由名称 *注：需要将默认子路由注册到主路由的扩展路由里
   */
  return isTablet ? (
    <SplitView
      master={
        <RegisterStack
          isMaster
          target={'SplitViewMaster'}
          extendTarget={['SplitViewDetail', ...otherRoute]}
        />
      }
      detail={<RegisterStack target={'SplitViewDetail'} extendTarget={[...otherRoute]} />}
    />
  ) : (
    <RegisterStack isMaster target={'SplitViewMaster'} extendTarget={['SplitViewDetail', ...otherRoute]} />
  )
}
```
