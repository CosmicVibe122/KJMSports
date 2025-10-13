import React, { useState } from 'react';
import logoImg from '../assets/images/logo1.jpg'; // Asegúrate de tener el logo

function Registro() {
  // Estado para cada campo del formulario
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    telefono: '',
  });

  // Estado para los errores de validación
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre de usuario es obligatorio.";
    if (!formData.password) newErrors.password = "La contraseña es obligatoria.";
    else if (formData.password.length < 4 || formData.password.length > 10) {
      newErrors.password = "La contraseña debe tener entre 4 y 10 caracteres.";
    }
    if (!formData.email) newErrors.email = "El email es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del email no es válido.";
    }
    if (!formData.telefono) newErrors.telefono = "El teléfono es obligatorio.";
    
    setErrors(newErrors);
    // Devuelve true si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    if (validateForm()) {
      // Si el formulario es válido, puedes hacer algo con los datos
      console.log("Formulario válido, datos enviados:", formData);
      alert(`Usuario registrado!\nNombre: ${formData.name}\nEmail: ${formData.email}`);
      // Aquí podrías mostrar un modal, como en el original
    }
  };

  return (
    <div id="main">
      <section id="intro" style={{ textAlign: 'center' }}>
        <a href="#" className="logo"><img src={logoImg} alt="Logo" /></a>
        <header>
          <h2>Registrate!</h2>
          <p>Unete a la comunidad KJM Sports</p>
        </header>
      </section>

      <div className="container">
        <form id="form" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name">Usuario</label>
            <input id="name" type="text" value={formData.name} onChange={handleChange} placeholder="Ej: John Doe" />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          </div>
          <br />
          <div>
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="4 a 10 caracteres" />
            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
          </div>
          <br />
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="johndoe@example.com" />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>
          <br />
          <div>
            <label htmlFor="telefono">Teléfono</label>
            <input id="telefono" type="text" value={formData.telefono} onChange={handleChange} placeholder="+56912345678" />
            {errors.telefono && <div style={{ color: 'red' }}>{errors.telefono}</div>}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ marginTop: '20px' }}>Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;