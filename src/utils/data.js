const products = [
    {
        id: 1,
        image: "https://baltimore.com.ar/img/articulos/4188.png",
        title: "Vino Abras Malbec 750cc",
        price: 2.500,
        stock: 8,
        initial: 1
    },
    {
        id: 2,
        image: "https://baltimore.com.ar/img/articulos/3033.png",
        title: "Alfa Crux Malbec 750cc",
        price: 4.700,
        stock: 10,
        initial: 1
    },
    {
        id: 3,
        image: "https://baltimore.com.ar/img/articulos/101.jpg",
        title: "Alma Negra Tinto 750cc",
        price: 5.000,
        stock: 4,
        initial: 1
    },
    {
        id: 4,
        image: "https://baltimore.com.ar/img/articulos/4315.png",
        title: "Alpa Cabernet Sauvignon 750cc",
        price: 1.900,
        stock: 2,
        initial: 1
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