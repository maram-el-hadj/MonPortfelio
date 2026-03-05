<<<<<<< HEAD
# Portfolio de Maram

Bonjour ! Je suis **Maram**, étudiante en 2ème année à ENETCOM et développeuse passionnée par le **web design**, le **frontend** et les projets **MATLAB**.  
Ce portfolio regroupe mes projets personnels et académiques que je souhaite partager sur mon compte freelance.

## Mes projets

### 1. Landing Page & Web Design
- Création d’une landing page interactive avec animation et interface utilisateur moderne.  
- Technologies : HTML, CSS, React, Styled Components.  
- Caractéristiques : header animé, formulaire d’inscription, dashboard interactif.  
- Screenshot : `images/landing_page.png`

### 2. TRSYP
- Projet de suivi et gestion (Task/Report System) inspiré de Asana et Linear.  
- Fonctionnalités : création de compte, création de projet, suivi des tâches.  
- Screenshot : `images/trsyp.png`

### 3. Projets MATLAB
- Plusieurs scripts et interfaces graphiques pour le traitement d’images et la visualisation de données.  
- Exemples :  
  - Image Processing Studio : interface avec histogrammes, filtres et rotation d’images.  
  - Autres scripts : analyse et traitement de données.  
- Screenshot : `images/matlab_project.png`

## Instructions
Pour tester les projets :
- Landing page & TRSYP : ouvrir les fichiers dans un navigateur moderne ou exécuter avec `npm start` si React.  
- MATLAB : ouvrir les fichiers `.m` avec MATLAB et lancer les scripts.

---

Merci de visiter mon portfolio !  
Je suis ouverte à toute **opportunité freelance** pour des projets web ou MATLAB.
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> 50fdbc5 (Premier commit : ajout du portfolio MATLAB)
