'use strict';

import fs from 'fs';
import path from 'path';
import SVGSpriter from 'svg-sprite';


/**
 *
 * @param {object} [config] Параметры генерации спрайтов
 * @param {string} [config.folderIn] Папка куда будет сохранён сгенерированный спрайт
 * @param {string} [config.folderOut] Папка куда будет сохранён сгенерированный спрайт
 * @param {string} [config.fileName] Имя сгенерированного спрайта
 * @param {string} [config.log] Отображать работу в терминале
 */
const sprite_generator = async ({ folderIn, dest = folderIn, fileName, log = false, mode = { defs: { dest: '', sprite: fileName } } }) => {
    // console.log('Активация генератора спрайтов...\n');

    const spriter = new SVGSpriter({ dest, log, mode});

    fs.readdirSync(folderIn).forEach(file => {
        spriter.add(`${dest}/${file}`, null, fs.readFileSync(`${folderIn}/${file}`, 'utf-8'));
    })

    spriter.compile((error, result) => {
        for (const mode in result) {
            for (const resource in result[mode]) {
                fs.mkdirSync(path.dirname(result[mode][resource].path), { recursive: true });
                fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
            }
        }
    });

    const { result } = await spriter.compileAsync();
    for (const mode in result) {
        for (const resource in result[mode]) {
            fs.mkdirSync(path.dirname(result[mode][resource].path), { recursive: true });
            fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
        }
    }
    // console.log('\nГенератор спрайтов успешно отработал.\n');
};

export default sprite_generator;