<script>
	import Canvas from '$lib/components/Canvas.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import { appText } from '$lib/store';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="mx-2 h-full grid grid-cols-2 gap-4 mt-4">
	<div class="bg-white h-full p-2">
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="summary">Settings</svelte:fragment>
				<svelte:fragment slot="content">
					<Settings/>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>

		<textarea class="textarea h-full mt-2" bind:value={$appText}/>
	</div>
	<div>
		<Canvas />
	</div>
</div>

