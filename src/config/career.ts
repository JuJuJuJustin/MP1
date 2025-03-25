// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'Beijing Institute of Metrology',
      title: 'Computer Science Teacher',
      logo: 'coffee',
      start: '2021.7',
      end: '2023.9'
    },
    /*{
      company: 'Bigo Live',
      title: 'US Operations',
      logo: 'college',
      start: '2018',
      end: '2020'
    },
    {
      company: 'Sinovation Ventures',
      title: 'Investment Analyst',
      logo: 'bank',
      start: '2017',
      end: '2018'
    },
    {
      company: 'Expedia',
      title: 'Software Engineer', 
      logo: 'coffee',
      start: '2015',
      end: '2017'
    }*/
  ]