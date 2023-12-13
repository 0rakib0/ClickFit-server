const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5000



app.use(express.json())

app.use(cors())


const storage = multer.diskStorage({
    destination: './upload_images',  // Specify your upload folder
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
    console.log('Image uploaded:', req.file);
    res.status(200).send('Image uploaded successfully.');
  });


app.get('/helth', (req, res) => {
    res.send("FitClick Running............")
})

app.listen(port, () => {
    console.log(`My server running on ${port}`)
})
