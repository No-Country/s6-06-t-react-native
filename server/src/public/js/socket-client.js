
// Referencias del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const send  = document.querySelector('#btnEnviar');


const socket = io();



socket.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';

});

socket.on('disconnect', () => {
    lblOnline.style.display  = 'none';
    lblOffline.style.display = '';
});


socket.on('enviar-mensaje', (payload) => {
    console.log( payload )
})

socket.on('post-new', (payload) => {
    console.log( payload,"NEW POST" )
})


socket.on('post-count', (payload) => {
    console.log( payload,"COUNT" )
})


const emitCountPost = async (model,channel) => {
    const posts = await model.find(channel);
    socket.emit("server:loadnotes", posts.length);
    };
    

socket.on('reaction-new-in-post', (payload) => {
    console.log( payload,"NEW REACTION" )
})

socket.on('comment-new', (payload) => {
    console.log( payload,"NEW COMENNT" )
})


send.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje
    }
    
    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id );
    });

});