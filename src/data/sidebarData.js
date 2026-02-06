import {
	ChevronDown,
	ChevronUp,
	SidebarToggle,
	Plus,
	Search,
	Grid,
	Menu,
	NotesIcon,
	Hash,
} from "../components/images/icons";

/* =========================
   Sidebar Header
   ========================= */
export const SIDEBAR_HEADER_DATA = {
	profile: {
		name: "Lukasz",
		avatarAlt: "Mojo",
		chevron: {
			open: ChevronUp,
			closed: ChevronDown,
		},
	},
	actions: [
		{
			id: "toggle-sidebar",
			icon: SidebarToggle,
			ariaLabel: "Toggle sidebar",
		},
	],
};

/* =========================
   Add Task Control
   ========================= */
export const SIDEBAR_ADD_TASK_DATA = {
	label: "Add Task",
	ariaLabel: "Add task",
	icon: Plus,
};

/* =========================
   Sidebar Search
   ========================= */
export const SIDEBAR_SEARCH_DATA = {
	placeholder: "Search",
	ariaLabel: "Search tasks",
	icon: Search,
};

/* =========================
   Workspace
   ========================= */
export const WORKSPACE_DATA = {
	heading: "Workspace",
	items: [
		{ id: "all", label: "All", icon: Grid, count: 12, active: true },
		{ id: "tasks", label: "Tasks", icon: Menu, count: 8 },
		{ id: "notes", label: "Notes", icon: NotesIcon, count: 4 },
	],
};

/* =========================
   Projects
   ========================= */
export const PROJECTS_DATA = {
	heading: "Projects",
	items: [
		{
			id: "tech-upgrade",
			label: "Tech-Upgrade",
			icon: Hash,
			count: 4,
			accent: "blue",
		},
		{
			id: "new-design",
			label: "New Design",
			icon: Hash,
			count: 4,
			accent: "green",
		},
	],
};
