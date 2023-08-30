import {connect} from "@/dbconfig/dbconfig";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user.models";
import bcryptjs from 'bcryptjs'

connect()
export async function POST(request: NextRequest) {
    try {
       const requestBody = await request.json()
       console.log(requestBody)
       const {username, password, email} = requestBody
       const user = await User.findOne({email})
       if(user) {
        return NextResponse.json({error: 'user already exists'}, {status:400})
       }
       const salt = await bcryptjs.genSalt(10)
       const hashedPassword = await bcryptjs.hash(password, salt)

       const newUser = new User({
        username,
        email,
        password: hashedPassword
       })
       const savedUser = await newUser.save()
       console.log(savedUser)
       return NextResponse.json({message: 'user created successfully', success: true, savedUser})

    } catch (error: any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}