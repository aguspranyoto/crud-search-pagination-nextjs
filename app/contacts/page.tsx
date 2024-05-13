import { CreateButton } from "@/components/Buttons";
import ContactTable from "@/components/ContactTable";
import Search from "@/components/Search";

const ContactsPage = async ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="max-w-screen-md mx-auto mt-5 ">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} page={currentPage} />
    </div>
  );
};

export default ContactsPage;
