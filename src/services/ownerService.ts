'use server';
import prisma from "@/lib/prisma";

export const getOwnersWithTeams = async () => {
  return prisma.owner.findMany({
    include: {
      teams: {
        include: {
          team: true,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
  });
};

export const getTeamsWithOwners = async () => {
  return prisma.team.findMany({
    include: {
      seasons: {
        include: {
          owner: true,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
  });
};
