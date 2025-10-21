import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Modal, Button } from 'react-bootstrap';

// ------------------- IMPORTACIÓN DE IMÁGENES -------------------
// Asegúrate de que todas estas rutas sean válidas en src/assets/images/
import zapatoFutbolImg from '../assets/images/zapato_de_futbol.jpg';
import ciclismoImg from '../assets/images/ciclismo3.webp';
import NatacionImg from '../assets/images/Traje_de_baño_mujer.webp'; 
import zapatillaRunning from '../assets/images/running1.avif'; 
import guantesGym from '../assets/images/GuantesBoxeo1.png';
import poleraTermica from '../assets/images/running3.avif';

// ------------------- DATOS DE LAS OFERTAS (9 Productos ÚNICOS) -------------------
const offersData = [
    // 1. Fútbol
    {
        id: "nike-mercurial-o",
        nombre: "Nike Mercurial Superfly 10",
        precio: 106990,
        precioOriginal: 149990, 
        caracteristicas: "Zapatos de fútbol MG de corte high, diseñados para velocidad.",
        img: zapatoFutbolImg,
    },
    // 2. Ciclismo
    {
        id: "sworks-ares-o",
        nombre: "S-Works Ares 2 (Ciclismo)",
        precio: 249990,
        precioOriginal: 320000,
        caracteristicas: "Zapatilla con apriete seguro y ajustado para máxima potencia en ciclismo.",
        img: ciclismoImg,
    },
    // 3. Natación (Traje de Baño 1 - ID ÚNICO)
    {
        id: "traje-bano-arena-1", // ID ÚNICO
        nombre: "Arena 645 (Mujer)",
        precio: 106990,
        precioOriginal: 149990,
        caracteristicas: "Traje de baño diseñado para entrenamiento y velocidad.",
        img: NatacionImg,
    },
    // 4. Running
    {
        id: "zapatilla-running-o",
        nombre: "Zapatilla Speed Pro",
        precio: 55990,
        precioOriginal: 89990,
        caracteristicas: "Amortiguación avanzada ideal para maratones.",
        img: zapatillaRunning,
    },
    // 5. Boxeo / Gimnasio
    {
        id: "guantes-boxeo-o", // ID ÚNICO
        nombre: "Guantes de Boxeo Pro",
        precio: 30990,
        precioOriginal: 49990,
        caracteristicas: "Guantes de 12 oz, alta protección y durabilidad.",
        img: guantesGym,
    },
    // 6. Ropa Técnica
    {
        id: "polera-termica-o",
        nombre: "Polera Térmica Compresión",
        precio: 29990,
        precioOriginal: 45990,
        caracteristicas: "Regula la temperatura corporal para clima frío.",
        img: poleraTermica,
    },
    
];

// ------------------- COMPONENTE DE TARJETA DE OFERTA CORREGIDO -------------------
function OfferCard({ product, onDetailsClick, onAddToCartClick }) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 border-danger shadow-sm">
                <img src={product.img} className="card-img-top" alt={product.nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title text-danger">{product.nombre}</h5>
                    
                    {/* Precio Original Tachado */}
                    <p className="card-text text-muted">
                        <del>${product.precioOriginal.toLocaleString('es-CL')}</del>
                    </p>

                    {/* Precio de Oferta Destacado */}
                    <p className="card-text text-success font-weight-bold" style={{ fontSize: '1.5em' }}>
                        ¡OFERTA! ${product.precio.toLocaleString('es-CL')}
                    </p>
                </div>
                
                {/* 🎯 CAMBIOS CLAVE EN ESTE DIV 🎯 */}
                <div className="card-footer text-center d-flex justify-content-between align-items-center">
                    
                    {/* Botón Ver Detalles */}
                    <button 
                        className="btn btn-info btn-sm" 
                        onClick={() => onDetailsClick(product)}
                        style={{ 
                            flex: 1, 
                            marginRight: '5px', 
                            fontSize: '0.75rem', // Fuente más pequeña
                            padding: '5px 8px'   // Padding reducido para compactar
                        }} 
                    >
                        Ver Detalles
                    </button>
                    
                    {/* Botón Añadir Carrito */}
                    <button 
                        className="btn btn-primary btn-sm" 
                        onClick={() => onAddToCartClick(product)}
                        style={{ 
                            flex: 1, 
                            marginLeft: '5px', 
                            fontSize: '0.75rem', // Fuente más pequeña
                            padding: '5px 8px'   // Padding reducido para compactar
                        }} 
                    >
                        Añadir Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

// ------------------- COMPONENTE PRINCIPAL DE LA PÁGINA (OFERTAS) -------------------
function Ofertas() {
    const { addToCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // --- Manejo del Modal (mantenido igual) ---
    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    // --- Lógica de Carrito (mantenida igual) ---
    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            name: product.nombre,
            price: product.precio,
        });
    };

    const handleAddToCartFromModal = () => {
        if (selectedProduct) {
            handleAddToCart(selectedProduct);
            handleCloseModal();
        }
    };

    return (
        <div id="main" className="single">
            <h1 className="text-center">
                <strong className="text-center mb-4" style={{ fontSize: '50px', color: 'rgb(255, 69, 0)' }}>
                    ¡OFERTAS IMPERDIBLES DE LA SEMANA! 🔥
                </strong>
            </h1>
            <div className="container mt-4">
                <div className="row">
                    {offersData.map(product => (
                        <OfferCard
                            key={product.id}
                            product={product}
                            onDetailsClick={handleShowModal}
                            onAddToCartClick={handleAddToCart}
                        />
                    ))}
                </div>
            </div>
            
            {/* --- MODAL DE DETALLES DEL PRODUCTO --- */}
            {selectedProduct && (
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProduct.nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <img src={selectedProduct.img} alt={selectedProduct.nombre} className="img-fluid mb-3" />
                        <p>{selectedProduct.caracteristicas}</p>
                        
                        <p className="text-muted">Precio Normal: <del>${selectedProduct.precioOriginal.toLocaleString('es-CL')}</del></p>
                        <h4>Precio Final: <span className="text-danger">${selectedProduct.precio.toLocaleString('es-CL')}</span></h4>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
                        <Button variant="primary" onClick={handleAddToCartFromModal}>Agregar al carrito</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Ofertas;