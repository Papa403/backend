require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.TEST_MONGODB_URI

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// Note.find({ important: true }).then(result => {
//   result.forEach(note => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })// for retrieving notes

const note = new Note({
  content: 'test note 2',
  important: false,
})//part 1 of creating new notes

note.save().then(() => {
  console.log('note saved')
  mongoose.connection.close()
})//part 2 of creating new notes