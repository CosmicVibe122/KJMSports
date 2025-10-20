import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Modal, Button } from 'react-bootstrap'; // Usamos el Modal de react-bootstrap
import { Dropdown } from 'react-bootstrap';
// ------------------- IMPORTACIÓN DE IMÁGENES -------------------
// ¡IMPORTANTE! Asegúrate de tener todas estas imágenes en 'src/assets/images/'
import zapatoFutbolImg from '../assets/images/zapato_de_futbol.jpg';
import ciclismoImg from '../assets/images/ciclismo3.webp';


// ... (añade aquí todas las demás imágenes de tus productos)

// ------------------- DATOS DE LOS PRODUCTOS -------------------
// Replicamos la estructura de datos que tu 'funciones.js' probablemente usaba.
const productsData = [
  {
    id: "nike-mercurial",
    nombre: "Nike Mercurial Superfly 10",
    precio: 106990,
    caracteristicas: "Zapatos de fútbol MG de corte high, diseñados para velocidad.",
    img: zapatoFutbolImg,
  },
  {
    id: "sworks-ares",
    nombre: "S-Works Ares 2",
    precio: 249990,
    caracteristicas: "Zapatilla con apriete seguro y ajustado para máxima potencia.",
    img: ciclismoImg,
  },
  // ... Añade aquí el resto de tus productos con esta misma estructura
];

// ------------------- COMPONENTE DE TARJETA DE PRODUCTO -------------------
// Muestra cada producto en la cuadrícula.
function ProductCard({ product, onDetailsClick, onAddToCartClick }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img src={product.img} className="card-img-top" alt={product.nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">${product.precio.toLocaleString('es-CL')}</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-info mr-2" onClick={() => onDetailsClick(product)}>
            Ver Detalles
          </button>
          <button className="btn btn-primary" onClick={() => onAddToCartClick(product)}>
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------- COMPONENTE DEL CARRITO FLOTANTE -------------------
// Este es el botón que muestra la cantidad de ítems.
function FloatingCartButton() {
    const { cart } = useContext(CartContext);
    
    // Aquí puedes añadir la lógica para mostrar el dropdown del carrito si lo necesitas.
    // Por ahora, solo muestra la cantidad.
    return (
        <div className="cart-button">
            <button className="btn btn-light d-flex align-items-center" type="button">
                <i className="fas fa-shopping-cart mr-2"></i>
                <span>Carrito</span>
                <span className="badge badge-pill badge-danger ml-2">{cart.length}</span>
            </button>
        </div>
    );
}


// ------------------- COMPONENTE PRINCIPAL DE LA PÁGINA -------------------
function Productos() {
  const { addToCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para abrir el modal y mostrar un producto
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Función para añadir al carrito (desde la tarjeta)
  const handleAddToCart = (product) => {
    addToCart({
        id: product.id,
        name: product.nombre,
        price: product.precio,
    });
  };

  // Función para añadir al carrito (desde el modal)
  const handleAddToCartFromModal = () => {
    if (selectedProduct) {
      handleAddToCart(selectedProduct);
      handleCloseModal(); // Cierra el modal después de añadir
    }
  };

  return (
    <div id="main" className="single">
      <h1 className="text-center">
        <strong className="text-center mb-4" style={{ fontSize: '50px', color: 'rgb(20, 132, 230)' }}>
          Supera tus LÍMITES!
        </strong>
      </h1>

      <div className="container mt-4">
        <div className="row">
          {productsData.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onDetailsClick={handleShowModal}
              onAddToCartClick={handleAddToCart}
            />
          ))}
        </div>
      </div>
      
      <FloatingCartButton />

      {/* --- MODAL DE DETALLES DEL PRODUCTO --- */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img src={selectedProduct.img} alt={selectedProduct.nombre} className="img-fluid mb-3" />
            <p>{selectedProduct.caracteristicas}</p>
            <h4>${selectedProduct.precio.toLocaleString('es-CL')}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleAddToCartFromModal}>
              Agregar al carrito
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Productos;