import Vue from 'vue'
import Vuex from 'vuex'
import storage from 'store'
import {getInfo, login, getAnnualReport} from "@/api/login";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        info: {},
        hasGetInfo: false,
        annualData: {}
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_INFO: (state, info) => {
            state.info = info
        },
        SET_ANNUAL: (state, data) => {
            state.annualData = data
        },
        RESET_INFO: (state) => {
            state.token = ''
            state.info = {}
            state.annualData = {}
        },
        SET_HAS_GET_INFO: (state, hasGetInfo) => {
            state.hasGetInfo = hasGetInfo
        }
    },
    getters: {
        name: state => state.info.name
    },
    actions: {
        login ({commit}, params) {
            return new Promise((resolve, reject) => {
                login(params).then(res => {
                    const data = res.data
                    storage.set('access_token', data['accessToken'])
                    commit('SET_TOKEN', data['accessToken'])
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        LoginByToken ({ commit }, token) {
            return new Promise((resolve) => {
                storage.set('access_token', token)
                commit('SET_TOKEN', token)
                resolve()
            })
        },
        // 模拟数据，实际不能用，男1女2，老师1学生2
        setInfo({ commit }) {
            const info = {
                type: 2,
                gender: 1,
                personType: 0
            }
            const annualData = {
                data1: 'xx',
                data2: 'xx',
                data3: 'xx',
                data4: 'xx',
                data5: 'xx',
                data6: 'xx',
                data7: 'xx',
                data8: 'xx',
                data9: 'xx',
                data10: 'xx',
                data11: 'xx',
                data12: 'xx',
                data13: 'xx',
                data14: 'xx',
                data15: 'xx',
                data16: 'xx',
                data17: 'xx',
                data18: 'xx',
                data19: 'xx',
                data20: 'xx',
                data21: 'xx',
                data22: 'xx',
                data23: 'xx',
                data24: 'xx',
                data25: 'xx',
                data26: 'xx'
                // data1: '#N/A',
                // data2: '#N/A',
                // data3: '#N/A',
                // data4: '#N/A',
                // data5: '#N/A',
                // data6: '#N/A',
                // data7: '#N/A',
                // data8: '#N/A',
                // data9: '#N/A',
                // data10: '#N/A',
                // data11: '#N/A',
                // data12: '#N/A',
                // data13: '#N/A',
                // data14: '#N/A',
                // data15: '#N/A',
                // data16: '#N/A',
                // data17: '#N/A',
                // data18: '#N/A',
                // data19: '#N/A',
                // data20: '#N/A',
                // data21: '#N/A',
                // data22: '#N/A',
                // data23: '#N/A',
                // data24: '#N/A',
                // data25: '#N/A',
                // data26: '#N/A'
            }
            commit('SET_HAS_GET_INFO', true)
            commit('SET_INFO', info)
            commit('SET_ANNUAL', annualData)
        },
        getInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    console.log('info', res)
                    commit('SET_HAS_GET_INFO', true)
                    commit('SET_INFO', res.data)
                    console.log('login', this.state.hasGetInfo)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 获取年度账单数据
        getAnnualData({ commit }, account) {
            return new Promise((resolve, reject) => {
                getAnnualReport(account).then(res => {
                    console.log('annual', res)
                    commit('SET_ANNUAL', res.data)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 登出
        Logout ({ commit }) {
            commit('RESET_INFO')
            /*return new Promise((resolve) => {
                logout().then(() => {
                    commit('RESET_INFO')
                    resolve()
                }).catch(() => {
                    commit('RESET_INFO')
                    resolve()
                })
            })*/
        },

    }
})

export default store
