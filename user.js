
const user = {
  name: 'Tom',
  location: 'Dallas',
  occupations: ['Developer', 'salesman', 'bacon eater'],
  hobbies: [
    {
      name: 'fishing',
      type: 'outdoors'
    },
    {
      name: 'tennis',
      type: 'outdoors'
    },
    {
      name: 'pinball',
      type: 'indoors'
    }
  ],
  family: [
    {
      name: 'beth',
      relation: 'wife',
      gender: 'female'
    },
    {
      name: 'josh',
      relation: 'brother',
      gender: 'male'
    }, {
      name: 'peggy',
      relation: 'mom',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: 'dominos',
      type: 'pizza',
      rating: 1
    },
    {
      name: 'tops',
      type: 'holeinthewall',
      rating: 2
    },
    {
      name: 'lot',
      type: 'family',
      rating: 3
    }
  ]

}
module.exports = {user}
