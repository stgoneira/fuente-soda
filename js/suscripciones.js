window.addEventListener("DOMContentLoaded", (loadEvent) => {
    recuperarDatosSuscriptores();
});

function recuperarDatosSuscriptores() {
    const urlSupabase   = 'https://hqkjyiudhohhocdkuslx.supabase.co';
    const apiKey        = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhxa2p5aXVkaG9oaG9jZGt1c2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ2NzE4NjcsImV4cCI6MTk2MDI0Nzg2N30.tBc1QZXN_OVFAaP8QDg-TxrTMgEBz64oGuhkt__0aJY';
    const apiURL        = '/rest/v1/suscriptores'; // reemplazar con el nombre de su tabla 

    const url = urlSupabase + apiURL; // url = https://hqkjyiudhohhocdkuslx.supabase.co/rest/v1/suscriptores
    const resultadoFetch = fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
            "authorization": "Bearer "+apiKey
        }        
    }).then( response => {
        if( response.ok ) {
            const r = response.json();
            return r;
        } else {
            console.error("Ocurrió un error al invocar la API de Supabase");
        }
    }).then( data => {
        mostrarDatosEnTabla(data);
    }).catch( err => console.dir(err) ) // se invoca catch() cuando hay un error en la red 
    ;
}

function mostrarDatosEnTabla(data) {
    data.forEach( suscriptor => {
        const row = `
        <tr>
            <td>${suscriptor.id}</td>
            <td>${suscriptor.created_at}</td>
            <td>${suscriptor.nombre}</td>
            <td>${suscriptor.email}</td>            
            <td>
                <a href="#">editar</a>
                <a href="#">eliminar</a>
            </td>
        </tr>
        `
        $("table tbody").append(row);
    });
}