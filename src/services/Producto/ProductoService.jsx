import axios from "axios";
import { API_BASE_URL } from "../../config";

const PEDIDO_BASE_REST_API_URL = `${API_BASE_URL}/producto`;
class ProductoService{
    createProducto(producto){
        return axios.post(PEDIDO_BASE_REST_API_URL, producto);
    }

    updateProducto(codigo, producto){
        return axios.put(`${PEDIDO_BASE_REST_API_URL}/${codigo}`, producto);
    }

    getProductoByCodigo(codigo){
        return axios.get(`${PEDIDO_BASE_REST_API_URL}/${codigo}`);
    }
}
export default new ProductoService();