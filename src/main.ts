import "./styles.css"

import "preline/preline"

import Alpine from 'alpinejs'
import PineconeRouter from 'pinecone-router';

import { icons, createIcons } from 'lucide';

import fileConfigData  from "./components/data/fileConfig";
import uploadConfigData  from "./components/data/uploadConfig";

import redactionConfigStore from "./components/store/redactionConfig";
import settingsConfigStore from "./components/store/settingsConfig";

createIcons({ icons })

Alpine.plugin(PineconeRouter);

window.PineconeRouter.settings.templateTargetId = 'content'
window.PineconeRouter.add('/', {template: '/src/templates/home.html'})
window.PineconeRouter.add('/notfound', {template: '/src/templates/404.html'})

window.Alpine = Alpine;

window.RedactionConfigStore = redactionConfigStore;

window.SettingsConfigData = settingsConfigStore;

window.FileConfigData = fileConfigData;

window.UploadConfigData = uploadConfigData;

Alpine.start();
