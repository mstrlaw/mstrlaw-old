import Vue from 'vue'
import Butter from 'buttercms'
const butter = Butter(process.env.CMS_TOKEN)

Vue.use(butter)

export default ({ app }, inject) => {
  
  app.butter = butter
  
}
