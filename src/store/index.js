import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
    },
    state: {
        cartList: [],
        IsSelectAll: false,
    },
    getters: {
        cartLength(state) {
            return state.cartList.length
        },
        cartList(state) {
            return state.cartList
        },
        IsSelectAll(state) {
            return state.IsSelectAll
        },
        checkedCount(state) {
            let i = 0
            for (let item in state.cartList) {
                if (state.cartList[item].checked)
                    i += state.cartList[item].count
            }
            return i
        },
        // 总价格
        allPrice(state) {
            return state.cartList.filter(item => {
                return item.checked
            }).reduce((pre, item) => {
                return pre + item.price * item.count
            }, 0).toFixed(2)
        }
    },
    mutations: {
        Add(state, payload) {
            const product = state.cartList.find(item =>
                item.iid === payload.iid
            )
            product.count++
        },
        Sub(state, payload) {
            const product = state.cartList.find(item =>
                item.iid === payload.iid
            )
            if (product.count == 1) {
                for (var i = state.cartList.length - 1; i >= 0; i--) {
                    if (state.cartList[i].iid == product.iid) {
                        state.cartList.splice(i, 1)
                    }
                }
            } else {
                product.count--
            }
            this.commit("changeState");

        },
        addCounter(state, payload) {
            payload.count++
        },
        // 添加购物车
        addCart(state, payload) {
            // payload.checked = true
            state.cartList.push(payload)
        },
        // 移除购物车
        delCart(state, payload) {
            for (var i = state.cartList.length - 1; i >= 0; i--) {
                if (state.cartList[i].iid == payload.iid) {
                    state.cartList.splice(i, 1)
                }
            }

            this.commit("changeState");
        },

        // 全选
        changeIsSelectAll(state) {
            state.IsSelectAll = !state.IsSelectAll
            for (let item in state.cartList) {
                if (state.IsSelectAll) {
                    state.cartList[item].checked = true
                } else {
                    state.cartList[item].checked = false
                }
            }
        },
        changeState(state) {
            if (state.cartList.length == 0) {
                state.IsSelectAll = false
                return
            }
            for (let item in state.cartList) {
                if (!state.cartList[item].checked) {
                    state.IsSelectAll = false
                    return
                }
            }
            state.IsSelectAll = true
        },

    },
    actions: {
        addCart({ state, commit }, payload) {
            return new Promise((resolve, reject) => {
                let oldProduct = state.cartList.find(item => item.iid === payload.iid)
                if (oldProduct) {
                    commit('addCounter', oldProduct)
                    resolve('当前商品数量+1')
                } else {
                    commit('addCart', payload)
                    resolve('添加购物车成功!')
                }
                commit("changeState");
            })
        },
        // 结算
        checkLeast({ state, commit }) {
            let flag = false
            for (var i = state.cartList.length - 1; i >= 0; i--) {
                if (state.cartList[i].checked) {
                    flag = true
                    commit('delCart', state.cartList[i])
                }
            }
            // return flag
            return new Promise((resolve, reject) => {
                if (flag) {
                    resolve('结算成功!')
                } else {
                    reject('请至少选择一件商品!')
                }
            })

        },
    }
})

export default store