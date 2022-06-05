import * as os from 'os';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
  const CPUCores = os.cpus();
  const outputArray = [];
  let number = 10;
  const threadsNumber = CPUCores.length;
  let currentThreadsNumber = 0;
  
  CPUCores.forEach((core, index) => {
    const obj = {
      status: '',
      data: null,
    };
    outputArray.push(obj);
    const worker = new Worker('./worker.js', {
      workerData: number,
    });
    worker.on('message', msg => {
      outputArray[index].status = 'resolved';
      outputArray[index].data = msg;
    });
    worker.on('error', err => {
      outputArray[index].status = 'error';
    });
    worker.on('exit', () => {
      currentThreadsNumber++;
      if (currentThreadsNumber === threadsNumber) console.log(outputArray);
    });
    number++;
  });
};

performCalculations();
