import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { blogpostInput, updateblogInput } from "rathin25";
// import { blogpostInput, updateblogInput } from "../../common/src";


export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>();

// middleware 
blogRouter.use('/*',async (c,next)=>{
	// get the header
	// verify the header
	// if the header is correct,we proceed
	// if not return 403 
	const header=c.req.header("authorization") ||""
	const user=await verify(header,c.env.JWT_SECRET) as {id:string}
	if(user.id){
        c.set("userId",user.id)
		await next();
	}else{
		c.status(403);
		return c.json({error:"unauthorized"})
	}
})

// blogRouter.use('/*', async (c, next) => {
// 	const header = c.req.header("authorization") || "";
// 	const token = header.split(" ")[1]

// 	try {
// 		const response = await verify(token, c.env.JWT_SECRET);
// 		if (response.id) {
// 			c.set("userId", response.id);
// 			await next()
// 		} else {
// 			c.status(403);
// 			return c.json({ error: "unauthorized" })
// 		}
// 	} catch (e) {
// 		c.status(403);
// 		return c.json({ error: "unauthorized" })
// 	}

// })

// create a blog and put in the db
blogRouter.post('/',async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

    const userId=c.get('userId')
    const body=await c.req.json();
    const {success}=blogpostInput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({error:"Invalid inputs"})
    }
    try{
        const blog=await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId: userId

            }
        })
        return c.json({
            id:blog.id
        })
    }catch(e){
        c.status(411);
        return c.json({error:"error in post"})
    }

})

// upadte the blog using id 
blogRouter.put('/',async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

    const body=await c.req.json();
    const {success}=updateblogInput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({error:"Invalid inputs to update the blog"})
    }
    try{
        const blog=await prisma.post.update({
            where:{
                id:body.id
            },
            data:{
                title:body.title,
                content:body.content,
            }
        })
        return c.json({
            id:blog.id
        })
    }catch(e){
        c.status(417);
        return c.json({error:"error in updating data"})
    }
})

// get the blogs
// pagination==>means see the first 10 or 15 posts which are capable in 1 page
blogRouter.get('/bulk',async(c)=>{
    // console.log(bulk)
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())
    
    const blogs=await prisma.post.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
        return c.json(
                {blogs}
        )
})

// get the secific blog 
blogRouter.get('/:id',async(c)=>{
    const id=c.req.param('id')

    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

   // const body=await c.req.json();
        const blog=await prisma.post.findFirst({
            where:{
                id:Number(id)
            },
            select:{
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
    
        return c.json(
            {blog}
        )
})

