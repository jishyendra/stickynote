"use client";
import type { NoteType, NoteItem } from "@/utils/types/types";
import Image from "next/image";
import { useState } from "react";
export default function Note({ note }: { note: NoteType }) {
	const [noteItem, setNoteItem] = useState<string>("");
	const [notes, addNote] = useState<NoteItem[]>(note.items);

	function handleNewNote() {
		if (noteItem.trim() === "") return;
		addNote((prev) => [...prev, noteItem]);
		setNoteItem("");
	}

	return (
		<div className='grid gap-1 p-2 border rounded-xl bg-white'>
			<div className='rounded-md'>
				<Image
					className='rounded-full border border-black'
					width={30}
					height={30}
					src={"/usericon.svg"}
					alt='User Icon'
				></Image>
			</div>
			<div>
				<h2 className='font-bold'>{note.title}</h2>
			</div>
			<div className='flex gap-2'>
				<textarea
					className='flex-1 border rounded-lg p-1'
					rows={1}
					onKeyDown={(e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();
							handleNewNote();
						}
					}}
					onChange={(e) => {
						setNoteItem(e.target.value);
					}}
					value={noteItem}
				></textarea>
				<button className='w-min p-1 border rounded-md' type='submit'>
					Add
				</button>
			</div>
			<div>
				{note.items.map((note, index) => (
					<p key={index}>{note}</p>
				))}
			</div>
		</div>
	);
}
