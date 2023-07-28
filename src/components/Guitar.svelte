<script lang="ts">
	import { createFretboardMatrix } from '$lib/guitar';
	import { SCALE, NOTES } from '$lib/consts';
	import ScaleSelectorController from './Guitar/ScaleSelectorController.svelte';
	import ScaleModeSelector from './Guitar/ScaleModeSelector.svelte'
	import Fretboard from './Guitar/Fretboard.svelte';

	let root = NOTES[4];
	let scaleName: ScaleName = 'major';
	let steps = 22;

	$: scale = SCALE[scaleName];
	$: items = createFretboardMatrix(root, scale, steps, [4, 9, 2, 7, 11, 4]).reverse();

	function onScaleChange(event: CustomEvent) {
		scaleName = event.detail.scaleName;
		root = event.detail.root;
	}

	function onScaleModeChange(event: CustomEvent) {
		scale = [...event.detail];
	}

	function onFretboardLengthChange(event: CustomEvent) {
		steps = event.detail;
	}
</script>

<div>
	<ScaleSelectorController {root} {scaleName} on:input={onScaleChange} />
	<ScaleModeSelector {scale} on:mode-selected={onScaleModeChange} />
	<br />
	<Fretboard {steps} {items} on:input={onFretboardLengthChange} />
</div>
