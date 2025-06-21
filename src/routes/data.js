export const data = {
  introText: `
  <p class="small-body">
    A typical Amsterdam digital design sjoo (show) where education, research and industry meet. 
  </p>
  `,
  courses: [
    {
      name: 'MDD',
      class: 'mdd',
      size: 'span 1',
      color: 'rgba(0, 0, 0, 0.25)',
      modal: {
        title: 'Master Digital Design (MDD)',
        intro: 'On the fourth floor you can find all the end products of the projects of the students of the one-year Master Digital Design (MDD).',
        program_short: `
          <a href="/about/#master-digital-design" class="button">
            Learn more <span class="sr-only">about the Master Digital Design</span>
          </a>
          `
      }
    },
    {
      name: 'FDND',
      class: 'fdnd',
      size: 'span 2',
      color: '#c5aded',
      modal: {
        title: 'Frontend Design and Development (FDND)',
        intro:  'On the fourth floor you can find all the end products of the students of the two-year Associate Degree Frontend Design and Development (FDND).',
        program_short: `
        <a href="/about/#frontend-design-and-development" class="button">
          Learn more <span class="sr-only">about the Frontend Design and Development</span>
        </a>
        `
      }
    },
    {
      name: 'CMD',
      class: 'cmd',
      size: 'span 3',
      color: '#ffcc00',
      modal: {
        title: 'Communication and Multimedia Design (CMD)',
        intro: 'The third floor houses the best student work of the Communication and Multimedia Design (CMD) programme. The work was nominated by the CMD teachers last year.',
        program_short: `
        <a href="/about/#communication-and-multimedia-design" class="button">
          Learn more <span class="sr-only">about the Communication and Multimedia Design</span>
        </a>
        `
      }
    },
    // {
    //   name: 'Applied Research',
    //   class: 'applied-research',
    //   modal: {
    //     title: 'Applied Research',
    //     intro: 'At the Amsterdam University of Applied Sciences, we are committed to design research that is relevant to society. We are a research university that is committed to the development of new knowledge and the application of this knowledge to the needs of society.',
    //     program_short: `
    //     <ul>
    //       <li>
    //         During the Exposjoo our researchers will present their work and research.
    //       </li>
    //       <li>
    //         Attend one of our guided tours between 19.00h and 20.00h (7 - 8pm), a new tour starts every 15 minutes.
    //       </li>
    //     </ul>`
    //   }
    // },
    {
      name: 'Talks',
      class: 'talks',
      size: 'span 3',
      color: '#5FCE67',
      modal: {
        title: 'Talks',
        intro: 'On the second floor, our teachers will present a number of fun and important talks for all visitors.',
        program_short: `
        
        `
      }
    },
    // {
    //   name: 'Job Market',
    //   class: 'job-market',
    //   modal: {
    //     title: 'Job Market',
    //     intro: 'During the Exposjoo we will have a job market where students and companies can meet. Looking for new talent; an intern, or a full-time job? Make sure to stop by!',
    //     program_short: `
    //     <ul>
    //       <li>
    //         The Job Market will run from 20.00h to 21.00h (8 - 9pm).
    //       </li>
    //     </ul>`
    //   }
    // },
  ],
  textContainers: [
    {
      title: 'Something went wrong',
      level: 'h1',
      titleClass: 'large-heading',
      textClass: 'medium-body',
      text: [
        'This page does not exist (anymore). Please check the URL or go back to the <a href="/">homepage</a>.'
      ]
    },
  ],
}