import advert from './api/advert'
import advert2 from './api/advert2'
import home from './api/home'
import gmb from './api/gmb'
import gmb2 from './api/gmb2'
import header from './api/header'
import header2 from './api/header2'
import Generatechartsadv from '../src/Generatechartsadv.ts'
import headerReload from './api/header-reload'
import headerSummary from './api/headerSummary'
import headerSummary2 from './api/headerSummary2'
import headerSummary3 from './api/headerSummary3'

window.addEventListener('DOMContentLoaded', () => {
  const chart = new Generatechartsadv()
  const type2 = new Generatechartsadv()
  const type2_copy = new Generatechartsadv()
  setTimeout(() => {
    // result
    chart.init(advert)
  }, 1000)

  setTimeout(() => {
    // result
    chart.reload(advert2)
  }, 4000)

  setTimeout(() => {
    chart.init(home)
  }, 2000)
  setTimeout(() => {
    chart.init(gmb)
  }, 3000)

  setTimeout(() => {
    // result
    chart.init(headerSummary)
    type2.init(header)
  }, 1000)

  setTimeout(() => {
    chart.reload(headerSummary2)
  }, 3000)

  setTimeout(() => {
    chart.reload(headerSummary3)
  }, 5000)

  setTimeout(() => {
    // result
    type2_copy.init(header2)
    chart.reload(gmb2)
  }, 5000)
})
