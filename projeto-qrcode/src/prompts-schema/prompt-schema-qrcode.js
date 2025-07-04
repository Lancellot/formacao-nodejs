import chalk from "chalk";


const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link que deseja transformar em QR Code:"),
        required: true,
    },
    {
        name: "type",
        description: chalk.yellow.bold(
            "Escolha o tipo de QR Code (1 - normal, 2 - Terminal):"
        ),
        required: true,
        pattern: /^[1-2]$/,
        message: chalk.red.italic("A opção deve ser 1 ou 2"),
        required: true,
    }
];

export default promptQRCode;