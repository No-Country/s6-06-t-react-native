export const trasformDateADateString = (d) =>{
    let date = new Date(d)
    let numberDay = date.getDay()
    let day = date.getDate()
    let month = date.getMonth()
    switch (numberDay) {
        case 0:
            numberDay = 'Domingo' 
            break;
    
        case 1:
            numberDay = 'Lunes' 
            break;
    
        case 2:
            numberDay = 'Martes' 
            break;
    
        case 3:
            numberDay = 'Miercoles' 
            break;
    
        case 4:
            numberDay = 'Jueves' 
            break;
    
        case 5:
            numberDay = 'Viernes' 
            break;
        case 6:
            numberDay = 'Sabado' 
            break;       
        default:
            numberDay  = ''
            break;
    }

    switch (month) {
        case 0:
            month = 'Enero' 
            break;
    
        case 1:
            month = 'Febrero' 
            break;
    
        case 2:
            month = 'Marzo' 
            break;
    
        case 3:
            month = 'Abril' 
            break;
    
        case 4:
            month = 'Mayo' 
            break;
    
        case 5:
            month = 'Junio' 
            break;
        case 6:
            month = 'Julio' 
            break;       
        case 7:
            month = 'Agosto' 
            break;       
        case 8:
            month = 'Septiembre' 
            break;       
        case 9:
            month = 'Octubre' 
            break;       
        case 10:
            month = 'Noviembre' 
            break;       
        case 11:
            month = 'Diciembre' 
            break;       
        default:
            month  = ''
            break;
    }
    return `${numberDay} ${day} de ${month}`
}


export const ObtainHourDate = (d) =>{
    let date = new Date(d)
    let hour = date.getHours();
    let min = date.getMinutes();

    return `${hour}:${min} hs`
}