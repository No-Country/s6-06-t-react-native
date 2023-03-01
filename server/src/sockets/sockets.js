const { User, IsRead } = require('../models');
module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.on('enviar-mensaje', (payload, callback) => {
          callback(200);
          socket.broadcast.emit('enviar-mensaje', payload);
      });


      socket.on('online-client', async(payload) => {
          const { uid } = payload;
          try {
            const user=await  User.findByIdAndUpdate(uid, 
              { isOnline: true,socketId:socket.id },
              {new:true})
              .populate("channels")

          } catch (error) {
              console.log(error);
          }
      });


      socket.on('post-read-client', async(payload) => {
        const { postRead ,uid} = payload;
        try {
          const read=await  new IsRead({
            uid,
            doc:postRead
          }).save()

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
      
      
  });
}
