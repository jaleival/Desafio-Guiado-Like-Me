import { Router } from "express";
import { PostController } from "./postController.js";

const router = Router();

router.get("/", PostController.getPosts);
router.post("/", PostController.createPost);
router.put("/:id", PostController.updatePost);

export default router;
