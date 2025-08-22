// export interface Note {
// 	title?: string;
// 	items: string[];
// }
// export type NoteItem = string;
// export type NoteList = NoteItem[];
export type NoteItem = string;
export type NoteType = {
	items: NoteItem[];
	title: string;
};
