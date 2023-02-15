const { User } = require('../models');
module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.on('enviar-mensaje', (payload, callback) => {
          callback(200);
          socket.broadcast.emit('enviar-mensaje', payload);
      });
      socket.on('online-client', async(payload) => {
          const { uid } = payload;
          try {
            await  User.findByIdAndUpdate(uid, { isOnline: true,socketId:socket.id });
          } catch (error) {
              console.log(error);
          }
      });
    
      socket.on('disconnect', async() => {
        try {
          await User.updateOne({socketId:socket.id},
            { isOnline: false,lastSeen:Date.now(),socketId:null })
        } catch (e) {
          console.log(e);
        }
    });
      // // Send all messages to the client
      // const emitNotes = async () => {
      //   const notes = await Note.find();
      //   socket.emit("server:loadnotes", notes);
      // };
      // emitNotes();
      // socket.on("client:newnote", async (data) => {
      //   const newNote = new Note(data);
      //   const savedNote = await newNote.save();
      //   io.emit("server:newnote", savedNote);
      // });
      // socket.on("client:deletenote", async (noteId) => {
      //   await Note.findByIdAndDelete(noteId);
      //   emitNotes();
      // });
      // socket.on("client:getnote", async (noteId) => {
      //   const note = await Note.findById(noteId);
      //   socket.emit("server:selectednote", note);
      // });
      // socket.on("client:updatenote", async (updatedNote) => {
      //   await Note.findByIdAndUpdate(updatedNote._id, {
      //     title: updatedNote.title,
      //     description: updatedNote.description,
      //   });
      //   emitNotes();
      // });
      
  });
}
