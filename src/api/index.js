import ajax from '../server/ajax'
import axios from 'axios'

/**
 * 个人信息 页面api
 * @param {*} data 
 */

// 修改个人信息
export const upDataUser = async (data) => (await ajax({ url: '/api/user/updateUser', data })).data;

// 根据id 查询 用户信息

export const selectUser = async (id) => (await axios.get('/api/user/selectId/' + id)).data;

// ---------------------------------------------------------------------
/**
 * 注册 api
 * @param {*} data 
 */
export const enroll = async (data) => (await ajax({ url: '/api/user/addUser', type: 'post', data })).data;

// ---------------------------------------------------------------------
/**
 * 登录 api
 * @param {*} id 
 */
export const login = async (data) => (await ajax({ type: 'post', url: '/api/user/checkUser', data })).data;

// ---------------------------------------------------------------------
/**
 * 
 * 购物车 页面api
 * 
 */
// 得到所有购物车商品
export const getAllShop = async (id) => {

    const r = (await ajax({
        url: '/api/shopping/selectUserShopping',
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
export const deleteShop = async (id) => (await ajax({ url: '/api/shopping/deleteShopping', data: { shoppingId: id } })).data
// 修改单个购物车的商品数量
export const changeShopNum = async (data) => (await ajax({ url: '/api/shopping/updateCount', data })).data;
// 修改单个购物车勾选状态
export const changeShopState = async (data) => (await ajax({ url: '/api/shopping/updateStatus', data })).data
// ---------------------------------------------------------------------
/**
 * 
 * 首页
 */

export const getAllHotShop = async (data) => (await ajax({ url: '/api/fruitgoods/selectHeat', data })).data;

export const getXianShiQG = async (data) => (await ajax({ url: '/api/fruitgoods/selectTimebuy', data })).data;

// ---------------------------------------------------------------------
/**
 * 
 * 入园采购
 */

// 获取入园采购页所有的商品
export const ruYuanCaiGou = async () => (await ajax({ url: '/api/fruitgoods/selectPluck' })).data;

// ---------------------------------------------------------------------
/**
 * 商品详情页
 */

// 根据商品 id 得到该商品的详情信息

export const getShopDetail = async (id) => (await ajax({ url: '/api/fruitgoods/selectId/' + id })).data


// 添加购物车

export const addShopCart = async (data) => (await ajax({ url: '/api/shopping/addShopping', data })).data;

