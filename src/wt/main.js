import * as os from 'os';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
  const CPUCores = os.cpus();
  const outputArray = [];
  let number = 10;
  const promiseArray = [];

  CPUCores.forEach((core, index) => {
    const obj = {
      status: '',
      data: null,
    };
    outputArray.push(obj);
    const worker = new Worker('./worker.js', {
      workerData: number,
    });
    promiseArray.push(new Promise(resolve => {
      worker.on('message', msg => {
        outputArray[index].status = 'resolved';
        outputArray[index].data = msg;
        resolve();
      });
      worker.on('error', err => {
        outputArray[index].status = 'error';
        resolve();
      });
    }));
    number++;
  });

  Promise.all(promiseArray).then(() => console.log(outputArray));

};

performCalculations();
