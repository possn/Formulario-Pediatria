# Formulário de Pediatria 3ª Edição — PWA

Progressive Web App para o Formulário de Medicamentos em Pediatria (3ª edição).

## Funcionalidades

- 📖 Visualização das 100 páginas do formulário
- 🔍 Pesquisa de texto completo
- 🖼️ Navegação por miniaturas
- 🔄 Navegação por deslize (swipe)
- 📴 Modo offline (Service Worker)
- 📱 Instalável no ecrã principal (iOS e Android)
- 🔍 Zoom nas páginas

## Deploy no GitHub Pages

### 1. Criar repositório

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/formulario-pediatria.git
git push -u origin main
```

### 2. Activar GitHub Pages

1. Ir a **Settings** → **Pages**
2. Em **Source**, seleccionar **GitHub Actions**
3. O workflow em `.github/workflows/deploy.yml` faz o deploy automaticamente

### 3. Instalar no iPhone

1. Abrir Safari e navegar para `https://SEU_USUARIO.github.io/formulario-pediatria/`
2. Tocar no botão de partilha (⬆)
3. Seleccionar **"Adicionar ao Ecrã Principal"**
4. Confirmar com **"Adicionar"**

A app fica disponível como ícone no ecrã principal, com acesso offline às páginas já visitadas.

## Estrutura

```
├── index.html          # App principal
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (cache offline)
├── icon-192.png        # Ícone PWA
├── icon-512.png        # Ícone PWA grande
├── apple-touch-icon.png # Ícone iOS
├── images/             # Imagens das páginas (1.jpeg–100.jpeg)
├── texts/              # Texto OCR para pesquisa (1.txt–100.txt)
└── .github/workflows/  # CI/CD GitHub Actions
    └── deploy.yml
```
