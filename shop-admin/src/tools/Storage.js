import { createStore } from "vuex";

const Store = createStore ({
    state() {
        return {
            userName: '',
            userPassword: ''
        }
    },
    getters: {
        isLogin: (state) => {
            return state.userName.length>0 && state.userPassword.length>0
        }
    }
})

export default Store;