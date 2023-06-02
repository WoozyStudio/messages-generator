const fs = require('fs');

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolders = fs.readdirSync(`./src/components`);
        for (const folder of componentFolders) {
            const componentFiles = fs.readdirSync(`./src/components/${folder}`).filter((file) => file.endsWith('js'));

            const { buttons, selectMenus } = client;

            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`);
                        buttons.set(button.data.name, button);
                    }
                    break;
                
                case "selectMenu":
                    for (const file of componentFiles) {
                        const menu = require(`../../components/${folder}/${file}`);
                        selectMenus.set(menu.data.name, menu);
                    }
                    break;

                default:
                    break;
            }
        }
    }
}