# react-native-split-screen

基于 [retyui](https://github.com/retyui) 的 [react-native-split-view-demo](https://github.com/retyui/react-native-split-view-demo) 提取和整理代码；

项目依赖于 [react-navigation](https://github.com/react-navigation/react-navigation)，分屏采用两个路由栈实现：

```javascript
import { setMasterNavigator, setDetailNavigator } from 'react-native-split-screen'

// 注册不同的路由栈
export const RegisterStack = ({ isMaster, target, extendTarget }: ScreenStackType) => {
    return (
        <NavigationContainer independent ref={isMaster ? setMasterNavigator : setDetailNavigator}>
            <Stack.Navigator initialRouteName={target} screenOptions={{ headerBackTitleVisible: false }}>
                {Object.entries(RegisterScreen(screens, [target, ...extendTarget])).map(([key, value]) => (
                    <Stack.Screen key={key} name={key} component={value} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
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
