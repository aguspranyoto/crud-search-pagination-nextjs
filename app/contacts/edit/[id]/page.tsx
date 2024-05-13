import UpdateForm from "@/components/UpdateForm";
import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";
import React from "react";

const UpdatePage = async ({ params }: { params: { id: string } }) => {
  const data = await getContactById(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Contact</h1>
      <UpdateForm data={data} />
    </div>
  );
};

export default UpdatePage;
