import { useEffect, useState } from "react";

export const Inventario = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/producto')
        .then(response => response.json())
        .then(data => setProductos(data));
    }, []);
    return (
        <div className="p-0 card-body">
            <h2 className="text-center mb-3 mt-3">Productos disponibles</h2>
            <div className="table-responsive">
                <table className="table mb-0 table-sm">
                    <thead className="bg-light">
                        <tr>
                            <th>SKU</th>
                            <th>Producto</th>
                            <th>Tipo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr>
                                <td><code>{producto.codigo}</code></td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="fw-medium">{producto.nombre}</div>
                                            <small className="text-muted">{producto.marca}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>{producto.tipo}</td>
                                <td>
                                    <div className="btn-group btn-group-sm">
                                        <a 
                                            role="button" 
                                            tabIndex="0" 
                                            href="/product/6" 
                                            className="btn btn-outline-info" 
                                            target="_blank" 
                                            data-discover="true"
                                        >
                                            <i className="bi bi-eye"></i>
                                        </a>
                                        <a 
                                            role="button" 
                                            tabIndex="0" 
                                            href={`/editar/${producto.id}`}
                                            className="btn btn-outline-primary" 
                                            data-discover="true"
                                        >
                                            <i className="bi bi-pencil"></i>
                                        </a>
                                        <button type="button" className="btn btn-outline-danger">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventario;