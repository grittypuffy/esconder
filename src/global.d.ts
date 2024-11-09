import { Alpine as AlpineType } from 'alpinejs';

import { fileConfigData as FileConfigType } from "./components/data/fileConfig";
import { uploadConfigData as UploadConfigType } from "./components/data/uploadConfig";

import { redactionConfigStore as RedactionConfigType } from "./components/store/redactionConfig";
import { settingsConfigStore as SettingsConfigType } from "./components/store/settingsConfig";


declare global {
  var Alpine: AlpineType
  var RedactionConfigStore: RedactionConfigType
  var FileConfigData: FileConfigType
  var UploadConfigData: UploadConfigType
  var SettingsConfigData: SettingsConfigType
}
