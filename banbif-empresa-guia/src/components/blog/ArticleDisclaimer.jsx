export default function ArticleDisclaimer() {
  return (
    <div className="mt-10 p-5 bg-muted border border-border rounded-xl text-xs text-muted-foreground leading-relaxed">
      <p className="font-semibold text-foreground mb-2">📋 Descargo de responsabilidad</p>
      <p>
        Contenido educativo publicado por <strong>EMPRENDIMIENTO YERIKA FRANCO</strong> (RUC: 20508231880). 
        Av. Alfredo Mendiola 1400, Independencia 15302, Lima, Perú. Tel: +51 957 416 853. 
        Este blog no es una entidad bancaria ni tiene afiliación oficial con Banbif ni con ninguna 
        institución regulada por la SBS del Perú. El contenido publicado tiene carácter exclusivamente 
        educativo e informativo y no constituye asesoría financiera, legal ni bancaria profesional. 
        Para consultas bancarias directas, visita la página oficial de Banbif en{' '}
        <a href="https://www.banbif.com.pe" target="_blank" rel="noopener noreferrer" className="underline hover:text-crimson">
          www.banbif.com.pe
        </a>.
      </p>
    </div>
  );
}