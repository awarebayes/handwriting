<script>
	import Canvas from '$lib/components/Canvas.svelte';
	import Settings from '$lib/components/Settings.svelte';
	import TextAreaAuto from '$lib/components/TextAreaAuto.svelte';
	import Usage from '$lib/components/Usage.svelte';
	import { appText } from '$lib/store';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="mx-2 grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
	<div class="bg-white dark:bg-slate-600 p-2">
		<Accordion autocollapse>
			<AccordionItem>
				<svelte:fragment slot="summary">Your own font</svelte:fragment>
				<svelte:fragment slot="content">
					<Usage />
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="summary">Settings</svelte:fragment>
				<svelte:fragment slot="content">
					<Settings />
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem open>
				<svelte:fragment slot="summary">Text</svelte:fragment>
				<svelte:fragment slot="content">
					<TextAreaAuto bind:value={$appText} minRows={10} />
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
	<div class="">
		<Canvas />
	</div>
</div>

<style>
	.min-h-90 {
		min-height: 90%;
	}
</style>
