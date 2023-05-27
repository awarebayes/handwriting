import { writable } from "svelte/store";

export let appText = writable<string>(`This text is fully reactive. You can change it and watch the canvas change as well.
Russian and english are supported out of the box.
You can add your own handwriting fond and play with settings.
You can save the result just by pressing save image on the canvas to the right.

---

Этот текст полностью реактивный. Его можно менять и смотреть изменения
Из коробки поддерживаются русские и английские языки. 
Можно добавить свой рукописный шрифт и поиграться с настройками.
Можно сохранить результат просто нажав пкм на картинку справа.

123456789.,-;'"!?
Your text will be here

абвгдеёжзийклмнопрстуфхцчшщъыьэюя
АБВГДЕёЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
Большой буквы ё нет увы, мне лень ее добавлять

A fine joke from the russian literature:

Молодой клерк прибегает с работы к своей юной любовнице и кричит:

- О, Сьюзи, меня отпустили с работы пораньше!

- Джонни, как это здорово! Мы будем делать с тобой дилижанс!

- Дилижанс? А как это?

- Как! Ты не знаешь, что такое дилижанс?! - дает ему пощечину и прогоняет.

Изумленный клерк приходит домой и говорит жене:
- Дорогая, я вернулся пораньше, чтобы делать с тобой дилижанс.
- Как?! Дилижанс со мной?! - дает пощечину и прогоняет.
Обалдевший клерк выходит на улицу, подходит к первой попавшейся проституткe и говорит:

- Вот вам 20 фунтов, покажите мне, что такое дилижанс.
- Что?! Дилижанс за эти деньги??? - дает пощечину и уходит.
Тут клерк вспоминает, что на окраине Лондона у него живет старая-старая тетушка, которая много повидала в жизни и наверняка знает, что такое дилижанс. Он вбегает в гостиную к тетушке, которая сидит, протянув ноги к камину и потягивая чай с молоком.
- Тетушка ! - кричит он. - Уж вы-то знаете, что такое дилижанс?
Тетушка блаженно потягивается в кресле, отставляет чашку и говорит:
- Ах, дилижанс, дилижанс... - и умирает.`);
export const fontSize = writable(100);
export const lineHeight = writable(60);
export const startX = writable(20);
export const startY = writable(80);
export const pixelOffsetRangeMin = writable(-1);
export const pixelOffsetRangeMax = writable(1);
export const pixelOffsetSinDX = writable(0.1);
export const pixelOffsetSinStrength = writable(4);
export const pixelOffsetRangeBigNewLineXMin = writable(-2);
export const pixelOffsetRangeBigNewLineXMax = writable(2);
export const pixelOffsetRangeNewLineYMin = writable(-4);
export const pixelOffsetRangeNewLineYMax = writable(4);
export const initCanvasWidth = writable(1920);
export const dummyReloadCanvas = writable(0.0);