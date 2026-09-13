import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";

import { BRAND, PHONE_DISPLAY, PHONE_RAW, MAPS_URL} from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND} — Ligue ${PHONE_DISPLAY}` },
      {
        name: "description",
        content: `Táxi local de vila da Ponte.`,
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

       <div className="relative w-full max-w-md text-center">
        {/* <div className="flex items-center justify-center gap-2 mb-10">
          <span className="inline-block w-2 h-2 rounded-full bg-gold" />
          <span className="font-display text-xl tracking-wide text-foreground">{BRAND}</span>
        </div> -->
 */}
        <h1 className="font-display hero-title leading-[1.1] mb-5 text-foreground">
          <span className="text-gold">Táxis Vila da Ponte</span>
        </h1>

        <p className="text-muted-foreground mb-12 leading-relaxed">
         Serviço de táxi transfers.
        </p>

        <a
          href={`tel:${PHONE_RAW}`}
          className="inline-flex items-center justify-center gap-3 w-full px-8 py-6 bg-gold text-gold-foreground rounded-full font-medium text-lg"
        >
          <Phone className="w-5 h-5" strokeWidth={2} />
          <span>Ligar para {PHONE_DISPLAY}</span>
        </a>

          <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 text-sm text-muted-foreground border border-gold/10 rounded-xl px-5 py-3 bg-surface/50 hover:bg-surface transition-colors"
        > <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
          <span>Vila da Ponte, Sernancelhe</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-gold/60" strokeWidth={1.5} />
        </a>
      </div>
    </main>
  );
}
