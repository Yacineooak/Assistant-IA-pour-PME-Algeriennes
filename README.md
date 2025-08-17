# Assistant IA pour PME Algériennes

## Vue d'ensemble

Cette application est un assistant IA complet conçu spécifiquement pour les petites et moyennes entreprises (PME) algériennes. Elle offre des outils d'analyse de marché, de gestion opérationnelle et d'assistance marketing, le tout alimenté par l'intelligence artificielle.

## Fonctionnalités principales

### 🧭 Tableau de bord intelligent
- Statistiques en temps réel (revenus, clients, stock, conversion)
- Actions rapides pour les tâches courantes
- Insights générés par l'IA
- Alertes et notifications importantes
![localhost_2025-08-02_22-40-39_6962](https://github.com/user-attachments/assets/f56367a2-ebab-4ad8-8ca9-5b116c378393)
![localhost_2025-08-02_22-40-47_9917](https://github.com/user-attachments/assets/ed66e22a-dc11-4cbc-98ae-459f38bd2d04)
![localhost_2025-08-02_22-47-22_1074](https://github.com/user-attachments/assets/7162f13b-c027-4885-8cb7-e985adc260f3)

### 📊 Analyse de marché
- Tendances du marché en temps réel
- Analyse concurrentielle
- Prévisions et recommandations
- Rapports détaillés générés par l'IA

### 🛠️ Outils opérationnels
- **Gestion des stocks** : Catalogage automatique par IA, alertes de stock faible
- **Comptabilité** : OCR pour les reçus, suivi des dépenses automatisé
- **Planification** : Gestion des tâches avec rappels intelligents

### 📱 Assistant Marketing Digital
- Génération de contenu pour réseaux sociaux
- Optimisation des campagnes publicitaires
- Analyse d'audience et recommandations
- Planification de contenu automatisée

### 🤖 Services IA intégrés
- Analyse de marché avec Gemini AI
- Reconnaissance d'images pour l'inventaire
- OCR pour la numérisation de documents
- Chat assistant pour questions business

## Architecture technique

### Frontend
- **Framework** : React avec Vite
- **UI/UX** : Tailwind CSS + shadcn/ui
- **Graphiques** : Recharts
- **Icônes** : Lucide React

### Backend
- **Framework** : Flask (Python)
- **Base de données** : SQLite
- **API** : RESTful avec CORS activé
- **IA** : Intégration OpenAI/Gemini

### Déploiement
- **URL de production** : https://e5h6i7cd1xwx.manus.space
- **Hébergement** : Manus Cloud Platform
- **Type** : Application full-stack intégrée

## Structure du projet

```
sme_ai_app/
├── sme-ai-web/                 # Frontend React
│   ├── src/
│   │   ├── components/         # Composants React
│   │   ├── assets/            # Assets statiques
│   │   └── App.jsx            # Composant principal
│   └── dist/                  # Build de production
├── sme_ai_backend/            # Backend Flask
│   ├── src/
│   │   ├── routes/            # Endpoints API
│   │   ├── models/            # Modèles de données
│   │   ├── static/            # Frontend intégré
│   │   └── main.py            # Point d'entrée
│   └── venv/                  # Environnement virtuel
├── SME_AI_App/               # Application React Native (mobile)
└── product_concept.md        # Document de concept original
```

## Installation et développement

### Prérequis
- Node.js 20+
- Python 3.11+
- pnpm ou npm

### Installation locale

1. **Clone du projet**
```bash
git clone <repository-url>
cd sme_ai_app
```

2. **Configuration du frontend**
```bash
cd sme-ai-web
pnpm install
pnpm run dev
```

3. **Configuration du backend**
```bash
cd sme_ai_backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
python src/main.py
```

### Variables d'environnement

Pour utiliser les fonctionnalités IA complètes, configurez :
```bash
export OPENAI_API_KEY="votre-clé-api"
export OPENAI_API_BASE="https://api.openai.com/v1"
```

## API Endpoints

### Dashboard
- `GET /api/dashboard/stats` - Statistiques principales
- `GET /api/dashboard/insights` - Insights IA
- `GET /api/dashboard/alerts` - Alertes importantes

### Analyse de marché
- `GET /api/market/trends` - Tendances du marché
- `GET /api/market/competitors` - Analyse concurrentielle
- `POST /api/market/report` - Génération de rapport

### Outils opérationnels
- `GET /api/inventory` - Liste des produits
- `POST /api/inventory` - Ajout de produit
- `POST /api/inventory/analyze-image` - Analyse d'image produit
- `GET /api/expenses` - Liste des dépenses
- `POST /api/expenses/ocr` - Traitement OCR de reçus

### Marketing
- `POST /api/content/generate` - Génération de contenu
- `GET /api/audience/insights` - Insights audience
- `GET /api/campaigns` - Performance des campagnes

### Services IA
- `POST /api/ai/analyze-market` - Analyse de marché IA
- `POST /api/ai/generate-content` - Génération de contenu IA
- `POST /api/ai/chat` - Assistant conversationnel
- `POST /api/ai/business-insights` - Insights business IA

## Fonctionnalités spécifiques au marché algérien

### Localisation
- Interface entièrement en français
- Devise en Dinars Algériens (DA)
- Références culturelles et économiques locales
- Adaptation aux spécificités réglementaires

### Données contextuelles
- Analyse de marché adaptée à l'économie algérienne
- Recommandations tenant compte du contexte local
- Support pour les régions algériennes (Alger, Oran, Constantine, etc.)
- Intégration des spécificités sectorielles locales

## Sécurité et confidentialité

- Authentification sécurisée
- Chiffrement des données sensibles
- Conformité aux réglementations locales
- Sauvegarde automatique des données

## Support et maintenance

### Monitoring
- Logs d'application automatiques
- Surveillance des performances
- Alertes en cas de problème

### Mises à jour
- Déploiement continu
- Versioning sémantique
- Tests automatisés

## Roadmap

### Version 1.1 (Q2 2024)
- [ ] Application mobile native (iOS/Android)
- [ ] Intégration Firebase ML Kit complète
- [ ] Mode hors ligne avec synchronisation
- [ ] Notifications push

### Version 1.2 (Q3 2024)
- [ ] Intégration données gouvernementales
- [ ] Multi-utilisateurs et permissions
- [ ] Rapports avancés et export
- [ ] API publique pour intégrations

### Version 2.0 (Q4 2024)
- [ ] Intelligence artificielle avancée
- [ ] Prédictions de marché améliorées
- [ ] Automatisation complète des workflows
- [ ] Expansion régionale (Maghreb)

## Contribution

Ce projet est développé spécifiquement pour les PME algériennes. Les contributions sont les bienvenues pour améliorer l'expérience utilisateur et ajouter des fonctionnalités pertinentes au marché local.

## Licence

Propriétaire - Tous droits réservés

## Contact

Pour toute question ou support technique, contactez moi sur stylebenderkh@gmail.com ou sur +213 541 09 59 03

---

*Développé avec ❤️ par Yacine Khaldi pour les PME algériennes*

