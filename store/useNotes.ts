import { create } from "zustand";
import type { BoardType, NoteType } from "@/lib/types";

type Id = string;
interface BoardStore {
	boards: Map<Id, BoardType>;
	addBoard: (board: BoardType, id: Id) => void;
	getNotes: (id: Id) => BoardType | undefined;
	addNote: (note: string) => void;
}

export const useBoardStore = create<BoardStore>()((set, get) => ({
	boards: new Map(),
	addBoard: (newBoard, id) =>
		set((state) => {
			return {
				boards: state.boards.set(id, newBoard),
			};
		}),
	getNotes: (id) => {
		const { boards } = get();
		return boards.get(id);
	},
	addNote: (note) => {
		set(({ boards }) => {
			return {
				boards
			};
		});
	},
}));
