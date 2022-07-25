import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();


async function main() {
    const week = await prisma.weeks.findFirst();
    if (week) return;
    await prisma.weeks.createMany({
        data: [
            {
                name: 'monday',
                id: 1
            },
            {
                name: 'tuesday',
                id: 2
            },
            {
                name: 'wednesday',
                id: 3
            },
            {
                name: 'thursday',
                id: 4
            },
            {
                name: 'friday',
                id: 5
            },
            {
                name: 'saturday',
                id: 6
            },
            {
                name: 'sunday',
                id: 7
            },

        ]
    })
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })