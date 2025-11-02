import { getCategories } from "@/lib/api";
import { ALL_NOTES } from "@/lib/constants";
import Link from "next/link";
import css from "./SidebarNotes.module.css";
import { Category } from "@/types/note";

const SidebarNotes = async () => {
  const categories = await getCategories();

  return (
    <div>
      <h2>Categories</h2>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/${ALL_NOTES}`} className={css.menuLink}>
            All
          </Link>
        </li>
        {categories.map((item) => (
          <li key={item.id} className={css.menuItem}>
            <Link href={`/notes/filter/${item.id}`} className={css.menuLink}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNotes;
