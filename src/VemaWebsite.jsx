import React from "react";
import { motion } from "framer-motion";

export default function VemaWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/assets/vema-logo.png" alt="VEMA S.R.L. logo" className="h-12 w-auto object-contain" />
            <div>
              <h1 className="text-xl font-semibold">VEMA S.R.L.</h1>
              <p className="text-sm text-gray-500">Repuestos industriales • Más de 30 años</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#inicio" className="hover:text-blue-700">Inicio</a>
            <a href="#trayectoria" className="hover:text-blue-700">Trayectoria</a>
            <a href="#servicios" className="hover:text-blue-700">Servicios</a>
            <a href="#clientes" className="hover:text-blue-700">Clientes</a>
            <a href="#contacto" className="hover:text-blue-700">Contacto</a>
            <a href="tel:+541121561504" className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:opacity-95">Llámanos</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">VEMA S.R.L.</h2>
          <p className="mt-4 text-gray-600 max-w-xl">Empresa familiar con más de 30 años de trayectoria en repuestos industriales. Acompañamos a las industrias más importantes de Argentina con soluciones confiables, personalizadas y respuestas inmediatas.</p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-700">●</span><span className="text-sm text-gray-700">Inventario y repuestos para línea industrial</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-700">●</span><span className="text-sm text-gray-700">Asesoramiento técnico y soluciones a medida</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 text-blue-700">●</span><span className="text-sm text-gray-700">Entrega rápida y servicio posventa</span></li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+541121561504" className="inline-block bg-blue-700 text-white px-5 py-3 rounded-md font-medium">Llámanos: 11 2156-1504</a>
            <a href="#contacto" className="inline-block border border-blue-700 text-blue-700 px-5 py-3 rounded-md">Contacto</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-white rounded-2xl p-6 shadow-sm">
          <img src="/assets/vema-hero.jpg" alt="Repuestos industriales" className="w-full h-60 object-cover rounded-lg" />
          <p className="mt-4 text-xs text-gray-500">Con base en Castelar, Buenos Aires — respaldo y confianza avalada por clientes como ARCOR, Quilmes y Molinos Río de la Plata.</p>
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
          {['Suministro de repuestos','Asesoría técnica','Logística y entrega'].map((title,i)=> (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i*0.2 }} className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold">{title}</h4>
              <p className="mt-2 text-sm text-gray-600">{i===0?'Amplio stock y búsqueda puntual de piezas difíciles de conseguir.':i===1?'Soporte técnico para seleccionar la mejor solución según la máquina y proceso.':'Entregas rápidas y coordinación para minimizar tiempos de paro.'}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="container mx-auto px-6 py-12 bg-white rounded-t-xl">
        <motion.h3 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold">Algunos de nuestros clientes</motion.h3>
        <p className="mt-2 text-sm text-gray-600">Empresas que confían en VEMA S.R.L.</p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
          {['ARCOR','Quilmes','CCU','Molinos','Otras industrias','y más...'].map((c,i)=> (
            <div key={i} className="flex items-center justify-center p-4"><span className={`text-sm ${i===5?'text-gray-500':'font-medium'}`}>{c}</span></div>
          ))}
        </motion.div>
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
              <li>Dirección: Gervasio Pavón 3391, Morón, Buenos Aires</li>
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
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
              <a href="#" className="hover:text-blue-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="bg-blue-950 text-center text-xs text-blue-300 py-4">© {new Date().getFullYear()} VEMA S.R.L. — Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}
