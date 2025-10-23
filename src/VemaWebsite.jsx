import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet"; // 🧠 SEO

export default function VemaWebsite() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pdfBase64, setPdfBase64] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  // 📎 Manejo de PDF
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => setPdfBase64(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    } else {
      alert("Solo se permiten archivos PDF.");
      e.target.value = "";
    }
  };

  // ✉️ Envío con EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      telefono: form.telefono.value,
      mensaje: form.mensaje.value,
      archivo: pdfBase64 ? `data:application/pdf;base64,${pdfBase64}` : "",
    };

    emailjs
      .send("service_l4ky0xr", "template_hciqf5g", data, "xr_aCOaimdzvjNVMB")
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.reset();
          setPdfBase64("");
          setTimeout(() => {
            setSuccess(false);
            setShowForm(false);
          }, 2500);
        },
        (error) => {
          console.error("Error:", error);
          alert("❌ Ocurrió un error al enviar el formulario.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased relative">
      <Helmet>
  <title>Metalúrgica Vema S.R.L. | Repuestos Industriales en Castelar</title>
  <meta
    name="description"
    content="En Metalúrgica Vema S.R.L. fabricamos repuestos y componentes a medida para máquinas industriales. Más de 30 años de experiencia brindando soluciones a la industria alimenticia, gráfica y de embotellado."
  />
  <meta
    name="keywords"
    content="metalúrgica Castelar, repuestos industriales, VEMA SRL, componentes industriales, repuestos a medida, industria alimenticia, gráfica, embotellado"
  />
  <meta name="author" content="Metalúrgica Vema S.R.L." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://metalurgicavemasrl.vercel.app/" />

  {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_AR" />
  <meta property="og:url" content="https://metalurgicavemasrl.vercel.app/" />
  <meta property="og:title" content="Metalúrgica Vema S.R.L." />
  <meta
    property="og:description"
    content="Fabricamos repuestos plásticos y metálicos a medida para máquinas industriales. Más de 30 años de experiencia en Castelar, Buenos Aires."
  />
  <meta
    property="og:image"
    content="https://metalurgicavemasrl.vercel.app/assets/vema-logo.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter Card (también usada por WhatsApp Web) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Metalúrgica Vema S.R.L." />
  <meta
    name="twitter:description"
    content="Repuestos y componentes industriales a medida. Más de 30 años de experiencia en la industria argentina."
  />
  <meta
    name="twitter:image"
    content="https://metalurgicavemasrl.vercel.app/assets/vema-logo.png"
  />

  {/* Datos estructurados (para Google) */}
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Metalúrgica Vema S.R.L.",
      "image": "https://metalurgicavemasrl.vercel.app/assets/vema-logo.png",
      "telephone": "+54 11 2156-1504",
      "email": "vema@sinectis.com.ar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gervasio Pavón 3391",
        "addressLocality": "Castelar",
        "addressRegion": "Buenos Aires",
        "addressCountry": "Argentina"
      },
      "url": "https://metalurgicavemasrl.vercel.app/",
      "description": "Fabricamos repuestos y componentes industriales a medida con más de 30 años de experiencia en Castelar, Buenos Aires."
    }
  `}</script>
</Helmet>



      {/* 💬 BOTÓN WHATSAPP FLOTANTE */}
      <div
        className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md shadow-lg"
            >
              💬 Chateá con nosotros
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href="https://wa.me/541121561504?text=Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20repuestos%20industriales."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path d="M16.001 3.199A12.8 12.8 0 0 0 3.199 16a12.6 12.6 0 0 0 1.77 6.4L3 29l6.8-1.76A12.9 12.9 0 0 0 16 28.8a12.8 12.8 0 0 0 12.8-12.8A12.8 12.8 0 0 0 16.001 3.2zm0 23.2a10.9 10.9 0 0 1-5.56-1.53l-.4-.23-4 1 1.06-4.12-.27-.42a10.9 10.9 0 1 1 9.17 5.3zm5.97-8.2c-.33-.16-1.93-.95-2.23-1.05s-.52-.16-.73.16-.83 1.05-1 1.27-.38.24-.7.08a8.8 8.8 0 0 1-2.6-1.6 9.8 9.8 0 0 1-1.8-2.22c-.19-.32 0-.49.14-.65s.33-.38.49-.57a2 2 0 0 0 .33-.55.58.58 0 0 0-.03-.57c-.08-.16-.73-1.75-1-2.4s-.54-.56-.73-.57h-.63a1.2 1.2 0 0 0-.86.4 3.6 3.6 0 0 0-1.13 2.65 6.2 6.2 0 0 0 1.3 3.27c.16.22 2.18 3.34 5.3 4.67a17.7 17.7 0 0 0 1.73.63 4.2 4.2 0 0 0 1.91.12c.58-.09 1.93-.79 2.2-1.56s.27-1.43.19-1.56-.3-.24-.63-.4z" />
          </svg>
        </motion.a>
      </div>


      {/* 🟦 Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <motion.div
          className="container mx-auto px-6 py-4 flex items-center justify-between"
          initial={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
          whileInView={{ paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="/assets/vema-logo.png"
            alt="VEMA S.R.L. logo"
            className="w-auto object-contain"
            initial={{ height: 250 }}
            whileInView={{ height: 150 }}
            transition={{ duration: 0.3 }}
          />

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#inicio" className="hover:text-blue-700 transition-colors">
              Inicio
            </a>
            <a
              href="#trayectoria"
              className="hover:text-blue-700 transition-colors"
            >
              Trayectoria
            </a>
            <a
              href="#servicios"
              className="hover:text-blue-700 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#clientes"
              className="hover:text-blue-700 transition-colors"
            >
              Clientes
            </a>
            <a
              href="#contacto"
              className="hover:text-blue-700 transition-colors"
            >
              Contacto
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm shadow hover:bg-blue-800 transition"
            >
              Cotizá con nosotros
            </button>
          </nav>
        </motion.div>
      </header>

      {/* 🟩 Modal de cotización */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 w-[95%] max-w-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>

              {success ? (
                <motion.div
                  className="flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="bg-green-100 text-green-600 rounded-full p-4 mb-4"
                  >
                    ✅
                  </motion.div>
                  <h2 className="text-2xl font-bold text-green-700">
                    ¡Solicitud enviada!
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm">
                    Gracias por contactarte. Te responderemos a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">Cotizá con nosotros</h2>
                  <p className="text-gray-600 text-sm mb-6">
                    Completá tus datos y adjuntá tu plano o pedido. Te contactaremos a la brevedad.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre y Apellido"
                      required
                      className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      required
                      className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Teléfono de contacto"
                      required
                      className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      name="mensaje"
                      placeholder="Describe tu necesidad o pedido..."
                      rows="3"
                      className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Adjuntar plano o pedido (PDF)
                      </label>
                      <input
                        type="file"
                        name="archivo"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileTap={{ scale: 0.97 }}
                      disabled={loading}
                      className={`bg-blue-700 text-white font-medium py-2 rounded-md hover:bg-blue-800 transition ${
                        loading ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                    >
                      {loading ? "Enviando..." : "Enviar solicitud"}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔹 Hero */}
      <section
        id="inicio"
        className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Carrusel de imágenes */}  
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="bg-white rounded-2xl p-6 shadow-md overflow-hidden relative"
>
  <div className="relative w-full h-80 rounded-xl overflow-hidden">
    {(() => {
      // 📸 Lista de imágenes — solo editá esto si querés agregar más
      const images = [
        "vema-hero10.jpg",
        "vema-hero11.jpg",
        "vema-hero12.jpg",
        "vema-hero4.jpg",
        "vema-hero13.jpg",
        "vema-hero14.jpg",
        "vema-hero15.jpg",
      ];

      // 🔁 Crea un array de posiciones en porcentaje según la cantidad de imágenes
      const steps = images.map((_, i) => `-${i * 100}%`).concat("0%");

      return (
        <motion.div
          className="flex w-full h-full"
          animate={{ x: steps }}
          transition={{
            duration: images.length * 6, // 6s por imagen (ajustable)
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full">
              <img
                src={`/assets/${img}`}
                alt={`Imagen ${i + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </motion.div>
      );
    })()}
  </div>
</motion.div>


        {/* Texto de presentación */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">VEMA S.R.L.</h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            Empresa familiar con más de 30 años de trayectoria en repuestos industriales.
            Acompañamos a las industrias más importantes de Argentina con soluciones confiables,
            personalizadas y respuestas inmediatas.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-blue-700">●</span>
              <span className="text-sm text-gray-700">Inventario y repuestos para línea industrial</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-blue-700">●</span>
              <span className="text-sm text-gray-700">Asesoramiento técnico y soluciones a medida</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-blue-700">●</span>
              <span className="text-sm text-gray-700">Entrega rápida y servicio posventa</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowForm(true)}
              className="inline-block bg-blue-700 text-white px-5 py-3 rounded-md font-medium hover:bg-blue-800 transition"
            >
              Cotizá con nosotros
            </button>
          </div>
        </motion.div>
      </section>

      {/* Trayectoria */}
      <section id="trayectoria" className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-4">Más de 30 años de experiencia</motion.h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-gray-600 max-w-3xl mx-auto">Desde nuestros inicios, VEMA S.R.L. ha crecido junto a las industrias más importantes de Argentina. Nuestra trayectoria se basa en la confianza, la calidad y un servicio personalizado que nos permite ser el socio estratégico ideal para empresas que buscan eficiencia y respaldo.</motion.p>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700">+30 años</h4>
              <p className="text-sm text-gray-600">de experiencia continua en repuestos industriales</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700">Clientes líderes</h4>
              <p className="text-sm text-gray-600">como ARCOR, Quilmes, CCU y Molinos confían en nosotros</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h4 className="text-xl font-semibold text-blue-700">Servicio personalizado</h4>
              <p className="text-sm text-gray-600">adaptado a las necesidades específicas de cada industria</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="container mx-auto px-6 py-12">
        <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-bold">Nuestros servicios</motion.h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Suministro de repuestos', 'Asesoría técnica', 'Logística y entrega'].map((title, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">{title}</h4>
              <p className="mt-2 text-sm text-gray-600">{i === 0 ? 'Amplio stock y búsqueda puntual de piezas difíciles de conseguir.' : i === 1 ? 'Soporte técnico para seleccionar la mejor solución según la máquina y proceso.' : 'Entregas rápidas y coordinación para minimizar tiempos de paro.'}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clientes - Carrusel automático moderno */}
<section
  id="clientes"
  className="container mx-auto px-6 py-20 bg-white rounded-t-xl overflow-hidden"
>
  <motion.h3
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center text-gray-900"
  >
    Algunos de nuestros clientes
  </motion.h3>

  <p className="mt-2 text-sm text-gray-600 text-center">
    Empresas que confían en <span className="font-medium text-blue-700">VEMA S.R.L.</span>
  </p>

  <div className="relative mt-10 group">
    {/* Efecto degradado en los bordes laterales */}
    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

    {/* Carrusel animado */}
    <motion.div
      className="flex gap-12 items-center w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      }}
      whileHover={{ x: 0, transition: { duration: 0.3 } }} // pausa al hover
    >
      {/* Lista duplicada para efecto infinito */}
      {[
        { name: "ARCOR", img: "/assets/clientes/arcor.png" },
        { name: "Quilmes", img: "/assets/clientes/quilmes.png" },
        { name: "CCU", img: "/assets/clientes/ccu.png" },
        { name: "Molinos", img: "/assets/clientes/molinos.png" },
        { name: "Cartocor", img: "/assets/clientes/cartocor.png" },
        { name: "Papel Misionero", img: "/assets/clientes/papelmisionero.png" },
        { name: "Converflex", img: "/assets/clientes/converflex.png" },
      ]
        .concat([
          { name: "ARCOR", img: "/assets/clientes/arcor.png" },
          { name: "Quilmes", img: "/assets/clientes/quilmes.png" },
          { name: "CCU", img: "/assets/clientes/ccu.png" },
          { name: "Molinos", img: "/assets/clientes/molinos.png" },
          { name: "Cartocor", img: "/assets/clientes/cartocor.png" },
          { name: "Papel Misionero", img: "/assets/clientes/papelmisionero.png" },
          { name: "Converflex", img: "/assets/clientes/converflex.png" },
        ])
        .map((cliente, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center justify-center min-w-[140px] hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={cliente.img}
              alt={cliente.name}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <span className="mt-2 text-xs text-gray-500">{cliente.name}</span>
          </motion.div>
        ))}
    </motion.div>
  </div>
</section>


      {/* Footer */}
      <footer id="contacto" className="bg-blue-900 text-white mt-16">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/assets/vema-logo.png" alt="VEMA Logo" className="h-10 mb-4" />
            <p className="text-sm text-blue-200">Repuestos industriales con más de 30 años de experiencia brindando soluciones confiables y personalizadas.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Tel: 11 2156-1504 / 2201-8776</li>
              <li>Email: vema@sinectis.com.ar</li>
              <li>Dirección: Gervasio Pavón 3391, Castelar, Buenos Aires</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
              <li><a href="#trayectoria" className="hover:text-white">Trayectoria</a></li>
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#clientes" className="hover:text-white">Clientes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Síguenos</h4>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61578265752279" className="hover:text-blue-300">Facebook</a>
            </div>
          </div>
        </div>
        <div className="bg-blue-950 text-center text-xs text-blue-300 py-4">© {new Date().getFullYear()} VEMA S.R.L. — Todos los derechos reservados.</div>
      </footer>
    </div >
  );
}
