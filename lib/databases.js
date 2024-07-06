import * as SQLite from "expo-sqlite";

// Open or Create the Database.

const openTaksDB = async () => {
    return await SQLite.openDatabaseAsync('tasks.db');
};

// Create Tables.

const setUpDatabases = async () => {
    const tasksDB = await openTaksDB();
    await tasksDB.execAsync (`
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NULL
        );
    `);
};

// Insert New Task.

export const addTask = async (task) => {
    const tasksDB = await openTaksDB();
    const result = await tasksDB.runAsync(
        'INSERT INTO tasks (title, description) VALUES (?, ?);',
        task.title, task.description
    );
    console.log(`Inserted course with ID: ${result.lastInsertRowId}`);
};

// Fetch all Tasks.

export const getAllTasks = async () => {
    const tasksDB = await openTaksDB();
    const result = await tasksDB.getAllAsync('SELECT * FROM tasks;');
    return result;
};

// Delete or Done Task.

export const doneTask = async (id) => {
    const tasksDB = await openTaksDB();
    const result = await tasksDB.runAsync('DELETE FROM tasks WHERE id = ?;', id);
    console.log(`Task done or deleted with ID: ${id}`);
};

// Edit Task.

export const editTask = async (id, updates) => {
    const tasksDB = await openTaksDB();
    const query = `
        UPDATE tasks
        SET ${Object.keys(updates).map(key => `${key} = ?`).join(', ')}
        WHERE id = ?
    `;
    const params = [...Object.values(updates), id];
    const result = await tasksDB.runAsync(query, ...params);
    console.log(`Updated Task with ID: ${id}, changes: ${result.changes}`);
};

// Initialize Database.

setUpDatabases();



