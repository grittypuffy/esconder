import "./styles.css"

import "preline/preline"

import Alpine from 'alpinejs'
import PineconeRouter from 'pinecone-router';

import { icons, createIcons } from 'lucide';

createIcons({ icons })

Alpine.plugin(PineconeRouter);

window.Alpine = Alpine;

Alpine.start();
