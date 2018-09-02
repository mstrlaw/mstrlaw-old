<template>
  <div class="inner-container">
    <h2>Lawrence Braun</h2>
    <div class="about">
      <div class="side">
        <h3>About</h3>
        <p>Swiss born with French &amp; Portuguese nationality, mostly European.</p>
        <p>I have a background in Computer Science as well as Marketing Management.</p>
        
        <h3>What I do</h3>
        <p><b>Build web applications</b> using:</p> 
        <ul>
          <li>Javascript, Node, Vue, Nuxt, Meteor, MongoDB</li>
          <li>CSS3/SCSS, Bootstrap, Foundation, Bulma</li>
          <li>GitHub, GitLab, BitBucket, Trello, Jira, Digital Ocean, Netlify, Datadog, Rollbar, Slack and many more</li>
        </ul>
        <p><b>Provide technical consulting</b> such as:</p> 
        <ul>
          <li>Solving business problems using digital solutions;</li>
          <li>Lead or suport in project or team management;</li>
          <li>Assisting in recruitment of technical candidates;</li>
        </ul>
        <h3>Social Media</h3>
        <div class="social">
          <ul>
            <li><a href="https://www.linkedin.com/in/lawrencebraun/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/mstrlaw" target="_blank">GitHub</a></li>
            <li><a href="https://www.facebook.com/mstrlaw" target="_blank">Facebook</a></li>
            <li><a href="https://medium.com/@mstrlaw" target="_blank">Medium</a></li>
            <li><a href="https://www.instagram.com/mstrlaw/" target="_blank">Instagram</a></li>
            <li><a href="https://twitter.com/mstrlaw" target="_blank">Twitter</a></li>
          </ul>
        </div>
        

      </div>
      <div class="side">
        <div class="image-wrapper">
          <img src="/images/law.jpg" alt="Lawrence">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'About',
  layout: 'minimal',
  head(){
    return{
      titleTemplate: 'About —— mstrlaw.com'
    }
  },
}
</script>
