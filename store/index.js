import Vuex from 'vuex'

const applicationStore = () => {

  return new Vuex.Store({
    state: {
      displaySocial: false
    },
    mutations:{
      setSocial(state, value){ state.displaySocial = value }
    },
    actions:{
      toggleSocial({ commit }, value){
        console.log(value)
        commit('setSocial', value)
      }
    },
    getters:{
      showSocialMenu: (state) => { return state.displaySocial }
    }
  })

}

export default applicationStore
