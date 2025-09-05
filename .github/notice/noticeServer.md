# ✅ Deploiement server après action github : frontend
Date maj 31/08/2025
## 🖥️ Partie 1 : Première installation
### Installer Node_Modules
    npm ci --omit=dev
### Initialisation pour manipuler les services
    systemctl --user daemon-reload
### Démarrer le service	
    systemctl --user start nextjs
### Arrêter le service
    systemctl --user stop nextjs
### Redémarrer le service
    systemctl --user restart nextjs
### Rendre permanent le service
    systemctl --user enable nextjs
### Vérifier l’état du service
    systemctl --user status nextjs

## 🖥️ Partie 2 : Maj
### Initialisation pour manipuler les services
    systemctl --user daemon-reload
### Redémarrer le service
    systemctl --user restart nextjs

# ✅ Deploiement server après action github : backend

## 🖥️ Partie 1 : Première installation
### Installer composer
    /opt/php8.2/bin/composer install --no-dev --prefer-dist --no-interaction --optimize-autoloader
### Générer la clé 
    /opt/php8.2/bin/php artisan key:generate
### Refresh BDD+Seeder	
    /opt/php8.2/bin/php artisan migrate
    /opt/php8.2/bin/php artisan migrate:fresh --seed
### Créer le lien
    /opt/php8.2/bin/php artisan storage:link
### Action pour le cache, config etc…
    pour utiliser cette ligne il faut mettre à jours le composer.json dans la zone script
    "deploy": [
        "@php artisan storage:link || true",
        "@php artisan optimize:clear",
        "@php artisan config:cache",
        "@php artisan route:cache",
        "@php artisan view:cache"
    ]

    /opt/php8.2/bin/composer run deploy

Ce script fait pareil que ces 4 lignes
    /opt/php8.2/bin/php artisan optimize
    /opt/php8.2/bin/php artisan config:cache
    /opt/php8.2/bin/php artisan route:cache
    /opt/php8.2/bin/php artisan view:cache

## 🖥️ Partie 2 : Maj
### Action pour le cache, config etc…
    pour utiliser cette ligne il faut mettre à jours le composer.json dans la zone script
    "deploy": [
        "@php artisan storage:link || true",
        "@php artisan optimize:clear",
        "@php artisan config:cache",
        "@php artisan route:cache",
        "@php artisan view:cache"
    ]

    /opt/php8.2/bin/composer run deploy

Ce script fait pareil que ces 4 lignes
    /opt/php8.2/bin/php artisan optimize
    /opt/php8.2/bin/php artisan config:cache
    /opt/php8.2/bin/php artisan route:cache
    /opt/php8.2/bin/php artisan view:cache