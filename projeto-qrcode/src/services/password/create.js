import chalk from "chalk";
import {handle} from "./handle.js";

async function createPassword() {
    console.log(chalk.blue("Password"));
    const password = await handle();
    console.log(chalk.green(password));
}

export default createPassword;