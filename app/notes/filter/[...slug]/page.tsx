import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import { fetchNotes } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";

// interface Props {
//   params: Promise<{ slug: string[] }>;
// }
interface Props {
  params: {
    slug: string[];
  };
}

const FilterPage = async ({ params }: Props) => {
  const { slug } = params;

  console.log(slug);

  const res = await fetchNotes(
    slug[0] === ALL_NOTES ? undefined : slug[0],
    slug[1]
  );

  return (
    <>
      <SearchBox categoryid={slug[0]} />
      <NoteList notes={res.notes} />
    </>
  );
};

export default FilterPage;
