# ✅ notice deploiement automatique via action github
Date maj 31/08/2025
## 🖥️ Partie 1 : Création des variables dans le repo
dans le repository il faut configurer dans le menu Secrets and variable dans action puis secrets

### Créer les variables suivante :
MY_GITHUB_TOKEN => xxxx
INFOMANIAK_SERVER => 3e526k.ftp.infomaniak.com
INFOMANIAK_USER => 3e526k_xxxx
INFOMANIAK_PASSWORD => xxxxx
SERVER_DIR    => sites/xxxx/

## ☁️ Partie 2 : Création des actions
dans le repo, il faut dans .github\workflows\deploy.yml

### 1. laction suivante pour le front (Next)
name: Deploy Project to Infomaniak via FTP

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # Étape 1 : Récupération du code source
      - name: Checkout code
        uses: actions/checkout@v3

      # (conseillé) Aligner la version Node de la CI avec celle du serveur
      - name: Use Node 20.x
        uses: actions/setup-node@v4
        with:
          node-version: 20.x
          cache: "npm"

      # Étape 2 : Génération du fichier .env.production pour le build
      - name: Générer .env.production
        run: |
          echo "NEXT_PUBLIC_API_URL=${{ vars.NEXT_PUBLIC_API_URL }}" >> .env.production
          echo "NEXT_PUBLIC_IMAGE_BASE_URL=${{ vars.NEXT_PUBLIC_IMAGE_BASE_URL }}" >> .env.production
          echo "NEXT_PUBLIC_APP_NAME=${{ vars.NEXT_PUBLIC_APP_NAME }}" >> .env.production

      # Étape 3 : Installer les dépendances nécessaires au build
      - name: Installer les dépendances (prod + dev nécessaires au build)
        run: npm ci

      # Étape 4 : Build du projet (avec .env.production chargé)
      - name: Construire le projet
        env:
          NODE_ENV: production
        run: npm run build

      # Étape 5 : Supprimer .env.production après le build
      - name: Supprimer .env.production
        run: rm -f .env.production

      # Étape 6 : Préparer le dossier de déploiement (sans .next/cache)
      - name: Préparer le dossier de déploiement
        run: |
          # 1) supprimer le cache Next (inutile en run)
          rm -rf .next/cache
          # 2) créer le dossier cible
          mkdir -p deploy
          # 3) copier uniquement ce qui sert à `next start`
          cp -r .next deploy/.next
          cp -r public deploy/public
          cp package.json deploy/package.json
          cp package-lock.json deploy/package-lock.json
          # 4) double sécurité (si jamais le cache réapparaissait)
          rm -rf deploy/.next/cache
          # (optionnel) alléger : enlever les sourcemaps
          find deploy -type f -name "*.map" -delete

      # Étape 7 : Déploiement sur Infomaniak via FTP
      - name: Déployer via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ${{ secrets.INFOMANIAK_SERVER }}
          username: ${{ secrets.INFOMANIAK_USER }}
          password: ${{ secrets.INFOMANIAK_PASSWORD }}
          protocol: ftp
          local-dir: deploy/
          server-dir: ${{ secrets.SERVER_DIR }}


### 2. l'action suivante pour le backend

name: Deploy Project to Infomaniak via FTP

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # Étape 1 : Récupération du code source
      - name: Checkout code
        uses: actions/checkout@v3

      # (conseillé) Aligner la version Node de la CI avec celle du serveur
      - name: Use Node 20.x
        uses: actions/setup-node@v4
        with:
          node-version: 20.x
          cache: "npm"

      # Étape 2 : Génération du fichier .env.production pour le build
      - name: Générer .env.production
        run: |
          echo "NEXT_PUBLIC_API_URL=${{ vars.NEXT_PUBLIC_API_URL }}" >> .env.production
          echo "NEXT_PUBLIC_IMAGE_BASE_URL=${{ vars.NEXT_PUBLIC_IMAGE_BASE_URL }}" >> .env.production
          echo "NEXT_PUBLIC_APP_NAME=${{ vars.NEXT_PUBLIC_APP_NAME }}" >> .env.production

      # Étape 3 : Installer les dépendances nécessaires au build
      - name: Installer les dépendances (prod + dev nécessaires au build)
        run: npm ci

      # Étape 4 : Build du projet (avec .env.production chargé)
      - name: Construire le projet
        env:
          NODE_ENV: production
        run: npm run build

      # Étape 5 : Supprimer .env.production après le build
      - name: Supprimer .env.production
        run: rm -f .env.production

      # Étape 6 : Préparer le dossier de déploiement (sans .next/cache)
      - name: Préparer le dossier de déploiement
        run: |
          # 1) supprimer le cache Next (inutile en run)
          rm -rf .next/cache
          # 2) créer le dossier cible
          mkdir -p deploy
          # 3) copier uniquement ce qui sert à `next start`
          cp -r .next deploy/.next
          cp -r public deploy/public
          cp package.json deploy/package.json
          cp package-lock.json deploy/package-lock.json
          # 4) double sécurité (si jamais le cache réapparaissait)
          rm -rf deploy/.next/cache
          # (optionnel) alléger : enlever les sourcemaps
          find deploy -type f -name "*.map" -delete

      # Étape 7 : Déploiement sur Infomaniak via FTP
      - name: Déployer via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ${{ secrets.INFOMANIAK_SERVER }}
          username: ${{ secrets.INFOMANIAK_USER }}
          password: ${{ secrets.INFOMANIAK_PASSWORD }}
          protocol: ftp
          local-dir: deploy/
          server-dir: ${{ secrets.SERVER_DIR }}
