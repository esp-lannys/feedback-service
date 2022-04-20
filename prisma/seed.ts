import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

async function main() {
  const feedback1 = await prisma.feedbacks.upsert({
    where: { id: 'b4c3873c-787c-45bc-a26d-2d5a8c665758' },
    update: {},
    create: <any>{
      id: 'b4c3873c-787c-45bc-a26d-2d5a8c665758',
      title: 'Feedback 1',
      description: 'Description of Feedback 1',
      is_deleted: false,
      images: [
        'https://blahblah.com/picture1.jpg',
        'https://blahblah.com/picture2.jpg',
        'https://blahblah.com/picture3.jpg',
      ],
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const feedback2 = await prisma.feedbacks.upsert({
    where: { id: '3be73109-9054-4433-881b-5e3763d592d6' },
    update: {},
    create: <any>{
      id: '3be73109-9054-4433-881b-5e3763d592d6',
      title: 'Feedback 2',
      description: 'Description of Feedback 2',
      is_deleted: false,
      images: [
        'https://blahblah.com/picture1.jpg',
        'https://blahblah.com/picture2.jpg',
        'https://blahblah.com/picture3.jpg',
      ],
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const feedback3 = await prisma.feedbacks.upsert({
    where: { id: '578d8700-cfef-49c7-85de-979f213a68c4' },
    update: {},
    create: <any>{
      id: '578d8700-cfef-49c7-85de-979f213a68c4',
      title: 'Feedback 3',
      description: 'Description of Feedback 3',
      is_deleted: false,
      images: [
        'https://blahblah.com/picture1.jpg',
        'https://blahblah.com/picture2.jpg',
        'https://blahblah.com/picture3.jpg',
      ],
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const feedback4 = await prisma.feedbacks.upsert({
    where: { id: 'c834550f-6c0b-4afc-9126-0e4fb4dc0b31' },
    update: {},
    create: <any>{
      id: 'c834550f-6c0b-4afc-9126-0e4fb4dc0b31',
      title: 'Feedback 4',
      description: 'Description of Feedback 4',
      is_deleted: false,
      images: [
        'https://blahblah.com/picture1.jpg',
        'https://blahblah.com/picture2.jpg',
        'https://blahblah.com/picture3.jpg',
      ],
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  const feedback5 = await prisma.feedbacks.upsert({
    where: { id: '1ffd575f-b432-4743-b461-b2bbd0aeefc2' },
    update: {},
    create: <any>{
      id: '1ffd575f-b432-4743-b461-b2bbd0aeefc2',
      title: 'Feedback 5',
      description: 'Description of Feedback 5',
      is_deleted: false,
      images: [
        'https://blahblah.com/picture1.jpg',
        'https://blahblah.com/picture2.jpg',
        'https://blahblah.com/picture3.jpg',
      ],
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
