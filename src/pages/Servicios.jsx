import { Link } from "react-router";
import { planes } from "../data/planes";

function Servicios() {
  // map recorre los 3 planes y fabrica una tarjeta por c/u
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-2 text-emerald-900">
        Nuestros planes
      </h1>
      <p className="text-gray-600 mb-8">
        Elegí el plan que mejor se adapte a tu forma de escuchar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {planes.map((plan) => (
          <article
            key={plan.id}
            // ternario borde grueso verde al plan destacado (Premium) y borde fino gris a los otros.
            className={
              plan.destacado
                ? "bg-white rounded-xl shadow-lg overflow-hidden border-4 border-emerald-700"
                : "bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            }
          >
            <img
              src={plan.imagen}
              alt={`Imagen del ${plan.nombre}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              {plan.destacado && (
                <span className="inline-block bg-yellow-200 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                  ⭐ Más elegido
                </span>
              )}
              <h2 className="text-xl font-bold text-emerald-900">
                {plan.nombre}
              </h2>
              <p className="text-gray-600 mb-4">{plan.descripcion}</p>

              <p className="text-3xl font-bold text-emerald-900">
                {plan.precio}
                <span className="text-base font-normal text-gray-500">
                  {" "}
                  /mes
                </span>
              </p>
              <p className="text-sm text-emerald-700 font-semibold mb-4">
                {plan.promo}
              </p>

              <ul className="mb-6 space-y-1">
                {plan.beneficios.map((beneficio) => (
                  <li key={beneficio} className="text-gray-700">
                    ✓ {beneficio}
                  </li>
                ))}
              </ul>

              <Link
                to="/contacto"
                className="block text-center bg-emerald-900 text-white font-bold py-2 rounded-lg hover:bg-emerald-700"
              >
                Quiero este plan
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
