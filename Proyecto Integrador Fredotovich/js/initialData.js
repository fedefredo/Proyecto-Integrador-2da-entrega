const productsStart = [
    {
        productName: "iPhone 14",
        productDescription: "Incluye el nuevo A-15 Bionic Chip, camaras de primer nivel y alta resistencia al agua con IP68.",
        productPrice: 871298,
        productDate: new Date('2023-09-13').getTime(),
        productImage: "/assets/phones-imgs/iphone-14.png",
        id: "1"
    },
    {
        productName: "iPhone 14 Pro Max",
        productDescription: "Te presentamos al iPhone con la nueva Dynamic Island, un chip más rápido con el A-16 y una cámara que te permitirá grabar a niveles altísimos.",
        productPrice: 1200000,
        productDate: new Date('2023-09-13').getTime(),
        productImage: "/assets/phones-imgs/iphone-14-promax.png",
        id: "2"
    },
    {
        productName: "Samsung Galaxy S23 Ultra",
        productDescription: "Un móvil con una cámara sobresaliente, una autonomia excelente y que incluye el S-Pen para múltiples usos.",
        productPrice: 900000,
        productDate: new Date('2023-09-13').getTime(),
        productImage: "/assets/phones-imgs/samsung-s23-ultra.png",
        id: "3"
    },
    {
        productName: "Samsung Galaxy Z-Flip 4",
        productDescription: " Un teléfono distinto con una gran pantalla y la posibilidad de poder plegarlo para un mejor transporte. También incluye una mini-pantalla al plegarlo de gran funcionalidad.",
        productPrice: 355000,
        productDate: new Date('2023-09-13').getTime(),
        productImage: "/assets/phones-imgs/samsung-z-flip.png",
        id: "4"
    },
    {
        productName: "Samsung Galaxy A14",
        productDescription: "Un celular grande con una gran bateria para su uso diario y una pantalla fluida con una buena calidad.",
        productPrice: 123000,
        productDate: new Date('2023-09-13').getTime(),
        productImage: "/assets/phones-imgs/samsung-galaxy-a14.png",
        id: "5"
    },
    {
        productName: "Redmi Note 11",
        productDescription: "Un teléfono con una buena calidad-precio si su uso es normal con una buena autonomía y una pantalla grande, brillante y con gran nitidez.",
        productPrice: 213000,
        productDate: new Date('2023-09-13').getTime(),
        productImage: "/assets/phones-imgs/redmi-note-11.png",
        id: "6"
    },
    {
        productName: "Samsung Galaxy S22",
        productDescription: "Un dispositivo que cuenta con un muy buen apartado fotográfico, un rendimiento excelente y una resolución capaz de ajustarse a la necesidad.",
        productPrice: 438900,
        productDate: new Date('2023-09-13').getTime(),
        productImage: "/assets/phones-imgs/samsung-s22.png",
        id: "7"
    },
    {
        productName: "Xiaomi Mi 13",
        productDescription: "Tiene un muy buen procesador, acompañado a su gran pantalla, ayuda a que su rendimiento sea bestial sumnado a su bateria que te permite disfrutar de un uso avanzado.",
        productPrice: 319000,
        productDate: new Date('2023-09-13').getTime(),
        productImage: "/assets/phones-imgs/xiaomi-mi13.png",
        id: "8"
    }
    
]

if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify(productsStart))
}

const usersStart = [
    {
      fullname: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
      id: '11',
      active: true,
      password: 'Password123',
      repeatPassword: 'Password123',
      bornDate: new Date('1993-01-01').getTime(),
      location: 'Buenos Aires',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
      role: 'CLIENT'
    },
    {
      fullname: 'Jane Doe',
      age: 25,
      email: 'jane.doe@example.com',
      id: '2',
      active: false,
      password: 'password456',
      bornDate: new Date('1998-05-05').getTime(),
      location: 'Chaco',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
      role: 'CLIENT'
    },
    {
      fullname: 'Alice Johnson',
      age: 35,
      email: 'alice.johnson@example.com',
      id: '3',
      active: true,
      password: 'password789',
      bornDate: new Date('1988-08-08').getTime(),
      location: 'Formosa',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325',
      role: 'CLIENT'
    },
    {
      fullname: 'Michael Smith',
      age: 40,
      email: 'michael.smith@example.com',
      id: '4',
      active: false,
      password: 'password101',
      bornDate: new Date('1983-04-10').getTime(),
      location: 'Corrientes',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280',
      role: 'CLIENT'
    },
    {
      fullname: 'Emily Johnson',
      age: 28,
      email: 'emily.johnson@example.com',
      id: '5',
      active: true,
      password: 'password202',
      bornDate: new Date('1995-02-15').getTime(),
      location: 'Córdoba',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325',
      role: 'CLIENT'
    },
    {
      fullname: 'Daniel Lee',
      age: 34,
      email: 'daniel.lee@example.com',
      id: '6',
      active: false,
      password: 'password303',
      bornDate: new Date('1989-07-07').getTime(),
      location: 'Buenos Aires',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325',
      role: 'CLIENT'
    },
    {
      fullname: 'Samantha Davis',
      age: 22,
      email: 'samantha.davis@example.com',
      id: '7',
      active: true,
      password: 'password404',
      bornDate: new Date('2001-11-11').getTime(),
      location: 'La Rioja',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/2/2d/Mk8icondk.png?width=325',
      role: 'CLIENT'
    },
    {
      fullname: 'James Moore',
      age: 45,
      email: 'james.moore@example.com',
      id: '8',
      active: false,
      password: 'password505',
      bornDate: new Date('1978-12-19').getTime(),
      location: 'Misiones',
      image: "https://m.media-amazon.com/images/I/81wNRtDaTXL.png",
      role: 'CLIENT'
    },
    {
      fullname: 'Isabella Taylor',
      age: 29,
      email: 'isabella.taylor@example.com',
      id: '9',
      active: true,
      password: 'password606',
      bornDate: new Date('1994-06-24').getTime(),
      location: 'Corrientes',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/3/3a/Mk8iconkoopa.png?width=325',
      role: 'CLIENT'
    },
    {
      fullname: 'Ethan Johnson',
      age: 31,
      email: 'ethan.johnson@example.com',
      id: '10',
      active: false,
      password: 'password707',
      bornDate: new Date('1992-03-03').getTime(),
      location: 'Córdoba',
      image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/b7/Mk8iconbowser.png?width=325',
      role: 'CLIENT'
    },
    {
      fullname: "admin",
      age: 19,
      email: "admin@admin.com",
      id: "1",
      active: true,
      password: "admin",
      location: "Buenos Aires",
      role: "ADMIN"
    }
];

if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart))
}


