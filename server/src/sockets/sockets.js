
module.exports= (io) => {
  io.on("connection", (socket) => {
    
    console.log("SOCKET-NEW CLIENT:", socket.id);

    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        callback( 200);

        console.log(payload)
      
          socket.broadcast.emit('enviar-mensaje', payload );
      
    })

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

    socket.on("disconnect", () => {
      console.log("SOCKET-DISCONECTED CLIENT:",socket.id);
    });
  });
};





// (socket) => {
//   console.log('Cliente conectado' );

//   socket.on('disconnect', (socket) => {
//         console.log('Cliente desconectado', socket.id );
//     });

//     socket.on('enviar-mensaje', ( payload, callback ) => {
        
//         const id = 123456789;
//         callback( id );

//         socket.broadcast.emit('enviar-mensaje', payload );

//     })
// };