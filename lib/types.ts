import { z } from "zod";
const NoteItem = z.string();

const NoteSchema = z.object({
	id: z.string(),
	title: z.string().optional(),
	items: z.array(z.string()),
});

const BoardSchema = z.object({
	id: z.string(),
	title: z.string().nonempty().max(60),
	description: z.string().optional(),
	notes: z.array(NoteSchema),
});

export type NoteItemType = z.infer<typeof NoteItem>;
export type NoteType = z.infer<typeof NoteSchema>;
export type BoardType = z.infer<typeof BoardSchema>;
