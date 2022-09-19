import { RequestHandler } from "express";
import { Blogs } from "../Models/Blogmodel";

export let deleteblog:RequestHandler=async(req,res)=>{
    
    const {id}=req.params;
    const deletedblog:Blogs|null=await Blogs.findByPk(id);
        await Blogs.destroy({
            where:{
                id:req.params.id
            }
        })
         return res.json({message:" Blog deleted successfully",data:deleteblog})       
}

// export let getallblogs:RequestHandler=async(req,res)=>{
//    const allblogs:Blogs[]=await Blogs.findAll({})
//    return res.send({data:allblogs})
// }

export let getallblogs:RequestHandler=async(req,res)=>{
    
        const allblogs=await Blogs.findAll({})
    // console.log(allblogs)
      res.send(allblogs)

   
}
export let singleblog:RequestHandler=async(req,res)=>{
    // const getid=req.params.id;
    const single=await Blogs.findOne({
        where:{
            id:req.params.id
        }
    })
    // console.log(single)
 return  res.send(single)
}

export let postBlogs:RequestHandler=async(req,res)=>{
    
        const postdata=req.body
        
            const createddata=await Blogs.create(postdata)
            // console.log(createddata)
       res.send(createddata)
   
   
    
   
}

export let updateBlog:RequestHandler=async(req,res)=>{
    const updatedata=req.body;
  const data=await Blogs.update(updatedata,{
    where:{
        id:req.params.id
    }
  })
console.log(data)
  res.send("updated successfully")
}