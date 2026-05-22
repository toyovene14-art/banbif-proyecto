import { MapPin, Phone, Mail } from 'lucide-react';
import Breadcrumbs from '@/components/blog/Breadcrumbs';

export default function AboutPage() {
  return (
    <div className="font-jakarta">
      {/* Header */}
      <div className="bg-navy py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Acerca de' }]} />
          <h1 className="text-white font-bold mt-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            ¿Quiénes somos?
          </h1>
          <p className="text-gold mt-2 text-sm font-medium">Todo lo que tu empresa necesita saber sobre banca con Banbif en Perú</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Section 1 - Presentation */}
        <div className="bg-white rounded-2xl border border-border p-8 mb-6 shadow-sm">
          <h2 className="text-2xl font-bold text-navy mb-4">Banbif Empresas Perú — Blog Educativo</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Banbif Empresas Perú</strong> es un blog educativo operado por{' '}
            <strong className="text-foreground">EMPRENDIMIENTO YERIKA FRANCO</strong> (RUC: 20508231880), 
            con presencia en Lima, Perú. Nuestro objetivo es ayudar a emprendedores y PYMES peruanas a 
            entender, usar y aprovechar al máximo los servicios de banca empresarial disponibles en Perú.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground">Dirección</p>
                <p className="text-muted-foreground">Av. Alfredo Mendiola 1400,<br />Independencia 15302,<br />Lima, Perú</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground">Teléfono</p>
                <a href="tel:+51957416853" className="text-muted-foreground hover:text-crimson transition-colors">
                  +51 957 416 853
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground">Correo</p>
                <a href="mailto:exitosplus0001@gmail.com" className="text-muted-foreground hover:text-crimson transition-colors break-all">
                  exitosplus0001@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Mission */}
        <div className="bg-navy rounded-2xl p-8 mb-6 text-white">
          <h2 className="text-xl font-bold mb-3 text-gold">Nuestra Misión</h2>
          <p className="text-white/80 leading-relaxed text-sm">
            Nuestra misión es ayudar a emprendedores y empresarios peruanos a <strong className="text-white">entender, usar y 
            aprovechar al máximo los servicios de banca empresarial</strong> disponibles en Perú, con contenido 
            educativo gratuito, claro y sin tecnicismos. Creemos que el acceso a información financiera 
            de calidad no debe ser exclusivo de los grandes empresarios: también el dueño de una bodega 
            en Independencia, la costurera de San Juan de Lurigancho o el consultor freelance de Miraflores 
            merecen orientación clara sobre cómo usar la banca para hacer crecer su negocio.
          </p>
        </div>

        {/* Section 3 - Legal Declaration */}
        <div className="legal-widget rounded-xl p-8 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#8B0000' }}>
            ⚠️ Declaración Legal Importante
          </h2>
          <div className="space-y-2 text-sm" style={{ color: '#444441' }}>
            {[
              '✅ Blog de carácter exclusivamente educativo e informativo',
              '✅ No somos entidad bancaria regulada por la SBS del Perú',
              '✅ El contenido no constituye asesoría financiera ni bancaria profesional',
              '✅ Banbif es marca registrada del Banco Interamericano de Finanzas S.A., regulado por la SBS del Perú',
              '✅ Sin afiliación, patrocinio ni relación oficial con Banbif ni con ningún banco peruano',
            ].map((item, i) => (
              <p key={i} className="py-2 border-b last:border-0" style={{ borderColor: '#A855F730' }}>{item}</p>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t text-xs" style={{ borderColor: '#A855F730', color: '#444441' }}>
            <p className="font-semibold" style={{ color: '#5B2D8E' }}>EMPRENDIMIENTO YERIKA FRANCO</p>
            <p>RUC: 20508231880 | Registro: CRNE2026/54042</p>
            <p>Av. Alfredo Mendiola 1400, Independencia 15302, Lima, Perú</p>
            <p>Tel: +51 957 416 853 | exitosplus0001@gmail.com</p>
          </div>
        </div>

        {/* CTA WhatsApp */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4 text-sm">¿Tienes preguntas sobre el contenido de este blog?</p>
          <a
            href="https://wa.me/51957416853"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-bold text-base transition-colors shadow-lg"
          >
            💬 Escríbenos por WhatsApp
          </a>
          <p className="text-xs text-muted-foreground mt-2">Respondemos en 24 a 48 horas hábiles</p>
        </div>
      </div>
    </div>
  );
}