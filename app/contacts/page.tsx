import { CreateButton } from "@/components/Buttons";
import ContactTable from "@/components/ContactTable";
import Search from "@/components/Search";

const ContactsPage = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5 ">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable />
    </div>
  );
};

export default ContactsPage;
