<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import IconButton from '@smui/icon-button';
	import ItemLane from '../Common/ItemLane.svelte';
	import TextSpan from '../Common/TextSpan.svelte';
	import FlexCenter from '../Common/FlexCenter.svelte';

	const dispatch = createEventDispatcher();

	export let items: NoteMeta[][];
	export let steps: number;
	let current = steps;

	function increment(e: Event) {
		dispatch('input', ++current);
	}

	function decrement(e: Event) {
		dispatch('input', --current);
	}

	function hasFretMarker(fretNumber: number) {
		if (fretNumber === 1 || fretNumber === 12) return true;
		return [3, 5, 7, 9].indexOf(fretNumber % 12) > -1;
	}
</script>

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
						class:seventh={slot.degree === 7}
						class:eighth={slot.degree === 8}
						class:ninth={slot.degree === 9}
						class:tenth={slot.degree === 10}
						class:eleventh={slot.degree === 11}
						class:twelveth={slot.degree === 12}
					>
						{slot.note} 
						{#if slot.degree > 0}
							<span>{slot.degree}</span>
						{/if}
					</span>
					<span class="mark" class:hasMarker={hasFretMarker(i) && j === items.length - 1} />
				</span>
			{/each}
		</div>
	{/each}
</div>

<FlexCenter>
	<ItemLane>
		<TextSpan>Fretboard length:</TextSpan>
		<IconButton class="material-icons" on:click={decrement}>remove</IconButton>
		<TextSpan>{steps}</TextSpan>
		<IconButton class="material-icons" on:click={increment}>add</IconButton>
	</ItemLane>
</FlexCenter>

<style lang="scss">
	#fretboard {
		font-family: 'Courier New', monospace;
		width: 100%;
		overflow-x: auto;
		&::-webkit-scrollbar {
			display: none;
		}

		.slot-line {
			min-width: max-content;
		}

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
				// z-index: 10;

				& > span {
					position: absolute;
					background: black;
					color: white;
					font-size: 10px;
					padding: 3px;
					border-radius: 100%;
					top: -10px;
					right: 0;
				}

				&.root {
					background: #be4b4b;
				}

				&.second {
					background: #444;
				}

				&.third {
					background: #8b8585;
				}

				&.fourth {
					background: #444;
				}

				&.fifth {
					background: #8a6a6a;
				}

				&.sixth {
					background: #444;
				}

				&.seventh {
					background: #7d7a54;
				}

				&.eighth, &.ninth, &.tenth, &.eleventh, &.twelveth {
					background: #444;
				}
			}

			&.zero {
				border-right: 2px solid #555;
			}

			.mark {
				position: absolute;
				display: none;
				width: 20px;
				height: 20px;
				background: rgb(177, 177, 177);
				top: 45px;
				left: 15px;
				border-radius: 8px;

				&.hasMarker {
					display: block;
				}
			}
		}
	}
</style>
