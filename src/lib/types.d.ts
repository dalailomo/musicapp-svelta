declare type Note = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | "B";

declare type NoteMeta = { note: Note; degree: number };

declare type ScalePatternStep = 'H' | 'W' | '3H' | '2W' | '5H'

declare type ScaleObject = { [name: string]: ScalePatternStep[] }
