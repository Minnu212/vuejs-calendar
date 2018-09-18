import Vue from 'vue'
import './style.scss'
import App from './components/App.vue'
import moment from 'moment-timezone'
import store from './store'
moment.tz.setDefault('IST')

Object.defineProperty(Vue.prototype,
    '$moment', {
        get() {
            return this.$root.moment
        }
    })

let events = window.__INITIAL_STATE__.map(event => {
    return {
        discription: event.discription,
        date: momonet(event.date)
    }
})
let initialState = Object.assign({}, store.state, {
    events
})
store.replaceState(initialState)

new Vue({
    el: '#app',
    data: {
        moment
    },
    components: {
        App
    },
    store
});