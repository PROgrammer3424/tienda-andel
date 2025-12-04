import { Route, Routes } from 'react-router-dom';
import Registrar from '../components/Productos/Registrar';
import Inventario from '../components/Productos/Inventario';
import { DetalleProducto } from '../components/Productos/DetalleProducto';
import Catalogo from '../components/Productos/Catalogo';

export const Rutas = () => {
    return (
        <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/editar/:codigo" element={<Registrar />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path='/producto/:codigo' element={<DetalleProducto />} />
        </Routes>
    );
}
export default Rutas;