import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [estado, setEstado] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    setEstado("enviando");

    const formulario = e.target;
    const datos = new FormData(formulario);

    const parametros = {
      name: datos.get("name"),
      email: datos.get("email"),
      message: datos.get("message"),
      time: new Date().toLocaleString("es-AR"),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        parametros,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(() => {
        setEstado("ok");
        formulario.reset();
      })
      .catch((error) => {
        console.error("Error de EmailJS:", error);
        setEstado("error");
      });
  };

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-emerald-900 mb-6 text center">
        Contacto
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form
          onSubmit={enviarFormulario}
          className="bg-yellow-100 rounded-xl p-6"
        >
          <label className="block text-emerald-900 font-bold">
            Nombre y apellido
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full p-2 mb-4 rounded border"
          />

          <label className="block text-emerald-900 font-bold">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full p-2 mb-4 rounded border"
          />

          <label className="block text-emerald-900 font-bold">Mensaje</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-2 mb-4 rounded border"
          ></textarea>

          <button
            type="submit"
            disabled={estado === "enviando"}
            className="w-full bg-emerald-900 text-white font-bold py-2 rounded disabled:opacity-50"
          >
            {estado === "enviando" ? "Enviando..." : "Enviar"}
          </button>

          {estado === "ok" && (
            <p className="mt-4 text-emerald-800 font-bold">
              ¡Mensaje enviado! Te responderemos pronto.
            </p>
          )}
          {estado === "error" && (
            <p className="mt-4 text-red-600 font-bold">
              Hubo un error. Intentá de nuevo.
            </p>
          )}
        </form>

        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Vicente+Lopez+466,+Salta,+Argentina&output=embed"
          className="w-full h-96 rounded-xl"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacto;
