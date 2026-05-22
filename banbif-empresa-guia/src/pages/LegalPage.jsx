import Breadcrumbs from '@/components/blog/Breadcrumbs';

export default function LegalPage() {
  return (
    <div className="font-jakarta">
      <div className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Aviso Legal' }]} />
          <h1 className="text-white font-bold mt-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)' }}>
            Aviso Legal
          </h1>
          <p className="text-gold mt-2 text-sm">Blog Educativo — EMPRENDIMIENTO YERIKA FRANCO</p>
        </div>
        <div className="h-1 bg-gold mt-8"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Titular Box */}
        <div className="bg-cream border-l-4 border-gold rounded-r-xl p-6 mb-8">
          <h2 className="font-bold mb-3" style={{ color: '#5B2D8E' }}>Titular del blog</h2>
          <div className="text-sm space-y-1" style={{ color: '#444441' }}>
            <p><strong>Nombre legal:</strong> EMPRENDIMIENTO YERIKA FRANCO</p>
            <p><strong>RUC:</strong> 20508231880</p>
            <p><strong>Registro:</strong> CRNE2026/54042</p>
            <p><strong>Domicilio:</strong> Av. Alfredo Mendiola 1400, Independencia 15302, Lima, Perú</p>
            <p><strong>Teléfono:</strong> +51 957 416 853</p>
            <p><strong>Correo:</strong> exitosplus0001@gmail.com</p>
            <p><strong>País de registro:</strong> Venezuela (empresa con operación de contenido digital en Perú)</p>
          </div>
        </div>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">1. Declaración educativa</h2>
            <div className="bg-muted/40 border border-border rounded-xl p-5">
              <p>Este blog es de carácter <strong>exclusivamente educativo e informativo</strong>. El contenido publicado en <em>Banbif Empresas Perú — Blog Educativo</em> no constituye asesoría financiera, legal ni bancaria profesional. Toda la información publicada tiene como único propósito la formación y orientación general de emprendedores y PYMES peruanas.</p>
              <p className="mt-3">Los lectores deben consultar a un profesional financiero, asesor bancario o contador público colegiado antes de tomar decisiones económicas o financieras basadas en el contenido de este blog.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">2. Declaración sobre la marca Banbif</h2>
            <div className="bg-crimson/5 border border-crimson/20 rounded-xl p-5">
              <p>
                <strong>"Banbif"</strong> es la marca comercial del <strong>Banco Interamericano de Finanzas S.A.</strong>, institución financiera regulada por la <strong>Superintendencia de Banca, Seguros y AFP (SBS) del Perú</strong>, con RUC 20100116635. 
              </p>
              <p className="mt-3">Este blog —operado por EMPRENDIMIENTO YERIKA FRANCO— <strong>no tiene ninguna afiliación, patrocinio, autorización ni relación oficial</strong> con el Banco Interamericano de Finanzas S.A. ni con ninguna de sus filiales o subsidiarias. El uso del término "Banbif" en este blog es únicamente con fines descriptivos y educativos, para referirse a los servicios bancarios que dicha institución ofrece al público en Perú.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">3. Limitación de responsabilidad</h2>
            <p>EMPRENDIMIENTO YERIKA FRANCO no será responsable de:</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Decisiones financieras, bancarias o empresariales tomadas basándose en el contenido educativo de este blog.</li>
              <li>Cambios en los productos, servicios, tarifas o condiciones de Banbif que no hayan sido reflejados oportunamente en el blog.</li>
              <li>Daños directos o indirectos derivados del uso o imposibilidad de uso de la información publicada.</li>
              <li>Errores u omisiones en el contenido publicado, aunque se hace todo lo posible por mantener la información actualizada y precisa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">4. Propiedad intelectual del contenido</h2>
            <p>Los textos, artículos, guías, estructura y diseño de este blog son propiedad de <strong>EMPRENDIMIENTO YERIKA FRANCO</strong> y están protegidos por las leyes de propiedad intelectual de la República del Perú (Decreto Legislativo N° 822 — Ley sobre el Derecho de Autor).</p>
            <p className="mt-3">Se permite la reproducción parcial del contenido con fines educativos no comerciales, siempre que se cite la fuente y se incluya un enlace al artículo original. Queda prohibida la reproducción total sin autorización escrita.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">5. Legislación aplicable y jurisdicción</h2>
            <p>Este aviso legal se rige por la legislación de la <strong>República del Perú</strong>. Para cualquier controversia derivada del uso de este blog, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de <strong>Lima, Perú</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">6. Actualizaciones de este aviso</h2>
            <p>EMPRENDIMIENTO YERIKA FRANCO se reserva el derecho de modificar este Aviso Legal en cualquier momento. Los cambios serán efectivos desde su publicación en este blog. Se recomienda revisar este documento periódicamente.</p>
          </section>
        </div>
      </div>
    </div>
  );
}