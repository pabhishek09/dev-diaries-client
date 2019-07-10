const Challenge = {
  name: 'Javascript basic',
  problems: [
    {
      name: 'getSumOfArrayElements',
      argument: '1 argument',
      description: 'Write a JavaScript program to get the sum of the elemts of a given array',
      expectations: [
        {
          arg: [[1, 2, 3, 4]],
          ret: 10
        },         {
          arg: [[1, 2, 3, 4, 5]],
          ret: 15
        },{
          arg: [['1', '2', '3', '4']],
          ret: 10
        }
      ]
    }
  ]
};

export default Challenge;
