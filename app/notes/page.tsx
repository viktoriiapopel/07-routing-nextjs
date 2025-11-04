import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "../../lib/api";

const Notes = async () => {
  const res = await fetchNotes();

  return <NoteList notes={res.notes} />;
};
export default Notes;
