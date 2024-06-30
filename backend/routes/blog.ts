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
	const user=await verify(header,c.env.JWT_SECRET)
	if(user){
        //@ts-ignore
        c.set("userId",user.id)
		await next();
	}else{
		c.status(403);
		return c.json({error:"unauthorized"})
	}
})

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

blogRouter.get('/',async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

    const body=await c.req.json();
    try{
        const blog=await prisma.post.findFirst({
            where:{
                id:body.id
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        c.status(417);
        return c.json({error:"error in getting data"})
    }
})

// pagination==>means see the first 10 or 15 posts which are capable in 1 page
blogRouter.get('/bulk',async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

    const blogs=await prisma.post.findMany();

    return c.json({
        blogs
    })
})