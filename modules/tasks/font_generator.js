'use strict';

import fs from 'fs';
import { host } from '../../config';

/**
 *
 * @param {object} [config] Параметры генерации стилей для шрифтов
 * @param {string} [config.fontsDir] Папка откуда берутся шрифты
 * @param {string} [config.fontsStyleInlcude] Файл, куда сохранять стили
 */

const font_generator = async ({ fontsDir, fontsStyleInlcude }) => {

    fs.writeFileSync(fontsStyleInlcude, '');
    fs.readdir(fontsDir, (err, fontsDirsNames) => {
        if (err) console.log('Отсутствуют папки со шрифтами!');

        if (fontsDirsNames) {
            fontsDirsNames.forEach(fontDirName => {
                fs.readdir(`${fontsDir}/${fontDirName}`, (err, fontFilesName) => {
                    if (err) console.log('Отсутствуют шрифты!');

                    if (fontFilesName) {
                        fontFilesName.filter(fontFileName => !fontFileName.toLowerCase().includes('woff2'))
                            .forEach(fontFileName => {
                                const
                                    fontName = fontFileName.split('.')[0].split('-')[0],
                                    fontVendor = fontFileName.split('.')[0].split('-')[1],
                                    fontWeight__str = fontVendor.toLowerCase().includes('italic') ? fontVendor.toLowerCase().replace('italic', '') : fontVendor,
                                    fontStyle = fontVendor.toLowerCase().includes('italic') ? 'italic' : 'normal',
                                    fontWoffOrTtf = `url(${host}/fonts/${fontDirName}/${fontName}-${fontVendor}.ttf) format('truetype');`,
                                    fontWoff2 = '';
                                    // fontWoff2 = `,\n        url('./fonts/${fontDirName}/${fontName}-${fontVendor}.woff2') format('woff2');`;

                                let fontWeight__num;

                                switch (fontWeight__str.toLowerCase()) {
                                    case 'thin': fontWeight__num = 100; break;
                                    case 'extralight': fontWeight__num = 200; break;
                                    case 'light': fontWeight__num = 300; break;
                                    case 'regular': fontWeight__num = 400; break;
                                    case 'medium': fontWeight__num = 500; break;
                                    case 'semibold': fontWeight__num = 600; break;
                                    case 'bold': fontWeight__num = 700; break;
                                    case 'extrabold': fontWeight__num = 800; break;
                                    case 'black': fontWeight__num = 900; break;

                                    default: fontWeight__num = 400; break;
                                }
                                const fontFace = `@font-face {\n    font-family: '${fontName}';\n    src: ${fontWoffOrTtf}${fontWoff2}\n    font-weight: ${fontWeight__num};\n    font-style: ${fontStyle};\n};\n`;

                                fs.appendFile(fontsStyleInlcude, fontFace, err => {
                                    if (err) throw console.error(`Ошибка при добавлении шрифта: ${fontName}-${fontVendor}`)
                                    console.log(`Шрифт "${fontName}-${fontVendor}" успешно добавлен!`);
                                });
                            });
                    }
                });
            })
        }
    });
};

export default font_generator;