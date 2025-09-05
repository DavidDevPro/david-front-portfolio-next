# ✅ Mise à jour Node.js & npm avec NVM
https://github.com/coreybutler/nvm-windows/releases
Date maj 31/08/2025
## 🖥️ Partie 1 : Mise à jour en local (Windows avec NVM for Windows)

### 1. Vérifier que `nvm` fonctionne  
nvm version

### 2. Lister les versions disponibles  
nvm list available

### 3. Installer la version LTS recommandée (ex: 20.19.4)  
nvm install 20.19.4

### 4. Utiliser cette version  
nvm use 20.19.4

### 5. Vérifier la version de Node.js  
node -v  
→ Résultat attendu : v20.19.4

### 6. Mettre à jour `npm` à la dernière version stable  
npm install -g npm@latest

⚠️ **Important** : mettre à jour `node` **avant** `npm`, sinon la mise à jour de `node` écrasera la version de `npm`.

---

## ☁️ Partie 2 : Mise à jour sur le serveur (ex: Infomaniak Linux avec `nvm` bash)

### 1. Vérifier que NVM est installé  
command -v nvm  
→ Résultat attendu : nvm

### 2. Lister les versions disponibles  
nvm ls-remote

### 3. Installer la version souhaitée  
nvm install 20.19.4

### 4. Utiliser cette version  
nvm use 20.19.4

### 5. Vérifier que Node.js est bien à jour  
node -v  
→ Résultat attendu : v20.19.4

### 6. Mettre à jour `npm`  
npm install -g npm@latest

### 7. Vérifier la version finale de npm  
npm -v  
→ Résultat attendu : 11.5.2

---

## 🧠 Rappel

✅ Toujours faire dans cet ordre :

1. nvm install <node-version>
2. nvm use <node-version>
3. npm install -g npm@latest

⛔ Sinon, mettre à jour `node` **après** `npm` écrase la version mise à jour de `npm`.
