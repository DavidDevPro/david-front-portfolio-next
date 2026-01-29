Date maj 29/01/2026
# ✅ Deploiement serveur après action GitHub : frontend

## Mise en place Serveur 

### Pré-requis Infomaniak

Avant toute chose, dans Fast Installer Infomaniak, activer :

- NVM (Node Version Manager)
- systemd

Sans ça, les services Next.js ne fonctionneront pas.

---

### Création d'alias

    nano ~/.bash_aliases

    alias systemd-user="cd ~/.config/systemd/user"
    alias front-apiportfolio="cd ~/sites/portfolio"
    alias api-apiportfolio="cd ~/sites/apiportfolio"
    alias php82="/opt/php8.2/bin/php"
    alias composer82="/opt/php8.2/bin/composer"

    # Portfolio - Déploiement Backend
    alias deploy-front-portfolio="$HOME/scripts/portfolio/prod/deploy_front.sh"
    alias deploy-api-portfolio="$HOME/scripts/portfolio/prod/deploy_api.sh"

    # Portfolio+ - Frontend
    alias st-front='systemctl --user start portfolio-front.service'
    alias stp-front='systemctl --user stop portfolio-front.service'
    alias rst-front='systemctl --user restart portfolio-front.service'
    alias sts-front='systemctl --user status portfolio-front.service'


### Utilisation des alias 

    source ~/.bash_aliases

    systemd-user
    front-portfolio

### Création service Next.js (TEST)

    nano ~/.config/systemd/user/portfolio-front.service

[Unit]
Description=Portfolio - Front (Next.js)

[Service]
Restart=always
RestartSec=5

Environment="NVM_DIR=/home/clients/16c3f4fb70b48df9def86c3f68187f5e/.nvm"
WorkingDirectory=/home/clients/16c3f4fb70b48df9def86c3f68187f5e/sites/portfolio

ExecStart=/bin/bash -c "source /home/clients/16c3f4fb70b48df9def86c3f68187f5e/.nvm/nvm.sh \
&& cd /home/clients/16c3f4fb70b48df9def86c3f68187f5e/sites/portfolio \
&& nvm use 20.19.4 \
&& npm run start -- -p 4002"

[Install]
WantedBy=default.target

---

## 🖥️ Partie 1 : Première installation

### Installer Node_Modules

    source ~/.bash_aliases
    front-portfolio

    # appeler la bonne version de Node pour éviter des erreurs
    nvm use 20.19.4
    npm ci --omit=dev

### Initialisation pour manipuler les services

    systemctl --user daemon-reload

### Démarrer le service

    st-front-portfolio
    # ou
    systemctl --user start portfolio-front.service

### Arrêter le service

    stp-front-portfolio
    # ou
    systemctl --user stop portfolio-front.service

### Redémarrer le service

    rst-front-portfolio
    # ou
    systemctl --user restart portfolio-front.service

### Rendre permanent le service

    systemctl --user enable portfolio-front.service

### Vérifier l’état du service

    sts-front-portfolio
    # ou
    systemctl --user status portfolio-front.service

---

## 🖥️ Partie 2 : Maj

### Réinstaller les dépendances si besoin

    source ~/.bash_aliases
    front-portfolio

    nvm use 20.19.4
    npm ci --omit=dev

### Initialisation pour manipuler les services (si le .service a été modifié)

    systemctl --user daemon-reload

### Redémarrer le service

    rst-front-portfolio
    # ou
    systemctl --user restart portfolio-front.service


Date maj 29/01/2026
# ✅ Deploiement serveur après action GitHub : backend

## Mise en place Serveur 

### Création d'alias

    nano ~/.bash_aliases

    alias front-apiportfolio="cd ~/sites/portfolio"
    alias api-apiportfolio="cd ~/sites/apiportfolio"
    alias php82="/opt/php8.2/bin/php"
    alias composer82="/opt/php8.2/bin/composer"

    # Portfolio - Déploiement Backend
    alias deploy-front-portfolio="$HOME/scripts/portfolio/prod/deploy_front.sh"
    alias deploy-api-portfolio="$HOME/scripts/portfolio/prod/deploy_api.sh"

    # Portfolio+ - Frontend
    alias st-front='systemctl --user start portfolio-front.service'
    alias stp-front='systemctl --user stop portfolio-front.service'
    alias rst-front='systemctl --user restart portfolio-front.service'
    alias sts-front='systemctl --user status portfolio-front.service'

---

### Utilisation des alias 

    source ~/.bash_aliases

    api-portfolio

---

# 🖥️ Partie 1 : Première installation

    source ~/.bash_aliases
    api-portfolio

### Installer composer

    composer82 install --no-dev --prefer-dist --no-interaction --optimize-autoloader

### Générer la clé 

    php82 artisan key:generate

### Première installation (TEST seulement)

    php82 artisan migrate

### Refresh BDD + Seeder (TEST)

    php82 artisan migrate:fresh --seed

### Créer le lien storage

    php82 artisan storage:link

---

### Action pour le cache, config etc…

Dans `composer.json` :
"deploy": [
"@php artisan storage:link || true",
"@php artisan optimize:clear",
"@php artisan config:cache",
"@php artisan route:cache",
"@php artisan view:cache"
]

Lancer :

    composer82 run deploy

Ce script fait pareil que :

    php82 artisan optimize:clear
    php82 artisan config:cache
    php82 artisan route:cache
    php82 artisan view:cache

---

### À faire après chaque déploiement – droits backend

    api-portfolio
    find . -type d -exec chmod 755 {} \;
    find . -type f -exec chmod 644 {} \;
    chmod -R 775 storage bootstrap/cache

---

### Redémarrer les services queue

    st-queue-portfolio
    stp-queue-portfolio
    sts-queue-portfolio
    rst-queue-portfolio

---

# 🖥️ Partie 2 : Maj

### Action pour le cache, config etc…

Dans `composer.json` :
"deploy": [
"@php artisan storage:link || true",
"@php artisan optimize:clear",
"@php artisan config:cache",
"@php artisan route:cache",
"@php artisan view:cache"
]

Lancer :

    composer82 run deploy

Ce script fait pareil que :

    php82 artisan optimize:clear
    php82 artisan config:cache
    php82 artisan route:cache
    php82 artisan view:cache

---

### À faire après chaque déploiement – droits backend

    api-test
    find . -type d -exec chmod 755 {} \;
    find . -type f -exec chmod 644 {} \;
    chmod -R 775 storage bootstrap/cache

---

source ~/.bash_aliases

# Déploiement FRONT PROD
deploy-front-portfolio

# Déploiement BACKEND PROD
deploy-api-portfolio