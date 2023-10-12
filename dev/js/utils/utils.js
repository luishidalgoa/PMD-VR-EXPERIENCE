function cargarHTML(node ,pathName) {
    const rute = './'+pathName+'.html'
    fetch(rute)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo HTML');
            }
            return response.text(); 
        })
        .then(data => {
            node.innerHTML = data; 
        })
        .catch(error => {
            console.error('Error:', error);
        });
}