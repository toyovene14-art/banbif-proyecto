export default function LegalWidget() {
  return (
    <div className="legal-widget rounded-r-lg p-5 text-sm">
      <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#5B2D8E' }}>
        ⚠️ Aviso importante
      </h4>
      <div style={{ color: '#444441' }} className="space-y-2 text-xs leading-relaxed">
        <p>Este blog es <strong>educativo e informativo</strong>.</p>
        <div className="pt-2 border-t border-gold/20">
          <p className="font-semibold" style={{ color: '#5B2D8E' }}>EMPRENDIMIENTO YERIKA FRANCO</p>
          <p>RUC: 20508231880</p>
          <p>Av. Alfredo Mendiola 1400,</p>
          <p>Independencia 15302, Lima, Perú</p>
          <p>Tel: +51 957 416 853</p>
        </div>
        <div className="pt-2 border-t border-gold/20">
          <p>⚡ No somos entidad bancaria regulada por la SBS del Perú.</p>
          <p className="mt-1">🏦 Banbif es marca registrada del Banco Interamericano de Finanzas S.A.</p>
          <p className="mt-1">🔗 Sin afiliación oficial con este blog.</p>
        </div>
      </div>
    </div>
  );
}