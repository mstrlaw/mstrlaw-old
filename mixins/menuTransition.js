const menuTransition = {
  mounted() {
    document.activeElement.blur()
    setTimeout( () => {
      this.$store.commit('SET_MENU_STATE', false)
    }, 250)
  }
}

export { menuTransition }
