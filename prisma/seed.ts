import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
    await prisma.tarefa.deleteMany({});

    const tarefa = await prisma.tarefa.create({
        data:{
            titulo: 'Tarefa unica',
        }
    });
    console.log(tarefa);

    const tarefas = await prisma.tarefa.createManyAndReturn({
        data: [
            {
                titulo: 'Criar projeto Nestjs',
                descricao: "Criar projeto Nestjs e subir no git",
                concluido: true,
            },
            {
                titulo: 'Criar endpoints de CRUD para tarefas',
                descricao: "asds",
                concluido: true,
            },
            {
                titulo: 'Adicionar mecanismo de persistência',
                descricao: 'prisma orm https://www.prisma.io/docs/'
            },
        ],
    });

    console.log(tarefas);
};

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
