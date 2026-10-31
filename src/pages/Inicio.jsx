import { useState, useEffect } from "react";

const URL_API =
  "https://openlibrary.org/search.json?q=classics&limit=12&fields=key,title,author_name,first_publish_year,cover_i";

function Inicio() {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(URL_API)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const conPortada = data.docs.filter((libro) => libro.cover_i);
        setLibros(conPortada.slice(0, 8));
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p className="p-8 text-lg">Cargando audiolibros...</p>;
  }

  return (
    <section className="p-8">
      <div className="bg-yellow-100 border-2 border-emerald-800 text-emerald-900 rounded-xl p-6 mb-8 text-center shadow-lg">
        <p className="text-2xl font-bold">
          Solo $0,99 al mes durante los primeros 3 meses
        </p>
        <p className="mt-2 text-emerald-700">
          Escuchá todos los audiolibros que quieras. Cancelá cuando quieras.
        </p>
      </div>
      <h1 className="text-3xl font-bold mb-2">Audiolibros clásicos</h1>
      <p className="text-gray-600 mb-8">
        Descubrí grandes obras de la literatura para escuchar donde quieras.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {libros.map((libro) => (
          <article
            key={libro.key}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`}
              alt={`Portada de ${libro.title}`}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{libro.title}</h2>
              <p className="text-gray-700">
                {libro.author_name
                  ? libro.author_name.join(", ")
                  : "Autor desconocido"}
              </p>
              <p className="text-sm text-gray-500">
                Año: {libro.first_publish_year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Inicio;
