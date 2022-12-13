import { CountUp } from 'countup.js'
import animateBullets from './utils/animateBullets'

interface ObjAdv {
  result: string
  valueLabels: string[]
  realValues: string[] | number[]
  percValues: string[] | number[]
  type: string
  valueColors: string[]
  labels: string[]
  valueRangeColors: number[]
  format: string
  overrideDefaultColors: boolean
}
class Generatechartsadv {
  objAdv!: ObjAdv;
  chartCard: Element[];
  typedCard!: Element[];
  header!: Element;
  circle!: HTMLInputElement | HTMLBaseElement | any;
  percValue!: [];
  contentRow!: Element[];
  barContent!: Element | any;
  percValueText: [];
  textValue: any;
  update: boolean;
  setLoading: boolean;
  titlePercValue!: [];
  precValueHeaderTitleValue: number | null;
  bullet!: any;
  rowType!: any;
  headerTextValue!: HTMLElement;
  previousValue: number | null;
  numberStars!: number;
  isReviewPresent: boolean;


  constructor(){
    // @ts-ignore
    this.chartCard =  [...document.querySelectorAll(`.chart-card`)] 
    this.update = false
    this.setLoading = true
    this.percValueText = []
    this.percValue= []
    this.titlePercValue = []
    this.precValueHeaderTitleValue = null
    this.previousValue = null
    this.isReviewPresent = false
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
    
      // HEADER TYPE 1
      if (this.objAdv.format === 'type1') {
        var status = this.objAdv.percValues[this.objAdv.percValues.length - 1] >= 0 && this.objAdv.percValues[this.objAdv.percValues.length - 1] < this.objAdv.valueRangeColors[0] ? 'red' : this.objAdv.percValues[this.objAdv.percValues.length - 1] >= this.objAdv.valueRangeColors[0] && this.objAdv.percValues[this.objAdv.percValues.length - 1] < this.objAdv.valueRangeColors[1] ? 'orange' : 'green'
        this.circle = el.querySelector('.circle-chart__circle')
        
        if (this.header) {
          
          this.header.classList.contains('red') && this.header.classList.remove('red')
          this.header.classList.contains('orange') && this.header.classList.remove('orange')
          this.header.classList.contains('green') && this.header.classList.remove('green')
          
          this.header.classList.add(status)
          }
          
          this.circle.style['stroke-dasharray'] = `${
            this.objAdv.percValues[this.objAdv.percValues.length - 1]
          } 100`
          
          let previousPercValue = document.getElementById(`mainValuePerc-${this.objAdv.type}-${index}`)
          let value = `${this.objAdv.realValues[this.objAdv.realValues.length -1]}${this.objAdv.valueLabels[this.objAdv.valueLabels.length - 1]}`
          
          
          
          if (previousPercValue?.innerHTML !== value) {
            
            if (this.update) { 
              // @ts-ignore
              let updateCound: {id: string, data: any} = this.percValue.find((element:{id: string, data: any})  => element.id === this.objAdv.type)

              updateCound?.data?.update(this.objAdv.realValues[this.objAdv.realValues.length - 1])

              } else {
                let checkDecimals = (this.objAdv.realValues[this.objAdv.realValues.length - 1] as number - Math.floor(this.objAdv.realValues[this.objAdv.realValues.length - 1] as number)) !== 0
                if (this.objAdv.realValues[this.objAdv.realValues.length - 1] === 'nd' || this.objAdv.realValues[this.objAdv.realValues.length - 1] === null) {
                  let ndString: InputEvent | any =  document.getElementById(`mainValuePerc-${this.objAdv.type}-${index}`)
                  ndString.innerHTML = 'N.d.'
              } else {
                
                let initTitleCount = new CountUp(
                  `mainValuePerc-${this.objAdv.type}-${index}`,
                  this.objAdv.realValues[this.objAdv.realValues.length - 1] as number,
                  {
                    suffix:
                    this.objAdv.valueLabels[this.objAdv.valueLabels.length - 1],
                    decimalPlaces: checkDecimals ? 1 : 0 ,
                    decimal: ',',
                    separator: '.'
                  }
                  )
                  // @ts-ignore
                  this.percValue.push({id: this.objAdv.type ,data: initTitleCount})
               
                  initTitleCount.start()
                }
              }
            } 
          }
      // HEADER TYPE 2
      if (this.objAdv.format === 'type2') {
        var status = this.objAdv.percValues[this.objAdv.percValues.length - 1] >= 0 && this.objAdv.percValues[this.objAdv.percValues.length - 1] < this.objAdv.valueRangeColors[0] ? 'red' : this.objAdv.percValues[this.objAdv.percValues.length - 1] >= this.objAdv.valueRangeColors[0] && this.objAdv.percValues[this.objAdv.percValues.length - 1] < this.objAdv.valueRangeColors[1] ? 'orange' : 'green'
        this.rowType = document.querySelector(`[data-type=${this.objAdv.type}]`)
        this.bullet = this.rowType.querySelectorAll('.overlay__full')
        let valuePerc = this.objAdv.percValues[this.objAdv.percValues.length - 1] as number
        this.previousValue = this.previousValue === null ? this.objAdv.percValues[this.objAdv.percValues.length - 1] as number :  this.previousValue


        this.loading(false, this.rowType)

          
          this.bullet.forEach((el: any)=>{
            el.style.background = `${status}`
          })

          if (this.previousValue > valuePerc) {

            animateBullets(this.bullet, valuePerc, this.previousValue)
            this.previousValue = null
          } else {
            animateBullets(this.bullet, valuePerc, this.previousValue)
          }
        
        
          
          if (this.update) { 

             
             let updateCound: {id: string, data: any} = this.titlePercValue.find((element:{id: string, data: any})  => element.id === this.objAdv.type) as any

             updateCound?.data?.update(this.objAdv.realValues[this.objAdv.realValues.length - 1])

             
         
            
          } else {
            let checkDecimals = (this.objAdv.realValues[this.objAdv.realValues.length - 1] as number - Math.floor(this.objAdv.realValues[this.objAdv.realValues.length - 1] as number)) !== 0
            let initTitleCount = new CountUp(
              `perc-title-${this.objAdv.type}`,
              this.objAdv.realValues[this.objAdv.realValues.length - 1] as number,
              {
                suffix: this.objAdv.valueLabels[this.objAdv.valueLabels.length - 1],
                decimalPlaces: checkDecimals ? 1 : 0 ,
                    decimal: ',',
                    separator: '.'
              }
              )
              // @ts-ignore
              this.titlePercValue.push({id: this.objAdv.type ,data: initTitleCount})
              
           
            initTitleCount.start()
            
          }
          this.headerTextValue = document.getElementById(
            `perc-title-${this.objAdv.type}`
            ) as HTMLElement
            if (this.headerTextValue) {
    
              this.headerTextValue.classList.contains('red-text') && this.headerTextValue.classList.remove('red-text')
              this.headerTextValue.classList.contains('orange-text') && this.headerTextValue.classList.remove('orange-text')
              this.headerTextValue.classList.contains('green-text') && this.headerTextValue.classList.remove('green-text')
              
              this.headerTextValue.classList.add(`${status}-text`)
            }
          


      }

      // HEADER TYPE 3
      if (this.objAdv.format === 'type3') {
        var checkStarsReviews = el.querySelector('.reviews_star') as HTMLElement

        if (checkStarsReviews) {
          this.isReviewPresent = true
          this.bullet = document.querySelectorAll('.overlay__full_star')
          let valuePerc = this.objAdv.percValues[index] as number
          this.previousValue = this.previousValue === null ? this.objAdv.percValues[index] as number :  this.previousValue
         
          let numberStars = new CountUp(
            `number_stars`,
            this.objAdv.realValues[0] as number,
            {
              suffix: this.objAdv.valueLabels[0],
              decimalPlaces: 1 ,
              decimal: ',',
              separator: '.'
            }
          )
          numberStars.start()

          let numberReviews = new CountUp(
            `number_reviews`,
            this.objAdv.realValues[1] as number,
            {
              suffix: this.objAdv.valueLabels[1],
              decimalPlaces: 0 ,
              decimal: ',',
              separator: '.'
            }
          )
          numberReviews.start()
          console.log('test', this.bullet, valuePerc)

          if (this.previousValue > valuePerc) {

            animateBullets(this.bullet, valuePerc, this.previousValue)
            this.previousValue = null
          } else {
            animateBullets(this.bullet, valuePerc, this.previousValue)
          }
          
        }
      }

          
      this.contentRow = [...el.querySelectorAll('.content__row')]
      this.iterateRow(this.contentRow, index)

      el.classList.add('active')
    })
  }

  iterateRow(contentRow: Element[], index: number){
    contentRow.forEach((row, indexRow) => {
      let indexRowVar = indexRow
      var status: any = null
      if (this.objAdv.format === 'type1' || this.objAdv.format === 'type2') {
        status = this.objAdv.overrideDefaultColors ? this.objAdv.valueColors[indexRow] : this.objAdv.percValues[indexRow] >= 0 && this.objAdv.percValues[indexRow] < this.objAdv.valueRangeColors[0] ? 'red' : this.objAdv.percValues[indexRow] >= this.objAdv.valueRangeColors[0] && this.objAdv.percValues[indexRow] < this.objAdv.valueRangeColors[1] ? 'orange' : 'green' 
      }
      // ROW TYPE 1
      if (this.objAdv.format === 'type1') {
        this.barContent = row.querySelector('.bar__content')
        if (this.barContent) {
          this.barContent.classList.contains('red') && this.barContent.classList.remove('red')
          this.barContent.classList.contains('orange') && this.barContent.classList.remove('orange')
          this.barContent.classList.contains('green') && this.barContent.classList.remove('green')
          
          this.barContent.classList.add(status)
          this.barContent.style.width = `${this.objAdv.percValues[indexRow]}%`
        }
      }
      
      // ROW TYPE 2
      if (this.objAdv.format === 'type2') {
        let circleResult = row.querySelectorAll('.circle-chart__circle')
        
        circleResult.forEach((circle)=>{
          // @ts-ignore
          circle.style['stroke'] = `${status}`
          // @ts-ignore
          circle.style['stroke-dasharray'] = `${
            this.objAdv.percValues[indexRow]
          } 100`
        })
      }

      // ROW TYPE 3
      if (this.objAdv.format === 'type3') {
        indexRowVar = this.isReviewPresent ?  indexRow + 2 : indexRow
        animateBullets
      }

      let previousValue = document.getElementById(`perc-value-${this.objAdv.type}-${index}-row-${indexRowVar}`)

        if (previousValue?.innerHTML !==  `${this.objAdv.realValues[indexRowVar]}${this.objAdv.valueLabels[indexRowVar]}`) {

        
          
            if (this.update) {
              let updateCount: {id: string, data: any} =  this.percValueText.find((element: {id: string, data: any})=> element.id === `${this.objAdv.type}-${indexRowVar}`) as any
              
              updateCount?.data?.update(this.objAdv.realValues[indexRowVar])

              
              
            } else {
                if (this.objAdv.realValues[indexRowVar] === 'nd' || this.objAdv.realValues[indexRowVar] === null) {
                    let ndString: InputEvent | any =  document.getElementById(`perc-value-${this.objAdv.type}-${index}-row-${indexRow}`)
                    ndString.innerHTML = 'N.d.'
                } else {

                  let initCountJs = new CountUp(
                    `perc-value-${this.objAdv.type}-${index}-row-${indexRow}`,
                    this.objAdv.realValues[indexRowVar] as number,
                    {
                      suffix: this.objAdv.valueLabels[indexRowVar],
                      decimalPlaces: this.objAdv.realValues[indexRowVar] as number % 1 === 0 ||  this.objAdv.realValues[indexRowVar] as number % 2 === 0 ? 0 : 1 ,
                      decimal: ',',
                      separator: '.'
                    }
                    )
                    // @ts-ignore
                    this.percValueText.push({id: `${this.objAdv.type}-${indexRow}` ,data:initCountJs})
                    
                    initCountJs.start()
                  }
                    
            }
          }
          


      this.textValue = document.getElementById(
        `perc-value-${this.objAdv.type}-${index}-row-${indexRow}`
        )
        
        if (this.textValue) {

          this.textValue.classList.contains('red-text') && this.textValue.classList.remove('red-text')
          this.textValue.classList.contains('orange-text') && this.textValue.classList.remove('orange-text')
          this.textValue.classList.contains('green-text') && this.textValue.classList.remove('green-text')
          
          this.textValue.classList.add(`${status}-text`)
        }
      })
    }
  }
 
  
  
  
  
  // @ts-ignore
  globalThis.Generatechartsadv = Generatechartsadv
  
  export default Generatechartsadv