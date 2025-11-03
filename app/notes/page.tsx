// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from "@tanstack/react-query";
// import { fetchNotes } from "@/lib/api";
// import NotesClient from "./Notes.client";

// export default async function NotesPage() {
//   const queryClient = new QueryClient();

//   // Prefetch даних на сервері
//   await queryClient.prefetchQuery({
//     queryKey: ["notes"],
//     queryFn: () => fetchNotes({ page: 1, perPage: 12, search: "" }),
//   });

//   // Повертаємо клієнтський компонент з гідратацією
//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotesClient />
//     </HydrationBoundary>
//   );
// }

import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/app/notes/filter/[...slug]/api";

const Notes = async () => {
  const res = await fetchNotes();

  return <NoteList notes={res.notes} />;
};
export default Notes;
