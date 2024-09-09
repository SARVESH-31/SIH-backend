const { Prismaclient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main(){

const newUser = await prisma.user.create({ 
    data: {

    email: 'example@email.com', 
    name: 'John Doe',

    },

});

    console.log('New user created:', newUser);
}

main()

.catch(e => {
    throw e
})

.finally(async () => { 
    await prisma. $disconnect();
});
