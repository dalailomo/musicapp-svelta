import {NOTE_TAG, SCALE_PATTERN_STEP as SP} from "./consts";

export const createScaleFromPattern = (scalePattern: string[], baseNote: string): string[] => {
    let currentStep = NOTE_TAG.indexOf(baseNote);
    const result: any[] = [];
    result.push(NOTE_TAG[currentStep]);

    for (const scalePatternItem of scalePattern) {
        if (scalePatternItem === SP.W) {
            currentStep++;
        } else if (scalePatternItem === SP.WH) {
            currentStep++;
            currentStep++;
        } else if (scalePatternItem === SP.WW) {
            currentStep++;
            currentStep++;
            currentStep++;
        }
        else if (scalePatternItem === SP.WWH) {
            currentStep++;
            currentStep++;
            currentStep++;
            currentStep++;
        }

        currentStep++;

        if (currentStep >= NOTE_TAG.length) {
            currentStep = currentStep - (NOTE_TAG.length);
        }

        result.push(NOTE_TAG[currentStep]);
    }

    return result;
};

export const generateNoteArray = (initialNoteTagIndex: number, steps: number): string[] => {
    const result: any[] = [];
    const totalNotes = NOTE_TAG.length;
    let currentFret = 0;
    let currentNote = initialNoteTagIndex;

    const sanitizeNote = (note: number, limit: number): number => {
        if (note < limit) return note;
        const sanitizedNote = note - limit;
        if (sanitizedNote >= limit) return sanitizeNote(sanitizedNote, limit);
        if (sanitizedNote < limit) return sanitizedNote;
        return sanitizeNote(sanitizedNote, limit) - limit;
    }

    while (currentFret < steps) {
        currentNote = sanitizeNote(currentNote, totalNotes);
        result.push(NOTE_TAG[currentNote]);
        currentFret++;
        currentNote++;
    }

    return result;
};
