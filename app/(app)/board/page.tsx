"use client";
import type { NoteType } from "@/lib/types";
import Note from "@/components/Note";
import { useState } from "react";
export default function Page() {
	const [data, setData] = useState<NoteType[]>([
		{id: "hello",items: ["Sticky Note 1", "This is the first note"],
		},
		{ id: "hello", items: ["Sticky Note 2", "This is the second note"] },
		{ id: "hello", items: ["Sticky Note 3", "This is the third note"] },
	]);
	return (
		<>
			<div className='flex gap-4 flex-wrap w-full'>
				{data.map((n, idx) => (
					<Note key={idx} note={n} />
				))}
			</div>
		</>
	);
}
