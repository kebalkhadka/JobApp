import { Company } from "../models/company.model.js";
import mongoose from "mongoose";


export const registerCompany = async(req,res)=>{
    try{
       const {name} = req.body;
       if(!name){
        return res.status(400).json({
            message:"Company name is required",
            success:false
        });
       }
       let company = await Company.findOne({name:name});
       if(company){
        return res.status(400).json({
            message:"you can't register same company",
            success:false
        })
       };
     company= await Company.create({
        name:name,
        userId:req.id
     })

     return res.status(201).json({
        message:"company registered successfully",
        company,
        success:true
     })

    }catch(error){
        console.log(error);
    }
}


export const getCompany = async(req,res)=>{
    try{
         const userId = req.id;
         const companies = await Company.find({userId});
         if(!companies){
            return res.status(404).json({
                message:"companies not found",
                success:false
            })
         }
         return res.status(200).json({
            companies,
            success:true
         })
    }catch(error){
        console.log(error);
    };
}

export const getCompanyById = async (req, res) => {
    try {
        const { id } = req.params; // Extract 'id' from request params

        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid company ID format",
                success: false
            });
        }

        // Find company by ID (corrected)
        const company = await Company.findById(id);

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }

        return res.status(200).json({
            company,
            success: true
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

export const updateCompany = async(req,res)=>{
    try{
        const {name,description,website,location} = req.body;
   
        const file = req.file;
    //     //cloudinary

    //    const fileUri = getDataUri(file);
    //    const cloudResponse = await cloudinary.uploader.upload(fileUri.content )
    //    const logo = cloudResponse.secure_url;

        const updateData = {name,description,website,location};

        const company = await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});

        if(!company){
            res.status(404).json({
                message:"Company not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"company information updated",
            success:true
        })
    }catch(error){
        console.log(error);
    }
}