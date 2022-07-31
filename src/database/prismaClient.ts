import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();


async function main() {
    createWeek();
    createCategory();
}

async function createWeek() {
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

async function createCategory() {
    const jobCategories = await prisma.job_Categories.findFirst();
    if (jobCategories) return
    await prisma.job_Categories.createMany({
        data: [
            {
                name: 'Cabelo',

            },
            {
                name: 'Barba'
            },
            {
                name: 'Estéticas'
            },
            {
                name: 'Maquiagem'
            },
            {
                name: 'Massagem'
            },
            {
                name: 'Sobrancelhas e cílios'
            },
            {
                name: 'Unhas'
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