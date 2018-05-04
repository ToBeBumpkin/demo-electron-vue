const state = {
    isExist:null,
    rootPath:null
}


const actions = {
    getInfo:(context,params) => {
        let localStorageIsExist = localStorage.getItem('isExist')
        let localStorageRootPath = localStorage.getItem('rootPath')
        if (localStorageIsExist){
            context.commit('SETISEXIST', localStorageIsExist)
            context.commit('SETROOTPATH', localStorageRootPath)
        }else{
            context.commit('SETISEXIST', null)
            context.commit('SETROOTPATH', null)
            localStorage.removeItem('isExist')
            localStorage.removeItem('rootPath')
        }
    }
}

const mutations = {
    SETISEXIST:(state,payload) => {
        state.isExist = payload
        payload ? localStorage.setItem('isExist',payload) : localStorage.removeItem('isExist')
    },
    SETROOTPATH:(state,payload) => {
        state.rootPath = payload
        payload ? localStorage.setItem('rootPath',payload) : localStorage.removeItem('rootPath')
    },
}


export default {
    state,
    mutations,
    actions
}