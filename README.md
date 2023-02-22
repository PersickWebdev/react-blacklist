# DOCUMENTATION

### MAIN SCRIPTS
```
- npm run server
  Runs local server on port 3001.

- npm run client  
  Runs the app in the development mode on port 3000.
```

### PACKAGES
```
DEPENDENCIES
- @reduxjs/toolkit
- react-redux
- axios
- json-server
- classnames

DEV DEPENDENCIES
- @types/axios
- @types/classnames
```

## FILE STRUCTURE
```
|-- public
|       index.html
|       database.json
|
|-- src
|       index.ts
|       index.scss
|       App.ts
|       App.module.scss
|       |-- api
|       |       index.ts
|       |       endpoints.ts
|       |       requests.ts
|       
|       |-- components
|       |       index.ts 
|       |       |-- sections
|       |       |       |-- Header
|       |       |       |       index.ts
|       |       |       |       Header.tsx
|       |       |       |       Header.module.scss
|       |       |
|       |       |       |-- Search
|       |       |       |       index.ts
|       |       |       |       Search.tsx
|       |       |       |       Search.module.scss
|       |       |
|       |       |       |-- FilterBar
|       |       |       |       index.ts
|       |       |       |       FilterBar.tsx
|       |       |       |       FilterBar.module.scss
|       |       |
|       |       |       |-- CompaniesList
|       |       |       |       index.ts
|       |       |       |       CompaniesList.tsx
|       |       |       |       CompaniesList.module.scss
|       |       |
|       |       |       |-- Footer
|       |       |       |       index.ts
|       |       |       |       Footer.tsx
|       |       |       |       Footer.module.scss  
|       |           
|       |       |-- ui
|       |       |       |-- Modal
|       |       |       |       index.ts
|       |       |       |       Modal.tsx
|       |       |       |       Modal.module.scss       
|       |       |
|       |       |       |-- Button
|       |       |       |       index.ts
|       |       |       |       Button.tsx
|       |       |       |       Button.module.scss
|       |       |       
|       |       |       |-- Input
|       |       |       |       index.ts
|       |       |       |       Input.tsx
|       |       |       |       Input.module.scss 
|             
|       |-- hooks
|       |       index.ts
|       |       useClickOutside.tsx
|          
|       |-- storage
|       |       store.ts
|       |       |-- Slices
|       |       |       adminSlice.ts
|       |       |       companiesSlice.ts
|       |       |       industriesSlice.ts
|       |       |       managersSlice.ts  
|           
|       |-- utils
|       |       index.ts
|       |       utils.ts
|       |       errorMessages.ts
|       |       regularExpressions.ts
|       
|       |-- types
|       |       index.ts
|       |       interfaces.ts
```