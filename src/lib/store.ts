import { writable } from "svelte/store";

export let appText = writable<string>("Тут будет ваш текст");
export const fontSize = writable(60);
export const lineHeight = writable(80);
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