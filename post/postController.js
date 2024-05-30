import { PostModel } from "./postModel.js";

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.findAll();
    return res.json(posts);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error al obtener las publicaciones" });
  }
};

const createPost = async (req, res) => {
  try {
    const { usuario, url, descripcion } = req.body;

    if (!usuario || !url || !descripcion) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(url)) {
      return res
        .status(400)
        .json({ error: "La URL proporcionada no es válida" });
    }

    const post = await PostModel.create({ usuario, url, descripcion });
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al crear la publicación" });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar que el ID contenga tanto números como letras
    const idRegex = /^[0-9a-zA-Z]+$/;
    if (!idRegex.test(id)) {
      return res
        .status(400)
        .json({ error: "El ID debe contener tanto números como letras" });
    }

    const post = await PostModel.update(id);
    return res.json(post);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error al actualizar la publicación" });
  }
};

export const PostController = {
  getPosts,
  createPost,
  updatePost,
};
