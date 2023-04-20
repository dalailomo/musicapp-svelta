import { describe, test, expect } from 'vitest';
import { createScaleFromPattern, generateNoteArray } from './core';
import { NOTE_TAG, SCALE_PATTERN_STEP as SP } from './consts';

const pattern = [SP.W, SP.H, SP.W, SP.WH, SP.WW, SP.WWH];

describe('Core functions', () => {
	describe('Create a scale from a given pattern', () => {
		test.each([
			[
				'Starting from 0',
				{
					pattern,
					baseNote: NOTE_TAG[0],
					expectedScale: [
						NOTE_TAG[0],
						NOTE_TAG[2],
						NOTE_TAG[3],
						NOTE_TAG[5],
						NOTE_TAG[8],
						NOTE_TAG[0],
						NOTE_TAG[5]
					]
				}
			],
			[
				'Reaching the end of the notes, comes back to the beginning',
				{
					pattern,
					baseNote: NOTE_TAG[8],
					expectedScale: [
						NOTE_TAG[8],
						NOTE_TAG[10],
						NOTE_TAG[11],
						NOTE_TAG[1],
						NOTE_TAG[4],
						NOTE_TAG[8],
						NOTE_TAG[1]
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
				result.push(NOTE_TAG[initial % NOTE_TAG.length]);
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
