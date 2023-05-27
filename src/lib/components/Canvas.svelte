<script lang="ts">
	import { appText, fontSize, lineHeight, pixelOffsetRangeBigNewLineXMax, pixelOffsetRangeBigNewLineXMin, pixelOffsetRangeMax, pixelOffsetRangeMin, startX, startY,
	pixelOffsetRangeNewLineYMin, pixelOffsetRangeNewLineYMax, initCanvasWidth } from "$lib/store";
	import { onMount } from "svelte";

	let canvas: HTMLCanvasElement;
    let canvasContainer: HTMLDivElement;


	const clear = () => {
        if (!canvas)
            return
		var context = canvas.getContext('2d')!;
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    onMount(clear)



	const draw = (text: string) => {
        if (!canvas)
            return
		var context = canvas.getContext('2d')!;
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);


		// Set the font properties
        context.fillStyle = "black";
		context.font = $fontSize + 'px Myfont';

		// Set the initial position
		var x = $startX;
		var y = $startY;

		// Iterate over each character in the text
		for (var i = 0; i < text.length; i++) {
			var char = text[i];

			// Generate random pixel offsets for x and y coordinates
			var xOffset = getRandomInt($pixelOffsetRangeMin, $pixelOffsetRangeMax);
			var yOffset = getRandomInt($pixelOffsetRangeMin, $pixelOffsetRangeMax);

			// Calculate the new position with offsets
			var newX = x + xOffset;
			var newY = y + yOffset;

			// Draw the character at the new position
			context.fillText(char, newX, newY);

			// Update the x position for the next character
			var charWidth = context.measureText(char).width;
			x += charWidth;

			// Check if the x position exceeds the canvas width
			if (x + charWidth >= canvas.width * 2 || char == "\n") {
				// Start a new line if the width is exceeded
				x = $startX + getRandomInt($pixelOffsetRangeBigNewLineXMin, $pixelOffsetRangeBigNewLineXMax);
				y += $lineHeight + Math.abs(getRandomInt($pixelOffsetRangeNewLineYMin, $pixelOffsetRangeNewLineYMax));

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

    $: draw($appText)
    $: $fontSize, $lineHeight, $startX, $startY, $pixelOffsetRangeMin, $pixelOffsetRangeMax, $pixelOffsetRangeBigNewLineXMax, $pixelOffsetRangeBigNewLineXMin, $pixelOffsetRangeNewLineYMin,
	$pixelOffsetRangeNewLineYMax,
	$initCanvasWidth,
	 draw($appText)
</script>

<div class="canvas-container" bind:this={canvasContainer}>
    <canvas bind:this={canvas} width={$initCanvasWidth} height={$initCanvasWidth}/>
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
