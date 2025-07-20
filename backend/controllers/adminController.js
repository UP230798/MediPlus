import validator from 'validator'
import bycrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js"
import jwt from 'jsonwebtoken'



// API para agregar médicos

const addDoctor = async (req,res) => {

    try {

        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // verificando la información para añadir médicos
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success:false,message:"Información Incompleta"})
        }

        // validación de formato de email
        if(!validator.isEmail(email)) {
            return res.json({success:false,message:"Ingrese un Email válido"})
        }

        // validación de contraseña fuerte
        if(password.lenght < 8) {
            return res.json({success:false,message:"Por favor ingrese una contraseña más larga"})
        }

        // hash del password
        const salt = await bycrypt.genSalt(10)
        const hashedPassword = await bycrypt.hash(password, salt)

        //Subir imagen a cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true,message:"Médico Añadido"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const loginAdmin = async (req,res) => {
    try {
        const {email,password} = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})

        } else {
            res.json({success:false,message:"Credenciales Inválidas"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export {addDoctor, loginAdmin}