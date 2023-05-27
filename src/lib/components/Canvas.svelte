<script lang="ts">
	import {
		appText,
		fontSize,
		lineHeight,
		pixelOffsetRangeBigNewLineXMax,
		pixelOffsetRangeBigNewLineXMin,
		pixelOffsetRangeMax,
		pixelOffsetRangeMin,
		startX,
		startY,
		pixelOffsetRangeNewLineYMin,
		pixelOffsetRangeNewLineYMax,
		initCanvasWidth,
		pixelOffsetSinDX,
		pixelOffsetSinStrength,
		dummyReloadCanvas
	} from '$lib/store';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let canvasContainer: HTMLDivElement;

	const clear = () => {
		if (!canvas) return;
		var context = canvas.getContext('2d')!;
		context.fillStyle = 'white';
		context.fillRect(0, 0, canvas.width, canvas.height);
	};

	onMount(() => {
		draw($appText);
		setTimeout(() => draw($appText), 50);
		setTimeout(() => draw($appText), 250);
	});

	const draw = (text: string) => {
		if (!canvas) return;
		var context = canvas.getContext('2d')!;
		context.fillStyle = 'white';
		context.fillRect(0, 0, canvas.width, canvas.height);

		// Set the font properties
		context.fillStyle = 'black';
		context.font = $fontSize + 'px Myfont';

		// Set the initial position
		var x = $startX;
		var y = $startY;
		var sin_x = 0;

		// Iterate over each character in the text
		for (var i = 0; i < text.length; i++) {
			var char = text[i];

			// Generate random pixel offsets for x and y coordinates
			var xOffset = getRandomInt($pixelOffsetRangeMin, $pixelOffsetRangeMax);
			var yOffset = getRandomInt($pixelOffsetRangeMin, $pixelOffsetRangeMax);

			// Calculate the new position with offsets
			var newX = x + xOffset;
			var newY = y + yOffset + Math.sin(sin_x) * $pixelOffsetSinStrength;

			// Draw the character at the new position
			context.fillText(char, newX, newY);

			// Update the x position for the next character
			var charWidth = context.measureText(char).width;
			x += charWidth;
			sin_x += $pixelOffsetSinDX + Math.random() * $pixelOffsetSinDX * 2;

			// Check if the x position exceeds the canvas width
			if (x + charWidth * 3 >= canvas.width || char == '\n') {
				// Start a new line if the width is exceeded
				x =
					$startX + getRandomInt($pixelOffsetRangeBigNewLineXMin, $pixelOffsetRangeBigNewLineXMax);
				y +=
					$lineHeight +
					Math.abs(getRandomInt($pixelOffsetRangeNewLineYMin, $pixelOffsetRangeNewLineYMax));

				if (y + $lineHeight >= canvas.height) {
					// Adjust the canvas height and scroll to the bottom
					canvas.height += $lineHeight * 10;
					canvasContainer.scrollTop = canvasContainer.scrollHeight;
					draw(text);
				}
			}
		}
	};

	// Function to get a random integer between min and max (inclusive)
	function getRandomInt(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$: draw($appText);
	$: $pixelOffsetRangeNewLineYMin,
		$pixelOffsetRangeNewLineYMax,
		$initCanvasWidth,
		$fontSize,
		$lineHeight,
		$startX,
		$startY,
		$pixelOffsetRangeMin,
		$pixelOffsetRangeMax,
		$pixelOffsetRangeBigNewLineXMax,
		$pixelOffsetRangeBigNewLineXMin,
		$pixelOffsetSinDX,
		$pixelOffsetSinStrength,
		$dummyReloadCanvas,
		draw($appText);
</script>

<div class="canvas-container" bind:this={canvasContainer}>
	<canvas bind:this={canvas} width={$initCanvasWidth} height={$initCanvasWidth} />
</div>

<style>
	canvas {
		width: 100%;
		height: 100%;
	}

	.canvas-container {
		height: 100%;
		overflow: auto;
	}
</style>
