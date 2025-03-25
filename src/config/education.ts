
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Beijing University of Technology',
      major: 'Electronic Information Engineering',
      logo: 'college',
      start: '2018',
      end: '2022'
    },
    {
      school: 'Northeastern University',
      major: 'Informatics consentrated in Cloud Computing',
      logo: 'college',
      start: '2023',
      end: '2025'
    },
    /*{
      school: 'BUPT',
      major: 'Automation',
      logo: 'college',
      start: '2009',
      end: '2013'
    }*/
  ]