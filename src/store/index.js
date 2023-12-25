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
                personType: 3
            }
            const annualData = {
                data1: '010101',
                data2: '020202',
                data3: '030303',
                data4: '040404',
                data5: '050505',
                data6: '060606',
                data7: '070707',
                data8: '080808',
                data9: '090909',
                data10: '101010',
                data11: '111111',
                data12: '121212',
                data13: '131313',
                data14: '141414',
                data15: '151515',
                data16: '161616',
                data17: '171717',
                data18: '181818',
                data19: '191919',
                data20: '202020',
                data21: '212121',
                data22: '222222',
                data23: '232323',
                data24: '242424',
                data25: '252525',
                data26: '262626'
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
