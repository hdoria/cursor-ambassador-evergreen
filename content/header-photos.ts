import { BentoImage } from '@/lib/types';

// Pool de fotos do hero. Vazio de proposito: o template vinha com fotos de
// eventos de outras comunidades (Seul, Berlim, SF) e nao vamos exibi-las como
// se fossem nossas. Com o pool vazio o bento renderiza tiles escuros, igual ao
// cursorthailand.com. Quando as fotos dos meetups brasileiros chegarem, basta
// adiciona-las aqui (minimo ideal: 7, uma por slot do desktop).
export const headerPhotoPool: BentoImage[] = [];
