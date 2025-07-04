import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.error("Error:", err);
        return;
    }

    const isSmall = result.type === 2;
    

    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green("QR Code:\n"));
        console.log(qrcode);
    });
}

export default handle;