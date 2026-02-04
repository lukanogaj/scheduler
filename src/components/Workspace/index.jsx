import SidebarRow from "../SidebarRow";
import { Grid, List, Note } from "../images/icons"; // use your real icons

const Workspace = () => {
	return (
		<>
			<SidebarRow
				icon={Grid}
				label='All'
				count={4}
				active
			/>
			<SidebarRow
				icon={List}
				label='Tasks'
				count={4}
			/>
			<SidebarRow
				icon={Note}
				label='Notes'
				count={4}
			/>
		</>
	);
};

export default Workspace;

// import AllTasksNotes from "../AllTasksNotes";
// import Tasks from "../Tasks";
// import Notes from "../Notes";

// const Workspace = () => {
// 	return (
// 		<div className={styles.workSpace}>
// 			<h2>Workspace</h2>
// 			<AllTasksNotes />
// 			<Tasks />
// 			<Notes />
// 		</div>
// 	);
// };

// export default Workspace;
