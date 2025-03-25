// Types
export interface ProjectItemType {
  id: string
  name: string
  description: string
  fullDescription?: string
  link?: { href: string; label: string }
  tags: string[]
  images?: string[]
  features?: string[]
  benefits?: string[]
  drawbacks?: string[]
  challenges?: string[]
  workingExample?: string[]
  keyFindings?: string[]
  technologies?: string[]
  researchAndMarket?: string[]
  technicalArchitecture?: string[]
  keyFeatures?: string[]
  implementationAndUX?: string[]
  futureEnhancements?: string[]
}

export interface ActivityItemType {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards - Temporarily Hidden
/*
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Outstanding Teacher Award',
    description: '',
    date: '2024',
    location: 'SCLS, Shanghai',
  },
  {
    name: 'Zhui Ying Award',
    description: '',
    date: '2023',
    location: 'Qingpu, Shanghai',
  },
]
*/

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    id: 'capstone-project',
    name: 'Personality Assessment Model Project',
    description: 'Project Sponsor: Mariana Ferrari, Dooit (AI-driven talent management company)',
    fullDescription: 'This proposal outlines the development of an AI-powered personality assessment tool designed to enhance HR decision-making. Traditional personality assessments are often time-consuming and subject to human bias. Our solution integrates advanced machine learning models with modern UI/UX principles to streamline the evaluation process. Over the past eight weeks, we have conducted extensive research, gathered user feedback, and implemented AI-driven text extraction and analysis using Florence-2, Optical Character Recognition (OCR), and the Deepseek API. The expected impact of this solution is improved efficiency, accuracy, and user experience in HR assessments. This report details our methodology, technical implementation, challenges, and key insights gained from the project.',
    link: { href: 'scls-cs.com', label: 'View Project' },
    tags: ['AI-powered Personality Assessment', 'HR Tech', 'Talent Management', 'DeepSeek API', 'Big Five Personality Model', 'Automated Insights'],
    researchAndMarket: [
      'We identified a clear gap in the HR tech space: traditional personality assessments are manual, slow, and subjective. Through market analysis and user interviews, we found that HR professionals need a faster, more reliable solution. Our tool automates analysis using advanced AI models to deliver real-time, data-backed personality insights.'
    ],
    technicalArchitecture: [
      'Frontend: React.js, with a simple UI for uploading assessments and viewing results.',
      'Backend: Python-based pipeline that handles OCR (using Florence-2), text preprocessing, and calls to the DeepSeek API for Big Five personality trait analysis.',
      'Cloud Infrastructure: Hosted on AWS using EC2, S3, and RDS with a strong focus on data security and scalability.'
    ],
    keyFeatures: [
      'Automated PDF Processing: Upload personality assessments and extract data using OCR.',
      'AI-Powered Trait Analysis: Identify Big Five personality traits with DeepSeek API.',
      'Interactive Manager Dashboard: View insights via charts and structured summaries.',
      'Employee Test Platform: For users who haven’t taken prior assessments.'
    ],
    implementationAndUX: [
      'We developed an intuitive interface that simplifies the process for non-technical HR users. User feedback led us to improve the flow: after employees complete their tests, results are hidden from them and visible only to managers via a secure dashboard.'
    ],
    futureEnhancements: [
      'Improve processing logic for faster PDF reading and deeper keyword extraction.',
      'Refine frontend UI to better match UX design specifications.',
      'Implement real-time monitoring and automated scaling with AWS CloudWatch.'
    ],
    technologies: ['Python', 'JavaScript', 'VS Code', 'Figma', 'RESTful API', 'DeepSeek API', 'AWS']
  },
  {
    id: 'movie-data-analytics',
    name: 'Movie Data Analytics',
    description: 'Cloud Analytics',
    fullDescription: 'In this project, we chose to use Amazon Athena and QuickSight as the main technologies to perform large-scale movie data analysis from the IMDb dataset. Our goal was to explore patterns in movie ratings, genres, directors, and production timelines using a serverless and scalable solution. We selected Athena because it allowed us to query data directly from Amazon S3 without building a complicated ETL pipeline. This greatly simplified the data transformation process and significantly reduced setup time. With Athena’s pay-per-query model, we were also able to control costs effectively. Additionally, QuickSight was chosen for data visualization due to its seamless integration with Athena, allowing us to create interactive dashboards in real-time.',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: 'View Project' },
    tags: ['Cloud-Based Data Analytics', 'AWS Athena & QuickSight', 'Movie Industry Insights', 'Genre & Rating Analysis', 'SQL-Driven Analysis'],
    benefits: [
      'Athena offers a flexible, SQL-based interface over raw data in S3, with no need to provision infrastructure. Combined with QuickSight, it provides a lightweight BI environment that is cost-efficient and fast to deploy.'
    ],
    drawbacks: [
      'Athena has limitations when dealing with very large joins or unoptimized queries. Its performance can degrade with complex operations, and QuickSight dashboards may incur higher latency and costs if not designed carefully.'
    ],
    challenges: [
      'We encountered difficulties handling incremental data updates and optimizing query performance, especially with large joins. Managing data types and structures (e.g., nested arrays in genres) also required careful processing during table creation.'
    ],
    workingExample: [
      'We uploaded raw IMDb .tsv files to S3 and used Athena to define external tables over them. From there, we created multiple analytical views such as top-rated directors, genre distributions, and rating trends over the years. These views were connected to QuickSight for visual storytelling and insight discovery.'
    ],
    keyFindings: [
      'One of the most interesting insights we found was that directors who produce a moderate number of movies tend to receive higher average ratings, while those who direct an excessive number often see a decline in quality, as reflected in viewer scores. Additionally, genres like Family, Fantasy, and War tend to be rated higher on average compared to more frequent genres like Talk-Show or News.'
    ],
    technologies: ['Amazon S3', 'Amazon Athena', 'Amazon QuickSight']
  },
  {
    id: 'face-anti-spoofing',
    name: 'Face Anti-Spoofing',
    description: 'A deep learning-based system for detecting face liveness to prevent spoofing attacks in online environments.',
    fullDescription: 'This project focuses on the design and implementation of a Face Liveness Detection System using CNN (Convolutional Neural Networks) and the CelebA-Spoof dataset. The system aims to distinguish between real human faces and spoofing attempts such as photos, videos, or masks. It is especially tailored for online education scenarios where identity verification is critical. The system supports both real-time liveness detection through a webcam and detection on static images. Key components include data preprocessing, CNN training and testing, UI design using PySide2, and integration with image capture tools. The system achieves a recognition accuracy above 70% on public datasets, meeting functional and performance requirements.',
    link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: 'View Project' },
    tags: ['Face Recognition', 'Liveness Detection', 'Anti-Spoofing', 'Computer Vision', 'Deep Learning', 'CNN', 'Image Processing', 'Real-time Detection', 'Python'],
    features: [
      'Real-time face liveness detection',
      'Static image analysis',
      'CNN-based deep learning model',
      'User-friendly PySide2 interface',
      'High accuracy on public datasets'
    ],
    technologies: ['Python', 'TensorFlow/Keras', 'PySide2', 'NumPy/OpenCV', 'CelebA-Spoof Dataset']
  },
  {
    id: 'pifa-design',
    name: 'Design of PIFA (Planar Inverted F-shaped Antenna)',
    description: 'Designed and simulated a Bluetooth-band PIFA antenna using CST Microwave Studio, achieving optimized frequency response and impedance matching.',
    fullDescription: 'As part of an antenna design project under the guidance of Professor Gao Ju, I researched and analyzed the structure and electromagnetic behavior of Planar Inverted F-shaped Antennas (PIFA), widely used in mobile communications. I designed and simulated a single-frequency PIFA model in CST Microwave Studio targeting the Bluetooth frequency band. The final design achieved a center frequency of 2.45 GHz, return loss below -10 dB within the Bluetooth band, and input impedance matched to 50Ω — ensuring efficient performance for wireless applications. The project involved parameter sweeps and analysis of structural effects on resonant frequency.',
    link: { href: '#', label: 'View Details' },
    tags: ['Antenna Design', 'RF Engineering', 'Electromagnetics', 'Electromagnetic', 'CST Simulation'],
    features: [
      'Researched and analyzed the characteristics and structure of PIFA, a mainstream mobile phone antenna',
      'Adopted CST Microwave Studio to simulate a single-frequency PIFA antenna model, and analyzed the influence of the working frequency of related parameters',
      'Designed a PIFA applicable within the Bluetooth frequency band, whose center frequency is 2.45Ghz, the return loss in the Bluetooth band is less than -10dB, and the input impedance of the antenna is 50Ω'
    ],
    technologies: ['CST Microwave Studio', 'RF and Microwave Engineering Principles', 'Signal Processing', 'Frequency Domain Analysis']
  }
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Campus Experiences"
export const activitiesIntro = "Student Union events I organized/participated in during university."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Night Running Activity',
    description:
      'Designed the running route to make it fun enough to attract participants. ' +
      'Collected and recorded participants information. ' +
      'Distributed relevant props to participants and maintained the order during the activity.',
    date: '04/2019',
    location: 'Beijing University of Technology',
  },
  {
    name: 'Basketball/Badminton Matches',
    description:
      'Host/Referee/Scorekeeper of the University-level Athletics Activities. ' +
      'Acted as host of Basketball Games, designing the talk and interaction sections and reacting to audience questions and requirements calmly and flexibly. ' +
      'Played the roles of referee and scorekeeper for several times: made arrangements, maintained fairness and order in all matches, and completed all the tasks excellently.',
    date: '10/2018 \u2013 05/2019',
    location: 'Beijing University of Technology',
  },
  /*
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },*/
]
