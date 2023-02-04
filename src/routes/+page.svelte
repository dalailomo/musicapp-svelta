<script>
	import {createFretboardMatrix} from "$lib/guitar.ts";
	import {NOTE_TAG, SCALE_PATTERN_STEP} from "$lib/core.ts";

	let root = NOTE_TAG[0];
	let scale = [SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.half, SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.whole, SCALE_PATTERN_STEP.half];
	let steps = 22;

	$: fretboard = createFretboardMatrix(root, scale, steps, [4, 9, 2, 7, 11, 4]).reverse();
</script>

<div>
	<input type="text" bind:value={root} />
	<br />
	<input type="text" bind:value={scale[0]} />
	<input type="text" bind:value={scale[1]} />
	<input type="text" bind:value={scale[2]} />
	<input type="text" bind:value={scale[3]} />
	<input type="text" bind:value={scale[4]} />
	<input type="text" bind:value={scale[5]} />
	<input type="text" bind:value={scale[6]} />
	<input type="text" bind:value={scale[7]} />
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