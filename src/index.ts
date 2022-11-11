import advert from './api/advert'
import home from './api/home'
import gmb from './api/gmb'

import Generatechartsadv from './Generatechartsadv'

window.addEventListener('DOMContentLoaded', () => {
  const chartAdvert = new Generatechartsadv(advert, 'chart-card');
  const chartHome = new Generatechartsadv(home, 'chart-card');
  const chartGmb = new Generatechartsadv(gmb, 'chart-card');
  setTimeout(() => {
    chartAdvert.init()
  }, 1000)
  setTimeout(() => {
    chartHome.init()
  }, 2000)
  setTimeout(() => {
    chartGmb.init()
  }, 3000)
})
