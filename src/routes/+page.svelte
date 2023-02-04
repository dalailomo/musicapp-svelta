<script lang="ts">
	import {createFretboardMatrix} from "$lib/guitar.ts";
	import {NOTE_TAG, SCALE_PATTERN_STEP} from "$lib/core.ts";
	import ScaleSelector from "../components/ScaleSelector.svelte";

	let root = NOTE_TAG[0];
	let scale = [SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.half, SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.half];
	let steps = 22;

	function onScaleChange(event: CustomEvent) {
		scale = [ ...event.detail.scale ];
		root = event.detail.root;
	}

	$: fretboard = createFretboardMatrix(root, scale, steps, [4, 9, 2, 7, 11, 4]).reverse();
</script>

<div>
	<ScaleSelector root={root} scale={scale} on:input={onScaleChange} />
	<br />
	<input type="number" bind:value={steps} />
</div>

<div>
	{#each fretboard as slotLine}
		<pre>
			{#each slotLine as slot}
				{slot.note}:{slot.degree}&nbsp;
			{/each}
		</pre>
	{/each}
</div>
