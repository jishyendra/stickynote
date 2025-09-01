"use client";
import type { NoteType } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { useBoardStore } from "@/store/useNotes";

export default function Note({ note }: { note: NoteType }) {
	const [newNote, setNewNote] = useState<string>("");
	const [notes, addNote] = useState<NoteType>(note);
	// const {}  = useBoardStore((state) => state.)

	function handleNewNote() {}

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
						setNewNote(e.target.value);
					}}
					value={newNote}
				></textarea>
				<button
					className='w-min p-1 border rounded-md'
					onClick={handleCreateNewNote}
				>
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
