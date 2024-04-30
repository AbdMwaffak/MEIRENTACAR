// const videoStorage = multer.diskStorage({
//   destination: 'videos', // Destination to store video 
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '_' + Date.now() 
//        + path.extname(file.originalname))
//   }
// });

// const videoUpload = multer({
//   storage: videoStorage,
//   limits: {
//   fileSize: 10000000 // 10000000 Bytes = 10 MB
//   },
//   fileFilter(req, file, cb) {
//     // upload only mp4 and mkv format
//     if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) { 
//        return cb(new Error('Please upload a video'))
//     }
//     cb(undefined, true)
//  }
// })

// router.post('/uploadVideo', videoUpload.single('video'), (req, res) => {
//   res.send(req.file)
// }, (error, req, res, next) => {
//    res.status(400).send({ error: error.message })
// })