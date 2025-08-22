"use client";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	useSidebar,
} from "@/components/ui/sidebar";
import {
	MagnifyingGlassIcon,
	FilesIcon,
	UserIcon,
	GearSixIcon,
	PencilCircleIcon,
	NotePencilIcon,
	CaretDoubleRightIcon,
	CaretDoubleLeftIcon,
} from "@phosphor-icons/react";

import Link from "next/link";
import Logo from "@/components/Logo";
import { Input, Textarea, Label, Button } from "@/components/ui/";

const ICON_SIZE = 28;

const menuItems = [
	{
		title: "Notes",
		url: "#",
		icon: <FilesIcon size={ICON_SIZE} color='#7d52be' />,
	},
	{
		title: "Search",
		url: "#",
		icon: <MagnifyingGlassIcon size={ICON_SIZE} color='#7d52be' />,
	},
	{
		title: "Canvas",
		url: "#",
		icon: <PencilCircleIcon size={ICON_SIZE} color='#7d52be' />,
	},
];

export default function AppSideBar() {
	const {
		state,
		open,
		setOpen,
		openMobile,
		setOpenMobile,
		isMobile,
		toggleSidebar,
	} = useSidebar();
	return (
		<>
			<Sidebar collapsible='icon'>
				<SidebarHeader className='justify-center'>
					<SidebarMenuButton asChild>
						<span className='relative w-full'>
							<button className='w-full' onClick={toggleSidebar}>
								{open ? (
									<div className='flex justify-between w-full'>
										<span>
											<Logo />
										</span>
										<CaretDoubleLeftIcon size={ICON_SIZE} />
									</div>
								) : (
									<CaretDoubleRightIcon size={ICON_SIZE} />
								)}
							</button>
						</span>
					</SidebarMenuButton>
				</SidebarHeader>
				<SidebarContent className='p-2'>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<span>
									<span>
										<NotePencilIcon size={ICON_SIZE} color='#7d52be' />
									</span>
									<span>
										<NewBoardDialog />
									</span>
								</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						{menuItems.map((item, idx) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<Link className='!p-0' href={item.url}>
										<span>{item.icon && item.icon}</span>
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<button>
									<span>
										<UserIcon size={ICON_SIZE} color='#7d52be' />
									</span>
									<span>Account</span>
								</button>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<button>
									<span>
										<GearSixIcon size={ICON_SIZE} color='#7d52be' />
									</span>
									<span>Settings</span>
								</button>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</>
	);
}

function NewBoardDialog() {
	return (
		<>
			<Dialog>
				<DialogTrigger>New Board</DialogTrigger>
				<DialogContent className='gap-2'>
					<DialogHeader>
						<DialogTitle>New board</DialogTitle>
						<DialogDescription className='text-sm p-0 m-0 text-gray-500'>
							You can create a new board to organize your notes and tasks.
						</DialogDescription>
					</DialogHeader>
					<DialogDescription className='grid gap-1'>
						<Label className='mt-4'>Board Title</Label>
						<Input
							placeholder='Enter valid title'
							required
							maxLength={80}
						></Input>
						<Button>Create</Button>
					</DialogDescription>
				</DialogContent>
			</Dialog>
		</>
	);
}
