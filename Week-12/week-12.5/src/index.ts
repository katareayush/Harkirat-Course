import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username:string , password:string, firstName:string, lastName:string){    
    const respone = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
            
        }
    })
    console.log(respone);
}

insertUser("test1", "test1", "test1", "test1")