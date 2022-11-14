import advert from './api/advert'
import advert2 from './api/advert2'
import home from './api/home'
import gmb from './api/gmb'
import type4 from './api/type4'
import Generatechartsadv from './Generatechartsadv'

window.addEventListener('DOMContentLoaded', () => {
  const chart = new Generatechartsadv();
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
    chart.reload(type4)
  }, 4000)
})
