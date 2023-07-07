<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { SCALE } from '$lib/consts';

	export let scale: string[];
	export let root: string;

	const dispatch = createEventDispatcher();
	const scaleList: string[] = Object.keys(SCALE);
	let selected: string = Object.keys(SCALE)[1];

	function buildOutput(param: { scale: string[], root: string }) {
		return { scale: param.scale, root: param.root };
	}

	function onRootInput(e: Event) {
		dispatch('input', buildOutput({ scale, root: (e.target as HTMLInputElement).value }));
	}

	function onChangeScale(e: Event) {
		dispatch('input', buildOutput({ scale: SCALE[(e.target as HTMLInputElement).value], root }));
	}

	function onModeChange(method: 'pop' | 'shift') {
		const s = [...scale];
		const e: string = s[method]() || "";
		scale = method === 'pop' ? [e, ...s] : [...s, e];
		dispatch('input', buildOutput({ scale, root }));
	}
</script>

<input type="text" on:input={onRootInput} bind:value={root} />

<select bind:value={selected} on:change={onChangeScale}>
	{#each scaleList as scaleName}
		<option value={scaleName}>
			{scaleName}
		</option>
	{/each}
</select>

<button on:click={() => onModeChange('pop')}>Previous mode</button>
<code>{scale.join('-')}</code>
<button on:click={() => onModeChange('shift')}>Next mode</button>
