import store from './store'
import router from './router'


router.beforeEach((to,from,next) => {
    if (to.matched.some(m => m.meta.requireAuth)){
        if (store.state.isExist){
            next()
        }else{
            next({path:'create',query:{Rurl:to.fullPath}})
        }
    }else{
        next()
    }
})


