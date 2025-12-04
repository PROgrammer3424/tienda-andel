const Catalogo = () => {
    // const [productos, setProductos] = useState([]);
    const productos = [
        {
            codigo: "ZA-001",
            nombre: "Zapatillas Deportivas Nike",
            marca: "Nike",
            precio: "299.90",
            categoria: "Deportivo",
            tipo: "Zapatillas",
            material: "Malla",
            estado: true,
            foto: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&fit=crop"
        },
        {
            codigo: "ZA-002",
            nombre: "Botines de Cuero",
            marca: "Steve Madden",
            precio: "195.00",
            categoria: "Formal",
            tipo: "Botín",
            material: "Cuero",
            estado: true,
            foto: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&fit=crop"
        },
        {
            codigo: "ZA-003",
            nombre: "Sandalias Verano",
            marca: "Adidas",
            precio: "89.90",
            categoria: "Casual",
            tipo: "Sandalia",
            material: "Goma",
            estado: true,
            foto: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&fit=crop"
        },
        {
            codigo: "ZA-004",
            nombre: "Zapatos de Vestir",
            marca: "Calvin Klein",
            precio: "249.90",
            categoria: "Formal",
            tipo: "Zapato",
            material: "Cuero",
            estado: true,
            foto: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&fit=crop"
        },
        {
            codigo: "ZA-005",
            nombre: "Tacones Altos",
            marca: "Michael Kors",
            precio: "179.90",
            categoria: "Femenino",
            tipo: "Tacón",
            material: "Sintético",
            estado: true,
            foto: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&fit=crop"
        },
        {
            codigo: "ZA-006",
            nombre: "Zapatillas Running",
            marca: "New Balance",
            precio: "159.90",
            categoria: "Deportivo",
            tipo: "Running",
            material: "Malla",
            estado: true,
            foto: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&fit=crop"
        },
        {
            codigo: "ZA-007",
            nombre: "Mocasines Hombre",
            marca: "Timberland",
            precio: "219.90",
            categoria: "Casual",
            tipo: "Mocasín",
            material: "Cuero",
            estado: true,
            foto: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&fit=crop"
        },
        {
            codigo: "ZA-008",
            nombre: "Botas de Cuero",
            marca: "Dr. Martens",
            precio: "349.90",
            categoria: "Casual",
            tipo: "Bota",
            material: "Cuero",
            estado: true,
            foto: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&fit=crop"
        },
        {
            codigo: "ZA-009",
            nombre: "Zapatillas Urbanas",
            marca: "Converse",
            precio: "129.90",
            categoria: "Casual",
            tipo: "Zapatillas",
            material: "Lona",
            estado: true,
            foto: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&fit=crop"
        },
        {
            codigo: "ZA-010",
            nombre: "Sneakers Blancas",
            marca: "Puma",
            precio: "139.90",
            categoria: "Casual",
            tipo: "Sneaker",
            material: "Cuero Sintético",
            estado: true,
            foto: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&fit=crop"
        }
    ];
    // useEffect(() => {
    //     fetch('http://localhost:8080/api/v1/producto')
    //     .then(response => response.json())
    //     .then(data => setProductos(data));
    // },[]);
    return (
        <div>
            <div className="container py-4">
                <h2 className="mb-4 text-center">Catálogo de Productos</h2>
                <div className="row">
                    {productos.map((producto) => (
                        <div className="col-lg-3 col-sm-6 mb-4" key={producto.id}>
                            <div className="card h-100 shadow-sm product-card">
                                <div className="position-relative overflow-hidden">
                                    <div className="card-img-placeholder">
                                        {producto.foto ? (
                                            <img src={producto.foto} className="card-img-top imagenes" alt={producto.nombre}/>
                                        ):(
                                            <div className="card-img-placeholder bg-light d-flex align-items-center justify-content-center"
                                                style={{height: "250px"}}>
                                                <span className="text-muted">[{producto.categoria}]</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="product-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                        <a 
                                            role="button" 
                                            tabIndex="0" 
                                            href={`/producto/${producto.codigo}`} 
                                            className="btn btn-light btn-sm degradado text-white"
                                        >
                                            Ver detalles
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <div className="mb-2">
                                        <small className="text-muted">{producto.marca}</small>
                                    </div>
                                    <h5 className="h6 mb-2 card-title">{producto.nombre}</h5>
                                    <p className="text-muted small flex-grow-1 card-text">
                                        {producto.descripcion}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className="mb-0 text-primary">{producto.precio} Bs.</h5>
                                            <small className="text-muted">{producto.categoria}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Catalogo;