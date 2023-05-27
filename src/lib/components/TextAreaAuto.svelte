<script>
	export let value = '';
	export let minRows = 1;

	$: minHeight = `${1 + minRows * 3}em`;
</script>

<div class="container max-w-full">
	<textarea bind:value style="min-height: {minHeight};" />
</div>

<style>
	.container {
		position: relative;
	}

	pre,
	textarea {
		font-family: inherit;
		padding: 0.5em;
		box-sizing: border-box;
		border: 1px solid #eee;
		line-height: 1.2;
		overflow: hidden;
	}

	textarea {
		height: 100%;
		width: 100%;
		top: 0;
		overflow-y: scroll;
	}
</style>
