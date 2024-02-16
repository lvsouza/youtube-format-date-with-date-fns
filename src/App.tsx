import { parse, format,  } from 'date-fns';



export default function App() {

  console.log('----- Parse');
  console.log('new Date', '02-16-2024', new Date('02-16-2024'));
  console.log('new Date', '16-02-2024', new Date('16-02-2024'));
  console.log('parse', '16-02-2024', { date: parse('16-02-2024', 'dd-MM-yyyy', new Date()) });

  const dateInstance = new Date('02-16-2024');
  console.log('----- Format');
  console.log('date instance', dateInstance.getDay() + '-' + dateInstance.getMonth() + '-' + dateInstance.getFullYear());
  console.log('format', format(dateInstance, 'dd-MM-yyyy'));
  console.log('format', format(dateInstance, 'MM-yyyy'));
  console.log('format', format(dateInstance, 'dd/MM/yyyy'));
  
  console.log('parse - formar', format(parse('16-02-2024', 'dd-MM-yyyy', new Date()), 'dd/MM/yyyy'));


  return null
}
