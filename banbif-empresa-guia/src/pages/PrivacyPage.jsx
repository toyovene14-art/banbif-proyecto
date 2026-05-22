import Breadcrumbs from '@/components/blog/Breadcrumbs';

export default function PrivacyPage() {
  return (
    <div className="font-jakarta">
      <div className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Política de Privacidad' }]} />
          <h1 className="text-white font-bold mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
            Política de Privacidad
          </h1>
          <p className="text-gold mt-2 text-sm">Última actualización: Mayo 2026</p>
        </div>
        <div className="h-1 bg-gold mt-8"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 prose prose-sm max-w-none">
        <div className="bg-cream border-l-4 border-gold rounded-r-xl p-5 mb-8 not-prose">
          <p className="text-sm font-semibold" style={{ color: '#5B2D8E' }}>Responsable del tratamiento de datos</p>
          <p className="text-sm mt-1" style={{ color: '#444441' }}>
            <strong>EMPRENDIMIENTO YERIKA FRANCO</strong><br />
            RUC: 20508231880<br />
            Av. Alfredo Mendiola 1400, Independencia 15302, Lima, Perú<br />
            Correo: exitosplus0001@gmail.com | Tel: +51 957 416 853
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">1. Datos personales recopilados</h2>
            <p>A través de los formularios de este blog, recopilamos los siguientes datos personales:</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li><strong>Formulario de contacto:</strong> nombre completo, correo electrónico, país, asunto y mensaje.</li>
              <li><strong>Formulario de suscripción:</strong> nombre y correo electrónico.</li>
            </ul>
            <p className="mt-3">No recopilamos datos sensibles (datos de salud, datos financieros personales, ni datos de identificación bancaria).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">2. Finalidad del tratamiento</h2>
            <p>Los datos personales recopilados son utilizados exclusivamente para:</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Responder a las consultas enviadas a través del formulario de contacto.</li>
              <li>Enviar boletines educativos sobre banca empresarial en Perú a los suscriptores que lo solicitaron voluntariamente.</li>
              <li>Mejorar el servicio educativo del blog mediante análisis de estadísticas de uso (Google Analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">3. Cookies y Google Analytics</h2>
            <p>Este blog utiliza cookies técnicas (necesarias para el funcionamiento del sitio) y cookies analíticas de <strong>Google Analytics</strong> para medir el tráfico y el comportamiento de los visitantes de forma anónima y agregada.</p>
            <p className="mt-2">Google Analytics puede utilizar cookies como <em>_ga</em>, <em>_gid</em> y <em>_gat</em>. Los datos recopilados por Google Analytics no permiten identificar a los visitantes individualmente y se procesan de acuerdo con la política de privacidad de Google (policies.google.com/privacy).</p>
            <p className="mt-2">Puedes desactivar Google Analytics en tu navegador o utilizando el complemento de inhabilitación disponible en tools.google.com/dlpage/gaoptout.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">4. Cumplimiento con la Ley N° 29733 (Perú)</h2>
            <p>El tratamiento de datos personales realizado por EMPRENDIMIENTO YERIKA FRANCO se realiza en cumplimiento de la <strong>Ley N° 29733 — Ley de Protección de Datos Personales del Perú</strong> y su Reglamento (D.S. N° 003-2013-JUS), emitida por la Autoridad Nacional de Protección de Datos Personales (ANPDP) del Ministerio de Justicia y Derechos Humanos del Perú.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">5. Derechos ARCO del titular</h2>
            <p>De conformidad con la Ley N° 29733, los titulares de datos personales tienen los siguientes derechos:</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li><strong>Acceso:</strong> Conocer qué datos personales suyos almacenamos.</li>
              <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong>Cancelación:</strong> Solicitar la supresión de sus datos personales.</li>
              <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
            </ul>
            <p className="mt-3">Para ejercer cualquiera de estos derechos, envíe un correo a <a href="mailto:exitosplus0001@gmail.com" className="text-crimson underline">exitosplus0001@gmail.com</a> indicando el derecho que desea ejercer y adjuntando copia de su DNI.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">6. Seguridad de los datos</h2>
            <p>Adoptamos medidas técnicas y organizativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, destrucción o alteración. Sin embargo, ningún método de transmisión por internet es 100% seguro.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">7. Cambios en esta política</h2>
            <p>Podemos actualizar esta Política de Privacidad ocasionalmente. La fecha de la última actualización siempre se indicará al inicio de este documento. Se recomienda revisar esta política periódicamente.</p>
          </section>
        </div>
      </div>
    </div>
  );
}