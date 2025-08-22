"use client";
type Props = {
	children: React.ReactNode;
};

export default function Layout(props: Props) {
	return (
		<>
			<div className='flex w-full justify-between mb-2 align-middle items-center'>
				<p className='text-xl font-bold'>Notes</p>
			</div>
			{props.children}
		</>
	);
}
