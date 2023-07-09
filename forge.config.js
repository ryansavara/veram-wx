module.exports = {
    packagerConfig: {
        asar: true,
        icon: 'images/icon',
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@rabbitholesyndrome/electron-forge-maker-portable',
            config: {
                icon: 'images/icon.ico',
                artifactName: '${productName}-${version}.exe',
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['darwin'],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
    ],
};
