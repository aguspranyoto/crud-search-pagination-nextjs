import { prisma } from "./prisma";

const ITEM_PER_PAGE = 5;

export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEM_PER_PAGE;

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const contacts = await prisma.contact.findMany({
      skip: offset,
      take: ITEM_PER_PAGE,
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    throw new Error("Failed to get contacts");
  }
};

export const getContactById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id,
      },
    });
    return contact;
  } catch (error) {
    throw new Error("Failed to get contact");
  }
};

export const getContactsPages = async (query: string) => {
  try {
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / ITEM_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to get contacts");
  }
};
