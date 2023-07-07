import { describe, test, expect } from 'vitest';
import { createScaleFromPattern, generateNoteArray } from './core';
import { NOTES } from './consts';

const pattern: ScalePatternStep[] = ['W', 'H', 'W', '3H', '2W', '5H'];

describe('Core functions', () => {
	describe('Create a scale from a given pattern', () => {
		test.each([
			[
				'Starting from 0',
				{
					pattern,
					baseNote: NOTES[0],
					expectedScale: [
						NOTES[0],
						NOTES[2],
						NOTES[3],
						NOTES[5],
						NOTES[8],
						NOTES[0],
						NOTES[5]
					]
				}
			],
			[
				'Reaching the end of the notes, comes back to the beginning',
				{
					pattern,
					baseNote: NOTES[8],
					expectedScale: [
						NOTES[8],
						NOTES[10],
						NOTES[11],
						NOTES[1],
						NOTES[4],
						NOTES[8],
						NOTES[1]
					]
				}
			]
		])('%s', (_, { pattern, baseNote, expectedScale }) => {
			expect(createScaleFromPattern(pattern, baseNote)).to.deep.eq(expectedScale);
		});
	});

	describe('Generate note array up to a given limit', () => {
		const generateExpectation = (initial: number, steps: number) => {
			const result = [];
			for (let i = 0; i < steps; i++) {
				result.push(NOTES[initial % NOTES.length]);
				initial++;
			}
			return result;
		};

		test.each([
			[
				'Starting from 0',
				{
					initialNoteTagIndex: 0,
					steps: 22
				}
			],
			[
				'Starting from another note',
				{
					initialNoteTagIndex: 5,
					steps: 22
				}
			]
		])('%s', (_, { initialNoteTagIndex, steps }) => {
			expect(generateNoteArray(initialNoteTagIndex, steps)).to.deep.eq(
				generateExpectation(initialNoteTagIndex, steps)
			);
		});
	});
});
