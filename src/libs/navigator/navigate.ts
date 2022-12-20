import {detailNavigate, detailPush, isDetailNavigatorMounted} from "./detailNavigator";
import {masterNavigate, masterPush} from "./masterNavigator";

/**
 * 调用路由navigate方法
 * @param routeName 路由名称
 * @param params    路由参数
 */
export const navigate = (routeName: string, params?: object | undefined) => {
    if (isDetailNavigatorMounted()) {
        return detailNavigate(routeName, params)
    }
    return masterNavigate(routeName, params)
}

/**
 * 调用路由push方法
 * @param routeName 路由名称
 * @param params    路由参数
 */
export const push = (routeName: string, params?: object | undefined) => {
    if (isDetailNavigatorMounted()) {
        return detailPush(routeName, params)
    }
    return masterPush(routeName, params)
}
