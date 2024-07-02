import {z} from 'zod'

export const signupInput=z.object({
    email:z.string().email(),
    name:z.string().optional(),
	password:z.string().min(6)
})

export const signinInput=z.object({
    email:z.string().email(),
    password:z.string()
})

export const blogpostInput=z.object({
    title:z.string().optional(),
    content:z.string().optional()
})

export const updateblogInput=z.object({
    id:z.number(),
    title:z.string().optional(),
    content:z.string().optional()
})

export type SignupInput=z.infer<typeof signupInput>
export type SigninInput=z.infer<typeof signinInput>
export type BlogpostInput=z.infer<typeof blogpostInput>
export type UpdateblogInput=z.infer<typeof updateblogInput>