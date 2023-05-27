<script>
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
		pixelOffsetSinStrength
	} from '$lib/store';
	import Font from './Font.svelte';
</script>

<div>
	<div class="mb-2">
		<Font />
	</div>

	<label class="label mb-2">
		<span>Font size</span>
		<input class="input" type="number" bind:value={$fontSize} />
	</label>

	<label class="label mb-2">
		<span>Image size</span>
		<input class="input" type="number" bind:value={$initCanvasWidth} />
	</label>

	<label class="label mb-2">
		<span>Line Height</span>
		<input class="input" type="number" bind:value={$lineHeight} />
	</label>
	<label class="label mb-2">
		<span>Starting X</span>
		<input class="input" type="number" bind:value={$startX} />
	</label>
	<label class="label mb-2">
		<span>Starting Y</span>
		<input class="input" type="number" bind:value={$startY} />
	</label>

	<div class="flex justify-between gap-2">
		<label class="label mb-2">
			<span>Letter offset min</span>
			<input class="input" type="number" bind:value={$pixelOffsetRangeMin} />
		</label>
		<label class="label mb-2">
			<span>Letter offset max</span>
			<input class="input" type="number" bind:value={$pixelOffsetRangeMax} />
		</label>
	</div>

	<div class="flex justify-between gap-2">
		<label class="label mb-2">
			<span>Letter offset sine dx</span>
			<input class="input" type="number" bind:value={$pixelOffsetSinDX} />
		</label>
		<label class="label mb-2">
			<span>Letter offset sine strength</span>
			<input class="input" type="number" bind:value={$pixelOffsetSinStrength} />
		</label>
	</div>

	<div class="flex justify-between gap-2">
		<label class="label mb-2">
			<span>Newline Y offset min</span>
			<input class="input" type="number" bind:value={$pixelOffsetRangeNewLineYMin} />
		</label>
		<label class="label mb-2">
			<span>Newline Y offset max</span>
			<input class="input" type="number" bind:value={$pixelOffsetRangeNewLineYMax} />
		</label>
	</div>

	<div class="flex justify-between gap-2">
		<label class="label mb-2">
			<span>Newline X offset min</span>
			<input class="input" type="number" bind:value={$pixelOffsetRangeBigNewLineXMin} />
		</label>
		<label class="label mb-2">
			<span>Newline X offset max</span>
			<input class="input" type="number" bind:value={$pixelOffsetRangeBigNewLineXMax} />
		</label>
	</div>
</div>
