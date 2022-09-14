import { Router } from "express";

import { deleteblog,getallblogs, postBlogs, singleblog, updateBlog } from "../controllers/blogcontroller";

const router=Router();

router.get("",getallblogs);
router.delete("/:id",deleteblog)
router.get("/:id",singleblog)
router.post("",postBlogs)
router.put("/:id",updateBlog)
export default router;