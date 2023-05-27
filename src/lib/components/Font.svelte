<script lang="ts">
	import { dummyReloadCanvas } from '$lib/store';
	import { FileButton, type ToastSettings } from '@skeletonlabs/skeleton';
	import { toastStore } from '@skeletonlabs/skeleton';

	let files: FileList;

	function onChangeHandler(e: Event): void {
		const fileReader = new FileReader();
		let file = files[0];

		fileReader.onload = function () {
			const fontData = fileReader.result;
			if (!fontData) {
				toastStore.trigger({
					message: 'Error reading file',
					background: 'error'
				});
				return;
			}
			const font = new FontFace('Myfont', fontData);

			font
				.load()
				.then(function (loadedFont) {
					document.fonts.add(loadedFont);

					$dummyReloadCanvas = Math.random();

					toastStore.trigger({
						message: 'Uploaded successfully'
					});
				})
				.catch(function (error) {
					toastStore.trigger({
						message: 'Error loading font:' + String(error),
						background: 'variant-filled-error'
					});
				});
		};

		fileReader.readAsArrayBuffer(file);
	}
</script>

<div>
	<label class="label mb-2">
		<span>Font file</span>
		<FileButton name="files" on:change={onChangeHandler} bind:files />
	</label>
</div>
