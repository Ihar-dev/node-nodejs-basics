import * as os from 'os';

export const performCalculations = async () => {
  const CPUCores = os.cpus();
  console.log(CPUCores);
  CPUCores.forEach(core => {
    console.log(core);
  });
};

performCalculations();
