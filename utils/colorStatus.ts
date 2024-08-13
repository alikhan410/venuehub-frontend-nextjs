import chalk from "chalk";
export const colorStatus=(status: number) =>{
  if (status >= 200 && status < 300) {
    return chalk.green(status.toString());
  } else if (status >= 400 && status < 500) {
    return chalk.yellow(status.toString());
  } else if (status >= 500) {
    return chalk.red(status.toString());
  } else {
    return chalk.blue(status.toString());
  }
}


