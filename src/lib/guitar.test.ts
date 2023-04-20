import { describe, test, expect } from 'vitest';
import { NOTE_TAG, SCALE_PATTERN_STEP as SP } from './consts';
import { createFretboardMatrix } from './guitar';

// 'W', 'W', 'H', 'W', 'W', 'W', 'H' major scale
const root = NOTE_TAG[0]; // C major scale
const pattern = [SP.W, SP.W, SP.H, SP.W, SP.W, SP.W, SP.H];

const tuning = [4];

describe('Guitar', () => {
	test('Generates a fretboard highlighting the given pattern', () => {
		expect(createFretboardMatrix(root, pattern, 13, tuning)).to.be.deep.eq([
			[
				{ note: NOTE_TAG[4], degree: 3 },
				{ note: NOTE_TAG[5], degree: 4 },
				{ note: NOTE_TAG[6], degree: 0 },
				{ note: NOTE_TAG[7], degree: 5 },
				{ note: NOTE_TAG[8], degree: 0 },
				{ note: NOTE_TAG[9], degree: 6 },
				{ note: NOTE_TAG[10], degree: 0 },
				{ note: NOTE_TAG[11], degree: 7 },
				{ note: NOTE_TAG[0], degree: 1 },
				{ note: NOTE_TAG[1], degree: 0 },
				{ note: NOTE_TAG[2], degree: 2 },
				{ note: NOTE_TAG[3], degree: 0 },
				{ note: NOTE_TAG[4], degree: 3 }
			]
		]);
	});
});
