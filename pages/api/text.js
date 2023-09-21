// import {writeFile} from 'fs/promises'
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
export default async function handler(req, res) {
  if(req.method === 'POST'){
    // console.log(req.body)
    // const file = req.body;
    // // const id = await createItem(file);
    // // console.log(id)
    // // const byte = await file.arrayBuffer();
    // const byte = await readAsArrayBuffer(file)
    // const buffer = Buffer.from(byte);
    // const path = `./public/${file.filename}`;
    // await writeFile(buffer , path);
    // res.status(200).json({"message" : "hello" })


     // Initialize formidable
  const form = new formidable.IncomingForm(req.body);

  // Set the public folder path where you want to save the image
  const publicFolderPath = path.join(process.cwd(), 'public');

  form.uploadDir = publicFolderPath; // Set the upload directory

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    // Check if 'file' field exists and it's an image
    const uploadedFile = files.file;
    if (!uploadedFile || !uploadedFile.type.startsWith('image/')) {
      return res.status(400).json({ error: 'Invalid or missing file' });
    }

    // Generate a unique filename to avoid conflicts
    const uniqueFileName = Date.now() + '-' + uploadedFile.name;

    // Move the file to the public folder with the unique filename
    fs.renameSync(uploadedFile.path, path.join(publicFolderPath, uniqueFileName));

    // Provide the URL of the saved image
    const imageUrl = `/${uniqueFileName}`;

    res.status(200).json({ imageUrl });
  });




  }
}