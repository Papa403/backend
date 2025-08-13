const mongoose = require('mongoose')

if(process.argv.length < 3) {
  console.log('give pw as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.fnkkggn.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({important: true}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})// for retrieving notes

// const note = new Note({
//   content: 'humma humma',
//   important: false,
// })//part 1 of creating new notes

// note.save().then(result => {
//   console.log('note saved')
//   mongoose.connection.close()
// })//part 2 of creating new notes