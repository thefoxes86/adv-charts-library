import { CountUp } from 'countup.js'

interface ObjAdv {
  result: string
  valueLabels: string[]
  realValues: string[] | number[]
  percValues: string[] | number[]
  type: string
  valueColors: string[]
  labels: string[]
}
class Generatechartsadv {
  objAdv!: ObjAdv;
  chartCard: NodeListOf<Element>;
  typedCard!: Element[];
  header!: Element;
  circle!: HTMLInputElement | HTMLBaseElement | any;
  percValue!: any;
  contentRow!: Element[];
  barContent!: Element | any;
  percValueText: any;
  textValue: any;
  update: boolean;
  setLoading: boolean;

  constructor(){
    this.chartCard =  document.querySelectorAll(`.chart-card`)
    this.update = false
    this.setLoading = true
  }

  loading(loading: boolean, el?: HTMLElement | any){
    this.setLoading = loading 
    el.classList.contains('loading') ? el.classList.remove('loading') : null
  }

  init(obj: ObjAdv){
    this.objAdv = obj;
    this.typedCard = (this.chartCard as any | Element[]).filter(
      (elem: any)  => elem.dataset['type'] === obj.type
    ) 

    this.iterateMainElement(this.typedCard)
  }

  reload(obj: ObjAdv) {
    this.update = true;
    this.init(obj);
  }

  iterateMainElement(cards: Element[]){
    cards.forEach((el:any, index:number)=>{
      this.header = el.querySelector('.chart-card__header')

      this.loading(false, el)

      this.circle = el.querySelector('.circle-chart__circle')

      let status = this.objAdv.percValues[this.objAdv.percValues.length - 1] >= 0 && this.objAdv.percValues[this.objAdv.percValues.length - 1] < 33 ? 'red' : this.objAdv.percValues[this.objAdv.percValues.length - 1] >= 33 && this.objAdv.percValues[this.objAdv.percValues.length - 1] < 66 ? 'orange' : 'green'


      this.header.classList.add(
        status
      )

      this.circle.style['stroke-dasharray'] = `${
        this.objAdv.percValues[this.objAdv.percValues.length - 1]
      } 100`

      let previousPercValue = document.getElementById(`mainValuePerc-${this.objAdv.type}-${index}`)
      let value = `${this.objAdv.realValues[this.objAdv.realValues.length -1]}${this.objAdv.valueLabels[this.objAdv.valueLabels.length - 1]}`
  
      if (previousPercValue?.innerHTML !== value) {
        this.percValue = new CountUp(
          `mainValuePerc-${this.objAdv.type}-${index}`,
          this.objAdv.realValues[this.objAdv.realValues.length - 1] as number,
          {
            suffix:
            this.objAdv.valueLabels[this.objAdv.valueLabels.length - 1],
          }
          )
          if (this.update) { 
            this.percValue.update(this.objAdv.realValues[this.objAdv.realValues.length - 1])
          } else {
            this.percValue.start()
          }
        } 
          
      this.contentRow = [...el.querySelectorAll('.content__row')]

      this.iterateRow(this.contentRow, index)

      el.classList.add('active')
    })
  }

  iterateRow(contentRow: Element[], index: number){
    contentRow.forEach((row, indexRow) => {
      this.barContent = row.querySelector('.bar__content')
      let status = this.objAdv.percValues[indexRow] >= 0 && this.objAdv.percValues[indexRow] < 33 ? 'red' : this.objAdv.percValues[indexRow] >= 33 && this.objAdv.percValues[indexRow] < 66 ? 'orange' : 'green'
      
      this.barContent.classList.contains('red') && this.barContent.classList.remove('red')
      this.barContent.classList.contains('orange') && this.barContent.classList.remove('orange')
      this.barContent.classList.contains('green') && this.barContent.classList.remove('green')
      
      this.barContent.classList.add(status)
      this.barContent.style.width = `${this.objAdv.percValues[indexRow]}%`
      let previousValue = document.getElementById(`perc-value-${this.objAdv.type}-${index}-row-${indexRow}`)

      if (previousValue?.innerHTML !==  `${this.objAdv.realValues[indexRow]}${this.objAdv.valueLabels[indexRow]}`) {

        this.percValueText = new CountUp(
          `perc-value-${this.objAdv.type}-${index}-row-${indexRow}`,
          this.objAdv.realValues[indexRow] as number,
          {
            suffix: this.objAdv.valueLabels[indexRow],
          }
          )
          if (this.update) {
            
            this.percValueText.update(this.objAdv.realValues[indexRow])
          } else {

            this.percValueText.start()
          }
        }

      this.textValue = document.getElementById(
        `perc-value-${this.objAdv.type}-${index}-row-${indexRow}`
        )

        this.textValue.classList.contains('red-text') && this.textValue.classList.remove('red-text')
        this.textValue.classList.contains('orange-text') && this.textValue.classList.remove('orange-text')
        this.textValue.classList.contains('green-text') && this.textValue.classList.remove('green-text')
       
        this.textValue.classList.add(`${status}-text`)
      })
    }
  }

  
  var globalThis: any;
  globalThis.Generatechartsadv = Generatechartsadv
  

  export default Generatechartsadv
