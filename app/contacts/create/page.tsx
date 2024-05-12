import CreateForm from "@/components/CreateForm";
import React from "react";

const CreatePage = () => {
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
      <CreateForm />
    </div>
  );
};

export default CreatePage;
