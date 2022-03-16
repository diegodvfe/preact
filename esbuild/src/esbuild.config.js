import {build} from "esbuild";

require('esbuild').build({
  entryPoints:['../src/index.js'],/**el archivo de entrada */
  outdir:"./dist",/*la ruta donde va a crear el emquetado */
  bundle:true,/*procesador los archivos*/
  minify: true,/**el mificar*/
  watch: true,/*para que este pendiente de los cambios en los archivos  */
  sourcemap: true,/*para hacer */
  format: "esm",
}).catch(()=>process.exit(1));