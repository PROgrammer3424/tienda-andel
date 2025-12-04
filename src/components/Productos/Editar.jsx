import { useState } from "react";
import ProductoService from "../../services/Producto/ProductoService";

export const Editar = () => {
    const[producto, setProducto] = useState({
        codigo: '',
        nombre: '',
        marca: '',
        categoria: '',
        descripcion: '',
        tipo: '',
        material: '',
        genero: '',
        precio: '',
        stock: '',
        nombreFoto: '',
        estado: true
    });

    const handleChange = (e) => {
        setProducto({...producto, [e.target.name]: e.target.value});
    }

    const saveProducto = (e) => {
        e.preventDefault();

        const productoParaEnviar = {
            ...producto,
            precio: parseFloat(producto.precio) || 0,
            stock: parseInt(producto.stock) || 0
        }

        ProductoService.createProducto(productoParaEnviar).then((response) => {
            alert("Producto registrado con éxito");
            setProducto(prev => ({...prev,
                codigo: '',
                nombre: '',
                marca: '',
                categoria: '',
                descripcion: '',
                tipo: '',
                material: '',
                genero: '',
                precio: '',
                stock: '',
                nombreFoto: '',
                estado: true
            }));
        }).catch((error) => {
            if (error.response?.status === 500){
                alert("El código del producto ya existe. Por favor, ingrese un código diferente.");
            }else{
                alert("Error de conexión. Intente nuevamente más tarde.");
            }
        });
    }
    return (
        <div>
            <h1>Editar Producto</h1>
            <div className="container w-50 border p-4 bg-light rounded-3">
                <form onSubmit={saveProducto}>
                    <div className="form-floating mb-2">
                        <input 
                        id="floatingCodigo"
                        type="text" 
                        className="form-control" 
                        name = "codigo"
                        value = {producto.codigo}
                        onChange = {handleChange}
                        required/>
                        <label htmlFor="floatingCodigo">Código</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" placeholder="Nombre"
                        id="floatingNombre"
                        name = "nombre"
                        value = {producto.nombre}
                        onChange = {handleChange}
                        required
                        />
                        <label htmlFor="floatingNombre">Nombre</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" placeholder="Marca"
                        id="floatingMarca"
                        name = "marca"
                        value={producto.marca}
                        onChange = {handleChange}
                        />                        
                        <label htmlFor="floatingMarca">Marca</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" placeholder="Categoria"
                        id="floatingCategoria"
                        name = "categoria"
                        value={producto.categoria}
                        onChange = {handleChange}
                        />
                        <label htmlFor="floatingCategoria">Categoría</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" placeholder="Descripcion"
                        id="floatingDescripcion"
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingDescripcion">Descripción</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" placeholder="Tipo"
                        id="floatingTipo"
                        name="tipo"
                        value={producto.tipo}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingTipo">Tipo</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" placeholder="Material"
                        id="floatingMaterial"
                        name="material"
                        value={producto.material}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingMaterial">Material</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" placeholder="Genero"
                        id="floatingGenero"
                        name = "genero"
                        value={producto.genero}
                        onChange = {handleChange}
                        />
                        <label htmlFor="floatingGenero">Género</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="number" step="0.01" className="form-control" placeholder="Precio"
                        id="floatingPrecio"
                        name="precio"
                        value={producto.precio}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingPrecio">Precio</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="number" className="form-control" placeholder="Stock"
                        id="floatingStock"
                        name="stock"
                        value={producto.stock}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingStock">Stock</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" placeholder="Foto"
                        id="floatingFoto"
                        name="foto"
                        value={producto.foto}
                        onChange={handleChange}
                        />
                        <label htmlFor="floatingFoto">Enlace de imagen</label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="m-1">
                            <button type="submit" className="btn btn-primary ">Editar</button>
                        </div>
                        <div className="m-1">
                            <button type="button" className="btn btn-danger " onClick={() => window.history.back()}>Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Editar;