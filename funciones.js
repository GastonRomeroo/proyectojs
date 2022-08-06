class Producto{
    constructor(id,nombre, precio, iva) {
        this.id = id
        this.nombre = nombre;
        this.precio   =parseFloat( precio);
        this.iva  =parseFloat(iva);

    }
    sumarIva () {
        this.precio = this.precio * this.iva;
    }    
}
const listaProducto = [];
listaProducto.push(new Producto("1","Carpa canadiese 6 personas",165035,1.21));
listaProducto.push(new Producto("2","Linterna Spinit HL800R Frontal/Mano",6198,1.21));
listaProducto.push(new Producto("3","Navaja Trento Hunter Light 1.20",6500,1.105));
listaProducto.push(new Producto("4","Mochila Bamboo Adventure 70 Lts",45000,1.21));
listaProducto.push(new Producto("5","Vaso Térmico Waterdog AB-2035",6300,1.21));
listaProducto.push(new Producto("6","Linterna Ledlenser MT6 600 Lumens",25300,1.21));
listaProducto.push(new Producto("7","Termo Bala Lexus 1 lt.",6300,1.21));
listaProducto.push(new Producto("8","Termo Contigo De Acero Inoxidable 1.1 Lts",18500,1.21));
listaProducto.push(new Producto("9","Carpa Baño Waterdog Tenth Bath",120000,1.21));
listaProducto.push(new Producto("10","Caña Seabay Tournament TRMSS 4262 S (Frontal) 4.26 Mts",65300,1.21));

    for (const producto of listaProducto) {
        producto.sumarIva();
    };

    for (let i = 0; i<listaProducto.length ;i++){
        let nose1 = listaProducto[i].nombre ;
        alert(nose1);
    }















// let realizarCompra = prompt ("Que producto le gustaria comprar \n 1-Bandolera Milan \n-2 Mochila California \n-3 Cinto Melania \n-4 Tobillera");
// let indice;
// for (let producto of productos) {
//     if (producto.nombre == realizarCompra){
//         indice = productos.indexOf(producto);
//         console.log (indice);
//         alert( "Elegiste "+ productos[indice].descripcion + ": " + productos[indice].nombre + " su precio es $ " + productos[indice].precio);
//     } 

// }