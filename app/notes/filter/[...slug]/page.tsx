import NoteList from "@/components/NoteList/NoteList";
import Pagination from "@/components/Pagination/Pagination";
import SearchBox from "@/components/SearchBox/SearchBox";
import { fetchNotes } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string[] }>;
}
// interface Props {
//   params: {
//     slug: string[];
//   };
// }

const FilterPage = async ({ params }: Props) => {
  const { slug } = await params;

  console.log(slug);

  const tag = slug[0] === ALL_NOTES ? undefined : slug[0];
  const title = slug[1] || "";

  const res = await fetchNotes({ tag, title });

  return (
    <>
      <SearchBox categoryid={slug[0]} />
      <NoteList notes={res.notes} />

      {res.totalPages > 1 && (
        <Pagination
          currentPage={1}
          totalPages={res.totalPages}
          onPageChange={(page) => console.log("Page:", page)}
        />
      )}
    </>
  );
};

export default FilterPage;
