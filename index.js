const BASE_URL = 'https://fakestoreapi.com/';

const [method, target, ...args] = process.argv.slice(2);

//funcion principal

async function run() {


if (!method || !target ) {
    console.error('Faltan Argumentos');
    return;
}

//endoints

if (method === 'GET' && target === 'products') {
    await getAllProducts();
}
else if (method === 'GET' && target.startsWith('products/')) {
    const productId = target.split('/')[1];
    await getProductsById(productId);
}
else if (method === 'POST' && target === 'products') {
    await createProduct(args);
}
else if (method === 'DELETE' && target.startsWith('products/')) {
    const productId = target.split('/')[1];
    await deñeteProduct(productId);
}
else {
    console.log('Comando incorrecto.')
}
}

//metodo para ver todos los productos

async function getAllProducts(){
    try {
        console.log('Cargando productos...');
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        console.clear();
        console.log('TODOS LOS PRODUCTOS');
        console.table(data.map(({ id, title, price, category }) => ({ id, title, price, category })));
      } catch (error) {
        console.error('NO se pudo obtener productos', error.message);
      }
}


