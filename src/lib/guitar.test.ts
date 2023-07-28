import { describe, test, expect } from 'vitest';
import { NOTES } from './consts';
import { createFretboardMatrix } from './guitar';

// 'W', 'W', 'H', 'W', 'W', 'W', 'H' major scale
const root = NOTES[0]; // C major scale
const pattern: ScalePatternStep[] = ['W', 'W', 'H', 'W', 'W', 'W', 'H'];

describe('Guitar', () => {
	test('Generates a fretboard highlighting the given pattern', () => {
		expect(createFretboardMatrix(root, pattern, 13, [4])).to.be.deep.eq([
			[
				{ note: NOTES[4], degree: 3 },
				{ note: NOTES[5], degree: 4 },
				{ note: NOTES[6], degree: 0 },
				{ note: NOTES[7], degree: 5 },
				{ note: NOTES[8], degree: 0 },
				{ note: NOTES[9], degree: 6 },
				{ note: NOTES[10], degree: 0 },
				{ note: NOTES[11], degree: 7 },
				{ note: NOTES[0], degree: 1 },
				{ note: NOTES[1], degree: 0 },
				{ note: NOTES[2], degree: 2 },
				{ note: NOTES[3], degree: 0 },
				{ note: NOTES[4], degree: 3 }
			]
		]);
	});

	// TODO make a data provider
	test('Generates a fretboard highlighting the given pattern BUT is drop tunning', () => {
		expect(createFretboardMatrix(root, pattern, 13, [2])).to.be.deep.eq([
			[
				{ note: NOTES[2], degree: 2 },
				{ note: NOTES[3], degree: 0 },
				{ note: NOTES[4], degree: 3 },
				{ note: NOTES[5], degree: 4 },
				{ note: NOTES[6], degree: 0 },
				{ note: NOTES[7], degree: 5 },
				{ note: NOTES[8], degree: 0 },
				{ note: NOTES[9], degree: 6 },
				{ note: NOTES[10], degree: 0 },
				{ note: NOTES[11], degree: 7 },
				{ note: NOTES[0], degree: 1 },
				{ note: NOTES[1], degree: 0 },
				{ note: NOTES[2], degree: 2 },
			]
		]);
	});
});
