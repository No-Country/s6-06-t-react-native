// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const send = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

//-INDICA QUE EL USER ESTA EN LINEA
//REMPLAZAR POR EL DEL USUSARIO REAL
socket.emit('online-client', {
    uid: '63ed427cd971ddc453a953fb'
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});

socket.on('post-new', (payload) => {
    console.log(payload, 'NEW POST');
});
//-ESCUCHA NUEVOS POST EN CANAL QUE PARTICIPA
///REMPLAZAR POR LOS USUARIO
const channels = ['63ed42abd971ddc453a95403', '63ece8a8c731b6a03ab8c7c1'];

channels.map((channel, i) => {
    socket.on(`${channel}-posts`, (payload) => {
        console.log(payload, 'CHANNEL' + (i + 1));
    });
});

//-CON UN INTERSECCION OBSERBER DEBERIAN EMITIR QUE ipost.id ESTA LEIDO
//REEMPLAZAR UID
const id = '63ed1bc5cd8eb54c3c35b113';

socket.emit('post-read-client', {
    postRead: id,
    uid: '63ed427cd971ddc453a953fb'
});

socket.on('reaction-new-in-post', (payload) => {
    console.log(payload, 'NEW REACTION');
});

socket.on('comment-new', (payload) => {
    console.log(payload, 'NEW COMENNT');
});

send.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje
    };

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    });
});
