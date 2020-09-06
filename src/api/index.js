import ajax from '../server/ajax'
import axios from 'axios'
import { host } from '../_config'
/**
 * 个人信息 页面api
 * @param {*} data 
 */

// 修改个人信息
export const upDataUser = async (data) => (await ajax({ url: host + '/api/user/updateUser', data })).data;

// 根据id 查询 用户信息

export const selectUser = async (id) => (await axios.get(host + '/api/user/selectId/' + id)).data;

// ---------------------------------------------------------------------
/**
 * 注册 api
 * @param {*} data 
 */
export const enroll = async (data) => (await ajax({ url: host + '/api/user/addUser', type: 'post', data })).data;

// ---------------------------------------------------------------------
/**
 * 登录 api
 * @param {*} id 
 */
export const login = async (data) => (await ajax({ type: 'post', url: host + '/api/user/checkUser', data })).data;

// ---------------------------------------------------------------------
/**
 * 
 * 购物车 页面api
 * 
 */
// 得到所有购物车商品
export const getAllShop = async (id) => {

    const r = (await ajax({
        url: host + '/api/shopping/selectUserShopping',
        data: {
            userId: id
        }
    })).data;
    if (typeof r.data.result === 'string') {
        return {
            ...r,
            data: {
                result: []
            }
        }
    } else return r;

}
// 删除所选的购物车商品
export const deleteShop = async (id) => (await ajax({ url: host + '/api/shopping/deleteShopping', data: { shoppingId: id } })).data
// 修改单个购物车的商品数量
export const changeShopNum = async (data) => (await ajax({ url: host + '/api/shopping/updateCount', data })).data;
// 修改单个购物车勾选状态
export const changeShopState = async (data) => (await ajax({ url: host + '/api/shopping/updateStatus', data })).data
// ---------------------------------------------------------------------
/**
 * 
 * 首页
 */

export const getAllHotShop = async (data) => (await ajax({ url: host + '/api/fruitgoods/selectHeat', data })).data;

export const getXianShiQG = async (data) => (await ajax({ url: host + '/api/fruitgoods/selectTimebuy', data })).data;

// ---------------------------------------------------------------------
/**
 * 
 * 入园采购
 */

// 获取入园采购页所有的商品
export const ruYuanCaiGou = async () => (await ajax({ url: host + '/api/fruitgoods/selectPluck' })).data;

// ---------------------------------------------------------------------
/**
 * 商品详情页
 */

// 根据商品 id 得到该商品的详情信息

export const getShopDetail = async (id) => (await ajax({ url: host + '/api/fruitgoods/selectId/' + id })).data


// 添加购物车

export const addShopCart = async (data) => (await ajax({ url: host + '/api/shopping/addShopping', data })).data;


// ---------------------------------------------------------------------
/**
 * 收获地址
 */

// 获取某个用户所有地址api
export const getAllUserAddress = async (userId) => (await ajax({ url: host + '/api/address/selectUserAddress?userId=' + userId })).data;

/**
 * 
 * 获取用户订单接口
 */
export const getMyOrder = async (id) => (await ajax({ url: host + '/api/order/selectAllUserOrder?userId=' + id })).data;

/**
 * 时令水果页面接口
 */

export const getFruitgoods = async (type) => (await ajax({ url: host + '/api/fruitgoods/' + type })).data;
// 得到类型为店长推荐的商品
export const getManagerFruitgoods = async (id) => (await ajax({ url: host + '/api/fruitgoods/selectRecommend?shop_id=' + id })).data;

/**
 * 收获地址
 */
// 获取默认收获地址
export const getDefaultHarvestAddress = async (id) => (await ajax({ url: host + '/api/address/selectUserDefaultAddress?userId=' + id })).data;

// 添加一个地址
export const addAddress = async (data) => (await ajax({ url: host + '/api/address/insertAddress', data })).data;
/**
 * 
 * 城市
 */
export const getHotCity = async () => (await ajax({ url: 'http://cangdu.org:8001/v1/cities?type=hot' })).data;
export const getAllCity = async () => (await ajax({ url: 'http://cangdu.org:8001/v1/cities?type=group' })).data;
export const searchAddress = async ({ key, id }) => (await ajax({ url: `http://cangdu.org:8001/v1/pois?type=search&city_id=${id}&keyword=${key}` })).data;


