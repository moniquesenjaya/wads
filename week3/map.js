// Durations are in minutes 
const tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];


const task_names = tasks.map(task => task.name)
 
console.log(task_names)

const short_task = tasks.filter(task => task.duration < 100);

console.log(short_task);


const total = [1, 2, 3, 4, 5].reduce((previous, current) => previous+current,5);
console.log(total)