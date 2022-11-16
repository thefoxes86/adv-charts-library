import advert from './api/advert'
import advert2 from './api/advert2'
import home from './api/home'
import gmb from './api/gmb'
import header from './api/header'
import header2 from './api/header2'
import Generatechartsadv from '../src/Generatechartsadv.ts'
import headerReload from './api/header-reload'

window.addEventListener('DOMContentLoaded', () => {
  const chart = new Generatechartsadv()
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
    chart.init(header)
  }, 1000)

  setTimeout(() => {
    chart.reload(headerReload)
  }, 4000)

  setTimeout(() => {
    // result
    chart.init(header2)
  }, 5000)
})
