import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
import axios from 'axios'
import {
    resolve
} from 'path';
import {
    rejects
} from 'assert';
moment.tz.setDefault('IST')
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentMonth: 9,
        currentYear: 2018,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        eventFormDate: moment(),
        events: []
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x
            state.eventFormPosY = payload.y
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload
        },
        addEvent(state, payload) {
            state.events.push(payload)
        }
    },
    actions: {
        addEvent(context, payload) {
            return new Promise((resolve, rejects) => {
                event = {
                    description: payload,
                    date: context.state.eventFormDate
                }
                axios.post('/add_event', event).then(response => {
                    if (response.status === 200) {
                        context.commit('addEvent', event)
                        resolve()
                    } else {
                        rejects()
                    }
                })
            })
        }
    }
})