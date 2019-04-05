import Cookie from 'js-cookie'

export default async function ({ isServer, store}) {

  if (!isServer) {
    let ack = Cookie.get('mstrlaw')

    console.log(ack)

    if (typeof ack !== 'undefined') {
      store.commit('SET_COOKIE_CONSENT')
    }
  }

}

