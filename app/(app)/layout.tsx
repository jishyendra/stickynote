"use client";
type Props = {
	children: React.ReactNode;
};
import AppSideBar from "@/components/appsidebar";
import {
	SidebarProvider,
	SidebarInset,
} from "@/components/ui/sidebar";
export default function Layout(props: Props) {
	return (
		<>
			<SidebarProvider>
				<AppSideBar />
				<main className='relative w-full flex-1'>
					<SidebarInset>{props.children}</SidebarInset>
				</main>
			</SidebarProvider>
		</>
	);
}
