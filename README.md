# ⚡ TaskAgent

> Gestionnaire de tâches intelligent avec chat IA intégré - Par Mohammed

![TaskAgent](https://img.shields.io/badge/TaskAgent-v1.0-%23e94560?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)

## 🎯 Fonctionnalités

### Gestion de Tâches
- ✅ Ajouter, modifier, supprimer, compléter des tâches
- 📅 Dates limites avec calcul automatique (aujourd'hui, demain, en retard)
- 🏷️ Catégories multiples : FedIA, Cours, Alternance, École, Sport, Santé, Travail, Projet, Finance, Perso, Admin, Autre
- ⚡ Priorités : Haute, Moyenne, Basse
- 📝 Description/Notes pour chaque tâche
- 🔍 Filtres par catégorie et statut

### 🤖 Chat IA Intelligent
- Interface conversationnelle en français naturel
- L'IA comprend et exécute tes demandes automatiquement
- **4 modèles supportés :**
  - 🤖 **OpenAI** (GPT-4o-mini)
  - 🌊 **Mistral** (Mistral Small)
  - 🧠 **Claude** (Claude 3.5 Haiku)
  - 🔮 **Grok** (Grok 2 mini)
- Mode local (sans IA) disponible

### 🎨 Interface
- Dark theme moderne
- 2 vues : Chat & Board
- Responsive design
- Animations fluides
- Statistiques en temps réel

## 🚀 Installation

### Option 1 : Ouvrir directement
1. Télécharge le fichier `taskagent-standalone.html`
2. Double-clique pour l'ouvrir dans ton navigateur
3. C'est prêt !

### Option 2 : Serveur local
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve .

# Avec PHP
php -S localhost:8000
```
Puis ouvre `http://localhost:8000/taskagent-standalone.html`

## ⚙️ Configuration

### Première utilisation
1. **Choisis ton modèle d'IA** (OpenAI, Mistral, Claude ou Grok)
2. **Colle ta clé API**
3. Clique sur "Sauvegarder"

### Obtenir une clé API

| Modèle | Site | Lien |
|--------|------|------|
| OpenAI | platform.openai.com | [API Keys](https://platform.openai.com/api-keys) |
| Mistral | console.mistral.ai | [API Keys](https://console.mistral.ai/api-keys/) |
| Claude | console.anthropic.com | [API Keys](https://console.anthropic.com/api-keys) |
| Grok | console.x.com | [API Keys](https://console.x.com/api_keys) |

### Mode local
Si tu ne veux pas utiliser d'IA, clique sur "Utiliser le mode local" lors de la configuration.

## 💬 Utilisation du Chat

### Exemples de commandes :
```
"ajoute rapport FedIA pour le 15 avril"
"j'ai fini mon TP de math"
"supprime la tâche de sport"
"c'est quoi mon planning ?"
"ajoute + musculation pour demain + examen pour vendredi"
```

### Comment ça marche ?
L'IA parse tes messages et :
- Crée automatiquement les tâches avec la bonne catégorie et priorité
- Calcule les dates relatives ("lundi prochain" → date exacte)
- Propose plusieurs tâches si tu en donnes plusieurs d'un coup

## 📁 Structure

```
taskagent-standalone.html  # Application complète (HTML + CSS + JS)
README.md                  # Ce fichier
```

## 🛠️ Technologies

- **React 18.2** - Bibliothèque UI
- **Babel 7.23** - Transpilation JSX
- **LocalStorage** - Persistance des données
- **Fetch API** - Appels aux modèles IA
- **Google Fonts** - Typographie (DM Mono, Outfit)

## 🔧 Personnalisation

### Modifier les catégories
Edite le tableau `CATEGORIES` dans le code :
```javascript
const CATEGORIES = [
    { id: "mon_id", label: "Mon Label", color: "#hexcode", icon: "emoji" },
    // ...
];
```

### Modifier le prompt système
Edite la constante `SYSTEM_PROMPT` pour personnaliser le comportement de l'IA.

## 📱 Compatibilité

- ✅ Chrome / Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile (responsive)

## 🔒 Sécurité

- ✅ Données stockées localement (localStorage)
- ✅ Aucune donnée envoyée ailleurs (sauf via API IA si configuré)
- ✅ Clés API stockées localement

## 📈 Statistiques

- ⚠️ En retard
- 🔥 Aujourd'hui
- 📌 En cours
- ✅ Terminées

## 🎨 Screenshots

### Vue Chat
Interface conversationnelle pour ajouter des tâches naturellement.

### Vue Board
Tableau kanban avec filtres et détails des tâches.

## 📝 Licence

MIT License - Libre d'utilisation et de modification.

## 👤 Auteur

**Mohammed** - [GitHub](https://github.com/)

---

⭐ N'oublie pas de star si ça te plaît !
