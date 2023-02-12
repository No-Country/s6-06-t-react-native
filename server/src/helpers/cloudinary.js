const cloudinary = require("cloudinary").v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const updateIMG = async (document, file) => {

  //FALTA AÑADIR EN CASO QUE PROVENGA DE POST
  if (document.img_avatar.includes("cloudinary.com")) {
    const urlSplited = document.img_avatar.split("/");
    const name = urlSplited[urlSplited.length - 1];
    const [id] = name.split(".");
    cloudinary.uploader.destroy(id);
  }

  const { tempFilePath } = file;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
  document.img_avatar = secure_url;

  return document;
};

const uploadIMG = async (document, file) => {

  const { tempFilePath } = file;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

  document.attached.push(secure_url)
  return document;

}


module.exports = {
  updateIMG,
  uploadIMG
};
