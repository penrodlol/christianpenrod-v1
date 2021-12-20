import { Occupations } from '@interfaces/occupation.interface';

export const OCCUPATIONS: Occupations = [
  {
    id: '72ca6f72-55cd-48f0-98a5-1ef2ef7bb467',
    company: 'McKesson',
    logo: '/img/mckesson.webp',
    roles: [
      {
        id: 'e6a200f9-a679-4ba0-9b53-b6f772c7705b',
        title: 'Senior Associate Software Engineer',
        time: {
          from: 1556668800000,
        },
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore error mollitia, explicabo suscipit, officiis aliquam dolore ab commodi nemo ullam perspiciatis accusantium quibusdam, ipsam voluptatem eveniet autem vel minus tenetur.',
      },
      {
        id: 'ab1ed261-4e94-48fc-8406-b8446d151806',
        title: 'Sofware Engineer Intern',
        time: {
          from: 1525132800000,
          to: 1556668800000,
        },
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore error mollitia, explicabo suscipit, officiis aliquam dolore ab commodi nemo ullam perspiciatis accusantium quibusdam, ipsam voluptatem eveniet autem vel minus tenetur.',
      },
    ],
  },
  {
    id: 'd11ed11c-6907-470a-a555-55b9bdc098cb',
    company: 'LaRoche Univeristy',
    logo: '/img/laroche.webp',
    roles: [
      {
        id: '5b684cda-cc8b-47b9-b7c5-96d706e13697',
        title: 'Student',
        time: {
          from: 1420070400000,
          to: 1546300800000,
        },
        description: 'Bachelor of Science (BS), Computer Science',
      },
    ],
  },
];