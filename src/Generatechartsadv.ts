// Version 1.0.3

import { CountUp } from 'countup.js'

interface ArrayAdv {
  result: string
  valueLabels: string[]
  realValues: string[] | number[]
  percValues: string[] | number[]
  type: string
  valueColors: string[]
  labels: string[]
}

globalThis.Generatechartsadv = class Generatechartsadv {
  arrayAdv: ArrayAdv[];
  chartCard: Element[];
  typedCard: Element[];
  header!: Element;
  circle!: HTMLInputElement | HTMLBaseElement | any;
  percValue!: any;
  contentRow!: Element[];
  barContent!: Element | any;
  percValueText: any;
  textValue: any;

  constructor(array: ArrayAdv[], className: string){
    this.arrayAdv = array;
    this.chartCard =  [...document.querySelectorAll(`.${className}`)]
    this.typedCard = this.chartCard.filter(
      (elem: any)  => elem.dataset['type'] === array[0].type
    ) 

  

  }

  init(){
    this.iterateMainElement(this.typedCard)
  }

  iterateMainElement(cards: Element[]){
    cards.forEach((el:any, index:number)=>{
      this.header = el.querySelector('.chart-card__header')
      this.circle = el.querySelector('.circle-chart__circle')

      this.header.classList.add(
        this.arrayAdv[index].valueColors[this.arrayAdv[index].valueColors.length - 1]
      )

      this.circle.style['stroke-dasharray'] = `${
        this.arrayAdv[index].percValues[this.arrayAdv[index].percValues.length - 1]
      } 100`

      this.percValue = new CountUp(
        `mainValuePerc-${this.arrayAdv[index].type}-${index}`,
        this.arrayAdv[index].realValues[this.arrayAdv[index].realValues.length - 1],
        {
          suffix:
          this.arrayAdv[index].valueLabels[this.arrayAdv[index].valueLabels.length - 1],
        }
      )

      this.percValue.start()

      this.contentRow = [...el.querySelectorAll('.content__row')]

      this.iterateRow(this.contentRow, index)

      el.classList.add('active')
    })
  }

  iterateRow(contentRow: Element[], index: number){
    contentRow.forEach((row, indexRow) => {
      this.barContent = row.querySelector('.bar__content')
      this.barContent.classList.add(this.arrayAdv[index].valueColors[indexRow])
      this.barContent.style.width = `${this.arrayAdv[index].percValues[indexRow]}%`

      this.percValueText = new CountUp(
        `perc-value-${this.arrayAdv[index].type}-${index}-row-${indexRow}`,
        this.arrayAdv[index].realValues[indexRow],
        {
          suffix: this.arrayAdv[index].valueLabels[indexRow],
        }
      )

      this.percValueText.start()

      this.textValue = document.getElementById(
        `perc-value-${this.arrayAdv[index].type}-${index}-row-${indexRow}`
        )
        this.textValue.classList.add(`${this.arrayAdv[index].valueColors[indexRow]}-text`)
      })
    }
  }

  export default Generatechartsadv

// const generateCharts = array => {
//   if (array?.length > 0) { 
//     let chartCard = [...document.querySelectorAll('.chart-card')]
//     let typedCard = chartCard.filter(
//       elem => elem.dataset['type'] === array[0].type
//     )

//     setTimeout(() => {
//       typedCard.forEach((el, index) => {
        
//         let header = el.querySelector('.chart-card__header')
//         let circle = el.querySelector('.circle-chart__circle')
//         //   let text = el.querySelector('.circle-chart__percent')

//         header.classList.add(
//           array[index].valueColors[array[index].valueColors.length - 1]
//         )

//         circle.style['stroke-dasharray'] = `${
//           array[index].percValues[array[index].percValues.length - 1]
//         } 100`

//         let percValue = new CountUp(
//           `mainValuePerc-${array[index].type}-${index}`,
//           array[index].realValues[array[index].realValues.length - 1],
//           {
//             suffix:
//               array[index].valueLabels[array[index].valueLabels.length - 1],
//           }
//         )

//         percValue.start()

//         let contentRow = [...el.querySelectorAll('.content__row')]

//         contentRow.forEach((row, indexRow) => {
//           let barContent = row.querySelector('.bar__content')
//           barContent.classList.add(array[index].valueColors[indexRow])
//           barContent.style.width = `${array[index].percValues[indexRow]}%`

//           let percValueText = new CountUp(
//             `perc-value-${array[index].type}-${index}-row-${indexRow}`,
//             array[index].realValues[indexRow],
//             {
//               suffix: array[index].valueLabels[indexRow],
//             }
//           )

//           percValueText.start()

//           let textValue = document.getElementById(
//             `perc-value-${array[index].type}-${index}-row-${indexRow}`
//           )
//           textValue.classList.add(`${array[index].valueColors[indexRow]}-text`)
//         })

//         el.classList.add('active')
//       })
//     }, 1000)
//   }
// }

