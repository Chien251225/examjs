import Dexie from "dexie";
export const db = new Dexie('myDatabase');
db.version(1).stores({
  books: 'id++, title, author, year' // Primary key and indexed props
});