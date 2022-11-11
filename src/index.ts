import advert from './api/advert'
import advert2 from './api/advert2'
import home from './api/home'
import gmb from './api/gmb'
import Generatechartsadv from './Generatechartsadv'

window.addEventListener('DOMContentLoaded', () => {
  const chartAdvert = new Generatechartsadv('chart-card');
  const chartHome = new Generatechartsadv( 'chart-card');
  const chartGmb = new Generatechartsadv( 'chart-card');
  setTimeout(() => {
    // result
    chartAdvert.init(advert)
  }, 1000)

  setTimeout(() => {
    // result
    chartAdvert.init(advert2)
  }, 4000)
  setTimeout(() => {
    chartHome.init(home)
  }, 2000)
  setTimeout(() => {
    chartGmb.init(gmb)
  }, 3000)
})
