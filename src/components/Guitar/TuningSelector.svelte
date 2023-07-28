<script lang="ts">
	import { NOTES } from '$lib/consts';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let tunningNotes: Note[];

	const noteList: Note[] = NOTES;

    function onTuneChanged(i: number, { value }: any) {
        const localTunning = [...tunningNotes];
        localTunning[i] = value
        dispatch('on-tune-change', localTunning);
    }

    function onUnshiftString() {
        const localTunning = [...tunningNotes];
        localTunning.unshift("C")
        dispatch('on-tune-change', localTunning);
    }

    function onShiftString() {
        const localTunning = [...tunningNotes];
        localTunning.shift()
        dispatch('on-tune-change', localTunning);
    }

    function onPushString() {
        const localTunning = [...tunningNotes];
        localTunning.push("C")
        dispatch('on-tune-change', localTunning);
    }

    function onPopString() {
        const localTunning = [...tunningNotes];
        localTunning.pop()
        dispatch('on-tune-change', localTunning);
    }
</script>

<br>
<br>

Tunning:
<button on:click={onShiftString}>-</button>
<button on:click={onUnshiftString}>+</button>

{#each tunningNotes as note, tunningIndex}
    <select bind:value={note} on:change={(e) => onTuneChanged(tunningIndex, e.target)}>
        {#each noteList as noteListName}
            <option value={noteListName}>
                {noteListName}
            </option>
        {/each}
    </select>
{/each}

<button on:click={onPushString}>+</button>
<button on:click={onPopString}>-</button>
