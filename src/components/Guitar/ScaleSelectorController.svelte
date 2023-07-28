<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import RootNoteSelector from './ScaleSelectorController/RootNoteSelector.svelte';
	import ScaleSelector from './ScaleSelectorController/ScaleSelector.svelte';
	import ItemLane from '../Common/ItemLane.svelte';
	import TextSpan from '../Common/TextSpan.svelte';

	export let scaleName: ScaleName;
	export let root: Note;

	const dispatch = createEventDispatcher();

	function buildOutput(param: { scaleName: ScaleName, root: Note }) {
		return { scaleName: param.scaleName, root: param.root };
	}

	function onRootNoteSelected(event: CustomEvent<Note>) {
		dispatch('input', buildOutput({ scaleName, root: event.detail }));
	}

	function onScaleSelected(event: CustomEvent<ScaleName>) {
		dispatch('input', buildOutput({ scaleName: event.detail, root }));
	}
</script>

<ItemLane>
	<TextSpan>
		<RootNoteSelector {root} on:root-note-selected={onRootNoteSelected} />
	</TextSpan>
	<TextSpan>
		<ScaleSelector {scaleName} on:scale-selected={onScaleSelected} />
	</TextSpan>
</ItemLane>
