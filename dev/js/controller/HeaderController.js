class HeaderController {
    constructor(header) {
        this.bars = header.querySelector('#bars')
        this.nav = header.querySelector('nav')

        this.initializeEvents()
        this.comprobarResolucion()
        window.addEventListener("resize", this.comprobarResolucion(this.getHtml()));
        this.whatPage()
    }

    initializeEvents() {
        this.bars.addEventListener('click', () => {
            this.bars.children[0].classList.toggle('bars_active');
            this.bars.children[1].classList.toggle('d-none');
            this.bars.children[2].classList.toggle('bars_active');
            this.active();
        });
    }

    /**
     * se extraera la estructura html asignada dentro de 'getHTML()' de la propia clase la cual sera
     *
     */
    active() {
        this.nav.innerHTML = this.getHtml();
        this.nav.classList.toggle('bars-active');
        if (!this.nav.classList.contains('bars-active')) {
            this.nav.innerHTML = '';
        }
    }

    /**
     * si la resolucion es >= 768px se insertara en el innerHTML de nav el html de la lista de opciones.
     * Si no nav.innerHTML = ''
     * El codigo de este metodo se reduce a una declaracion ternaria
     */
    comprobarResolucion(html) {
        this.nav.innerHTML = window.innerWidth >= 768 ? html : '';

    }

    /**
     * La funcion principal de este metodo es distinguir a partir de un nombre = $opt si el archivo html cargado
     * por el cliente es = alguno de las paginas disponibles en nuestra pagina . devolviendo el nombre String de la clase
     * de estilos 'active'. de este modo distinguiremos si estamos en INICIO, DESCARGAR, NOTICIAS O NOSOTROS
     * @param nombre de la opcion del menu en formato STRING
     */
    whatPage(opt) {
        const pathName = document.location.pathname;
        const regex = /\/([^/]+)\.html$/;
        let match = pathName.match(regex)[1].toUpperCase();

        return match===opt ? 'li-active' : '';
    }

    getHtml() {
        return`<ul class="list-unstyled d-flex">
            <li class="${this.whatPage('INDEX')}"><a>INICIO</a></li>
            <li class="${this.whatPage('DOWNLOAD')}"><a>DESCARGAR</a></li>
            <li class="${this.whatPage('NEWS')}"><a>NOTICIAS</a></li>
            <li class="${this.whatPage('WE')}"><a>NOSOTROS</a></li>
         </ul>`;
    }
}