import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductoService from "../../services/Producto/ProductoService";

export const DetalleProducto = () => {
    const {codigo} = useParams();
    const [producto, setProducto] = useState({});
    const productosHardcodeados = [
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
    const [tallaSeleccionada, setTallaSeleccionada] = useState('');
    useEffect(() => {
        const productoEncontrado = productosHardcodeados.find(p => p.codigo === codigo);
        setProducto(productoEncontrado);
        // ProductoService.getProductoByCodigo(codigo).then((response) => {
        //     setProducto(response.data);
        // }).catch((error) => {
        //     console.log("Error al obtener el producto por código" + codigo);
        // });
    }, [codigo]);
    return (
        <div className="py-4 container">    
            {producto && (
                <div className="row">
                    <div className="col-md-6">
                        <div className="shadow-sm mb-4 card">
                            <img 
                            className="d-block w-100" 
                            alt="Old Skool - Vista 1" 
                            style={{
                                height: '400px', 
                                objectFit: 'cover'
                            }} 
                            src={producto.foto}
                            />
                        </div>
                    </div>
            
                    <div className="col-md-6">
                        <div className="" style={{top: '90px'}}>
                            <div className="mb-3">
                                <h6 className="text-muted mb-1">{producto.marca}</h6>
                                <h1 className="mb-3">{producto.nombre}</h1>
                                <div className="mb-3">
                                <h3 className="text-primary mb-0">Bs. {producto.precio}</h3>
                                <small className="text-muted">{producto.codigo}</small>
                                </div>
                            </div>
                            <p className="text-muted mb-4">
                                {producto.descripcion}
                            </p>
                            
                            <div className="mb-4 card">
                                <div className="card-body">
                                <h6><strong>Detalles del Producto</strong></h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                    <strong>Categoría:</strong> {producto.categoria}
                                    </div>
                                    <div className="col-sm-6">
                                    <strong>Tipo:</strong> {producto.tipo}
                                    </div>
                                    <div className="col-sm-6">
                                    <strong>Material:</strong> {producto.material}
                                    </div>
                                    <div className="col-sm-6">
                                    <strong>Estado:</strong> {producto.estado ? 'Nuevo' : 'Agotado'}
                                    </div>
                                </div>
                                </div>
                            </div>                           
                            <div className="mb-3">
                                <label className="form-label">
                                <strong>Talla</strong>
                                </label>
                                <div className="d-flex flex-wrap gap-2">
                                    {['38', '39', '40', '41', '42'].map(talla => (
                                        <button 
                                        key={talla}
                                        type="button" 
                                        className={`position-relative btn btn-sm ${
                                            tallaSeleccionada === talla 
                                            ? 'btn-primary' 
                                            : 'btn-outline-primary'
                                        }`}
                                        onClick={() => setTallaSeleccionada(talla)}
                                        >
                                        {talla}
                                        </button>
                                    ))}
                                </div>
                            </div>
                    
                            <div className="d-grid gap-2 mb-4">
                                 <a 
                                    href={`https://wa.me/67392842?text=${encodeURIComponent(
                                        `¡Hola! Me interesa este producto:\n` +
                                        `• *Código:* ${producto.codigo}\n` +
                                        `• *Nombre:* ${producto.nombre}\n` +
                                        `• *Marca:* ${producto.marca}\n` +
                                        `• *Precio:* ${producto.precio} Bs.\n` +
                                        (tallaSeleccionada ? `• *Talla:* ${tallaSeleccionada}\n` : '') +
                                        `\n¿Tienen disponible?`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success btn-lg"
                                    >
                                    <i className="bi bi-whatsapp me-2"></i>
                                    Pedir por WhatsApp
                                </a>
                                <a 
                                role="button" 
                                tabIndex="0" 
                                href="/catalogo" 
                                className="btn degradado btn-lg" 
                                data-discover="true"
                                >
                                <i className="bi bi-arrow-left me-2"></i>
                                Seguir Comprando
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};