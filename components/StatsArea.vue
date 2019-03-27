<template>
  <div>
    <div class="container">
      <div
        :class="{ 'visible': hasData }"
        class="absolute"
      >
        <div class="about-description stats-data" >
          <p>I <em>try</em> to balance my work and personal life but the line often gets blurry.</p>
          
          <p>Here are some stats for the past 7 days:</p>
          
          <p>Total screen time: {{ formatTime(totalTime) }}</p>
          <small v-html="languages" />
        </div>
      </div>
    </div>

    
    <div class="chart-wrapper">
      <apexchart
        v-if="hasData"
        type="area"
        :options="chartOptions"
        :series="series"
        height="250"
      />
    </div>

    <div class="bg-white">
      <div class="container">
        <h1 class="headline">FAQs</h1>
        
        <div class="about-description mb">
          <h3>What's your daily stack?</h3>
          <p>Javascript: Nuxt.js/Vue.js &amp; Node.js; MongoDB; TailwindCSS &amp; SCSS.
          </p>
        </div>

        <div class="about-description mb">
          <h3>What else?</h3>
          <p>Bootstrap (3, 4, bootstrap-vue), Foundation, Bulma; Also Meteor.js &amp; ElectronJs; Some rusty Python &amp; Django knowledge.</p>
        </div>

        <div class="about-description mb">
          <h3>DevOps / Tools?</h3>
          <p>Digital Ocean &amp; Netlify –– no AWS (yet). I can do Docker but don't use it frequently. For logs/monitoring, usually go for Datadog &amp; Rollbar. Repos are either on GitHub or GitLab. BitBucket is fine too.</p>
        </div>

        <div class="about-description mb">
          <h3>Unit Tests?</h3>
          <p>Unfortunately not as much as I should. Depends on the project's timeline &amp; requirements.</p>
        </div>

        <div class="about-description mb">
          <h3>Communication / Management</h3>
          <p>I've used plenty but Slack, Skype &amp; Email are the most common.<br>For project management/control usually Trello &amp; Jira. My fallback is Notion when no tool is mandatory.</p>
        </div>

        <div class="about-description mb">
          <h3>Where are you based?</h3>
          <p>
              <a
                href="https://goo.gl/maps/YJoJtbXKZtP2"
                target="_blank"
                class="about-link"
              >Faro, Portugal
              </a>: Western European Time, UTC+0.<br>Compare the timezone difference to other countries <a
                href="https://www.timeanddate.com/worldclock/converter.html?iso=20190326T120000&p1=240&p2=236&p3=37&p4=133&p5=136&p6=179&p7=224"
                target="_blank"
                class="about-link"
              >here</a>.
            </p>
        </div>

        <div class="about-description mb">
          <h3>Social profiles?</h3>
          <p>Mainly
            <span class="flex">
              <a
                href="https://www.linkedin.com/in/lawrencebraun/"
                target="_blank"
                class="about-link"
              >LinkedIn</a>,
              <a
                href="https://www.instagram.com/mstrlaw/"
                target="_blank"
                class="about-link"
              >Instagram</a>,
              <a
                href="https://twitter.com/mstrlaw"
                target="_blank"
                class="about-link"
              >Twitter</a>,
              <a
                href="https://medium.com/@mstrlaw"
                target="_blank"
                class="about-link"
              >Medium</a>,
              <a
                href="https://www.facebook.com/mstrlaw"
                target="_blank"
                class="about-link"
              >Facebook</a>,
              <a
                href="https://github.com/mstrlaw"
                target="_blank"
                class="about-link"
              >GitHub</a> &amp;
              <a
                href="https://gitlab.com/mstrlaw"
                target="_blank"
                class="about-link"
              >GitLab</a>.
            </span>
            <br>Besides these you may find me on other places using the handle <em>@mstrlaw</em>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  const languageEndpoint = 'https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@mstrlaw/53b23607-58e6-43bd-827e-d76a6a0b4354.json'

  const timeEndpoint = 'https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@mstrlaw/4e394a3c-8d3f-449f-b686-1b0241124e2d.json'

  const _tooltipFormatter = function({series, seriesIndex, dataPointIndex, w}) {

    let serie = w.config.series[seriesIndex]
    let label = serie.labels[dataPointIndex]
    let value = serie.formattedData[dataPointIndex]

    return `<div class="custom-tooltip"><div class="tooltip-inner"><span class="label">${ label }</span>: ${ value }</div></div>`
  }

  export default {
    name: 'StatsArea',
    data() {
      return {
        hasData: false,
        totalTime: 0,
        chartOptions: {
          chart: {
            type: 'area',
            sparkline: {
              enabled: true
             },
            toolbar: {
              show: false,
            }
          },
          stroke: {
            width: 0,
            curve: 'smooth',
            colors: ['#707577']
          },
          grid: {
            padding: {
              left: 0,
              right: 0
            }
          },
          yaxis: {
            min: 0
          },
          fill: {
            colors: ['#707577', '#FFF'],
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          markers: {
            size: 0,
            colors: ['#ee003c']
          },
          tooltip: {
            custom: _tooltipFormatter,
            marker: {
              show: false
            },
            y: {
              show: false,
            }
          }
        },
        series: [],
        languageData: []
      }
    },
    mounted() {
      this.getActivity()
      this.getLanguages()
    },
    computed: {
      languages() {
        if (this.languageData.length > 0) {
          let stats = []
          this.languageData.map( data => {
            stats.push(`<span>${ data.name } - ${ data.percent }%</span>`)
          })
          return 'Tools: ' + stats.join(', ')
        }
      }
    },
    methods: {
      getActivity() {
        this.$axios
          .get(timeEndpoint)
          .then( res => {
            
            if (res.data.data.length > 0) {
              let tmp = []
              let data = []
              let labels = []
              let formattedData = []

              res.data.data.map( d => {
                tmp.push({
                  date: moment(d.range.start).unix() * 1000,
                  formatted: moment(moment(d.range.start).unix() * 1000).format('ddd, DD MMM'),
                  data: d.grand_total.total_seconds,
                  formattedData: this.formatTime(d.grand_total.total_seconds),
                })

                this.totalTime += d.grand_total.total_seconds
              })

              tmp = tmp.sort( (a,b) => { return a.date - b.date })

              tmp.map( el => {
                data.push(el.data)
                labels.push(el.formatted)
                formattedData.push(el.formattedData)
              })

              this.series = [{
                data: data,
                labels: labels,
                formattedData: formattedData
              }]

              this.hasData = true

            }
          })
          .catch(err => {
            console.log('Unable to fetch Wakatime data')
            console.log(err)
          })
      },
      getLanguages() {
        this.$axios
          .get(languageEndpoint)
          .then( res => {
            
            if (res.data.data.length > 0) {
              this.languageData = res.data.data
            }
          })
          .catch(err => {
            console.log('Unable to fetch Wakatime data')
            console.log(err)
          })
      },
      formatTime(time) {
        let t = moment.duration(time, 'seconds')

        if (t.asHours() >= 1) {
          return `${ Math.floor(t.asHours()) }h  ${ t.minutes() }m`
        } else if (t.asMinutes() >= 1) {
          return `${ Math.round(t.asMinutes()) }m  ${ Math.floor(t.seconds()) }s`
        } else if (t.asSeconds() >= 1) {
          return `${ Math.floor(t.seconds()) }s`
        } else {
          return `0`
        }
      }
    }
  }
</script>


<style lang="scss">
  @import "@/assets/imports/_variables.scss";

  .bg-white {
    background: #FFF;
  }

  .source {
    color: #FFF;
  }

  .absolute {
    position: absolute;
    margin-top: -50px;
    opacity: 0;
    z-index: 1;
    &.visible {
      opacity: 1;
      transition: opacity .5s;
    }
  }

  .stats-data {
    p {
      margin-bottom: 10px;
      
      &:nth-of-type(n+2) {
        margin-bottom: 0px;
      }
    }
  }

  .mb {
    margin-bottom: 50px;
  }

  .chart-wrapper {
    // position: absolute;
    // margin-top: -50px;
    // background: #283439;
    // width: 100%;

    &:after {
      display: none;
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      bottom: 0;
      background: white;
      @media #{$small} {
        display: block;
      }
    }
    > div {
      margin-top: -150px;
      z-index: -1;
      @media #{$small} {
        margin-top: -50px;
      }
    }
  }

  .tooltip-inner {
    padding: 10px 15px;
    .label {
      font-weight: bold;
    }
  }
</style>
