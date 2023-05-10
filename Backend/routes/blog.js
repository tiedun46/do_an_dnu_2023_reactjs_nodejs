const blogControllers = require("../controllers/blogControllers");
const middlewareControllers = require("../controllers/middlewareControllers");

const router = require("express").Router();

//ADD BLOG
router.post("/",middlewareControllers.vertifyTokenBlogger, blogControllers.addBlog);

//GET ALL BLOG
router.get("/", blogControllers.getAllBlog);

//GET BLOG
router.get("/:id", blogControllers.getBlog);

//SEARCH BLOG
router.post("/search", blogControllers.searchBlog);

//UPDATE BLOG
router.put("/update/:id",middlewareControllers.vertifyTokenBlogger, blogControllers.updateBlog);

//DELETE BLOG
router.delete("/delete/:id",middlewareControllers.vertifyTokenBlogger, blogControllers.deleteBlog);

module.exports = router;