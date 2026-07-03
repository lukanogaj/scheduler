import styles from "./TodoRowEditDialog.module.scss";

const TodoRowEditDialog = ({
	onSaveEdit,
	todo,
	titleInputRef,
	editTitle,
	setEditTitle,
	onEditFieldKeyDown,
	editDueOn,
	setEditDueOn,
	editError,
	closeEdit,
}) => {
	return (
		<div className={styles.todoRowEditDialog}>
			<form
				className={styles.todoRowEditForm}
				onSubmit={onSaveEdit}>
				<div className={styles.todoRowEditField}>
					<label
						htmlFor={`edit-title-${todo.id}`}
						className={styles.todoRowEditLabel}>
						Title
					</label>
					<input
						ref={titleInputRef}
						id={`edit-title-${todo.id}`}
						className={styles.todoRowEditInput}
						type='text'
						value={editTitle}
						onChange={(e) => setEditTitle(e.target.value)}
						onKeyDown={onEditFieldKeyDown}
					/>
				</div>

				<div className={styles.todoRowEditField}>
					<label
						htmlFor={`edit-due-on-${todo.id}`}
						className={styles.todoRowEditLabel}>
						Due date
					</label>
					<input
						id={`edit-due-on-${todo.id}`}
						className={styles.todoRowEditInput}
						type='date'
						value={editDueOn ?? ""}
						onChange={(e) => setEditDueOn(e.target.value)}
						onKeyDown={onEditFieldKeyDown}
					/>
				</div>

				{editError ? (
					<p className={styles.todoRowEditError}>{editError}</p>
				) : null}

				<div className={styles.todoRowEditActions}>
					<button
						type='button'
						className={styles.todoRowSecondaryButton}
						onClick={closeEdit}>
						Cancel
					</button>

					<button
						type='submit'
						className={styles.todoRowPrimaryButton}>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default TodoRowEditDialog;
