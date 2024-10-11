import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [articulos, setArticulos] = useState([
    { codigo: 1, descripcion: 'Coca-Cola', precio: 2.50 },
    { codigo: 2, descripcion: 'Inka-Cola', precio: 2.20 },
    { codigo: 3, descripcion: 'Fanta', precio: 1.70 }
  ]);

  const [nuevoArticulo, setNuevoArticulo] = useState({
    codigo: '',
    descripcion: '',
    precio: ''
  });

  const [modoEdicion, setModoEdicion] = useState(false);
  const [articuloEditar, setArticuloEditar] = useState(null);

  // Manejar el input del formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevoArticulo({ ...nuevoArticulo, [name]: value });
  };

  // Agregar un nuevo artículo
  const agregarArticulo = () => {
    setArticulos([...articulos, nuevoArticulo]);
    setNuevoArticulo({ codigo: '', descripcion: '', precio: '' });
  };

  // Eliminar un artículo
  const eliminarArticulo = (codigo) => {
    setArticulos(articulos.filter(articulo => articulo.codigo !== codigo));
  };

  // Editar un artículo
  const editarArticulo = (articulo) => {
    setModoEdicion(true);
    setArticuloEditar(articulo);
    setNuevoArticulo(articulo);
  };

  // Guardar la edición
  const guardarEdicion = () => {
    setArticulos(articulos.map(articulo =>
      articulo.codigo === articuloEditar.codigo ? nuevoArticulo : articulo
    ));
    setModoEdicion(false);
    setNuevoArticulo({ codigo: '', descripcion: '', precio: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">PROFE PASEME XFA , PROMETO NO EJERCER :/ </h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          name="codigo"
          placeholder="Código"
          value={nuevoArticulo.codigo}
          onChange={manejarCambio}
        />
        <input
          type="text"
          className="form-control mb-2"
          name="descripcion"
          placeholder="Descripción"
          value={nuevoArticulo.descripcion}
          onChange={manejarCambio}
        />
        <input
          type="text"
          className="form-control mb-2"
          name="precio"
          placeholder="Precio"
          value={nuevoArticulo.precio}
          onChange={manejarCambio}
        />

        {modoEdicion ? (
          <button className="btn btn-success" onClick={guardarEdicion}>
            Guardar Edición
          </button>
        ) : (
          <button className="btn btn-primary" onClick={agregarArticulo}>
            Agregar Artículo
          </button>
        )}
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.codigo}>
              <td>{articulo.codigo}</td>
              <td>{articulo.descripcion}</td>
              <td>{articulo.precio}</td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => editarArticulo(articulo)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarArticulo(articulo.codigo)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;