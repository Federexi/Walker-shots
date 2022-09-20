export const products = [
    {
        id: 1,
        image: "https://baltimore.com.ar/img/articulos/4188.png",
        title: "Vino Abras Malbec 750cc",
        description: "Malbec de expresión profunda y típica de los vinos de altura. Olfato: frutos negros y rojos maduros, trazos herbales y de pimientos. Boca: es jugoso y vibrante. Paladares firmes y regusto herbal.",
        price: 2.512,
        stock: 8,
        initial: 1,
        categoryId: 1,
        category: {
            name: "vinos",
            id: 1
        }
    },
    {
        id: 2,
        image: "https://baltimore.com.ar/img/articulos/3033.png",
        title: "Alfa Crux Malbec 750cc",
        description: "Blend de Malbec Gualtallary 40% Malbec Los Chacayes 30% Malbec Paraje Altamira 30%, fermentado en piletas y criado en barricas nuevas de roble francés durante 24 meses. De color rojo intenso con destellos violáceos, elegante, con taninos maduros, fácil de tomar y de final persistente.",
        price: "4.700",
        stock: 10,
        initial: 1,
        categoryId: 1,
        category: {
            name: "vinos",
            id: 1
        }
    },
    {
        id: 3,
        image: "https://baltimore.com.ar/img/articulos/101.jpg",
        title: "Alma Negra Tinto 750cc",
        description: "De color rojo carmín, muy brillante. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias.",
        price: "5.000",
        stock: 4,
        initial: 1,
        categoryId: 1,
        category: {
            name: "vinos",
            id: 1
        }
    },
    {
        id: 4,
        image: "https://baltimore.com.ar/img/articulos/4315.png",
        title: "Alpa Cabernet Sauvignon 750cc",
        description: "Taninos perfectamente redondeados que permiten expresar en el paladar medio una explosión de fruta aún mayor a la percibida en nariz.",
        price: "1.900",
        stock: 2,
        initial: 1,
        categoryId: 1,
        category: {
            name: "vinos",
            id: 1
        }
    },
    {
        id: 5,
        image: "https://baltimore.com.ar/img/articulos/188.jpg",
        title: "Johnnie Walker Gold 750cc",
        description: "La mezcla perfecta para una celebración indulgente. Lujoso, cremoso y con notas de miel, es un gran tributo a la unión armoniosa entre los whiskies de Speyside y Highland con vestigios de madera ahumada de la costa oeste.",
        price: "14.100",
        stock: 3,
        initial: 1,
        categoryId: 2,
        category: {
            name: "espirituosas",
            id: 2
        }
    },
    {
        id: 6,
        image: "https://baltimore.com.ar/img/articulos/2104.jpg",
        title: "Cruzat Millesime 750cc",
        description: "cruzat millésime es el resultado de años de cuidado y pasión en cada detalle de su elaboración. es reflejo de la gran dedicación puesta en el trabajo diario para encontrar la mejor expresión de nuestro terroir.",
        price: "5.700",
        stock: 12,
        initial: 1,
        categoryId: 3,
        category: {
            name: "espumantes",
            id: 3
        }
    }
]

const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}

export default getList;