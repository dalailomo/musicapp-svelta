<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    export let scale: ScalePatternStep[];

	const dispatch = createEventDispatcher();

    function onModeChange(method: 'pop' | 'shift') {
		const s = [...scale];
		const e: ScalePatternStep = s[method]() as ScalePatternStep;
		const s2 = method === 'pop' ? [e, ...s] : [...s, e];
		dispatch('mode-selected', s2);
	}
</script>

Scale mode:
<button on:click={() => onModeChange('pop')}>Previous mode</button>
<code>{scale.join('-')}</code>
<button on:click={() => onModeChange('shift')}>Next mode</button>
