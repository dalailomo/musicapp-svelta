<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let items: Note[][];
	export let steps: number;

	function onInput(e: Event) {
		dispatch('input', (e.target as HTMLInputElement).value);
	}

	function hasFretMarker(fretNumber: number) {
		if (fretNumber === 1 || fretNumber === 12) return true;
		return [3, 5, 7, 9].indexOf(fretNumber % 12) > -1;
	}
</script>

<input type="number" on:input={onInput} bind:value={steps} />

<div id="fretboard">
	{#each items as slotLine, j}
		<div class="slot-line">
			{#each slotLine as slot, i}
				<span class="slot" class:zero={i === 0}>
					<span
						class="note"
						class:root={slot.degree === 1}
						class:second={slot.degree === 2}
						class:third={slot.degree === 3}
						class:fourth={slot.degree === 4}
						class:fifth={slot.degree === 5}
						class:sixth={slot.degree === 6}
						class:seventh={slot.degree === 7}>{slot.note}</span
					>
					<span class="mark" class:hasMarker={hasFretMarker(i) && j === 3} />
				</span>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	#fretboard {
		font-family: 'Courier New', monospace;

		.slot-line .slot {
			position: relative;
			display: inline-block;
			padding: 10px;

			background: #222;
			border-right: 2px solid #282828;

			text-align: center;

			box-sizing: border-box;

			.note {
				position: relative;
				display: inline-block;
				padding: 5px;
				width: 20px;
				border-radius: 25px;
				z-index: 10;

				&.root {
					background: #be4b4b;
				}

				&.second {
					background: #444;
				}

				&.third {
					background: #444;
				}

				&.fourth {
					background: #444;
				}

				&.fifth {
					background: #444;
				}

				&.sixth {
					background: #444;
				}

				&.seventh {
					background: #444;
				}
			}

			&.zero {
				border-right: 2px solid #555;
			}

			.mark {
				position: absolute;
				display: none;
				width: 40px;
				height: 20px;
				background: #111;
				top: 135px;
				left: 5px;
				border-radius: 8px;

				&.hasMarker {
					display: block;
				}
			}
		}
	}
</style>
