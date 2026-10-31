import { ventajas } from "../data/ventajas";

function Perfil() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-emerald-900 mb-4">
        Quiénes somos
      </h1>
      <p className="text-gray-700 mb-4">
        AudioLibros es una plataforma pensada para quienes aman las historias
        pero no siempre tienen tiempo para sentarse a leer. Reunimos grandes
        clásicos de la literatura para que los escuches mientras viajás, cocinás
        o descansás.
      </p>

      <div className="bg-yellow-100 border-l-4 border-emerald-800 p-4 mb-10">
        <p className="text-emerald-900 font-semibold">
          Nuestra misión: que la buena literatura acompañe tu día, en cualquier
          momento.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-emerald-900 mb-6">
        Por qué elegirnos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ventajas.map((ventaja) => (
          <article
            key={ventaja.id}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <p className="text-4xl mb-2">{ventaja.icono}</p>
            <h3 className="font-bold text-emerald-900 mb-2">
              {ventaja.titulo}
            </h3>
            <p className="text-gray-600 text-sm">{ventaja.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Perfil;
