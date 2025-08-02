# Guide de Déploiement - Assistant IA PME Algériennes

## Vue d'ensemble du déploiement

L'application est actuellement déployée et accessible à l'adresse :
**https://e5h6i7cd1xwx.manus.space**

## Architecture de déploiement

### Configuration actuelle
- **Plateforme** : Manus Cloud Platform
- **Type** : Application Flask full-stack
- **Frontend** : Intégré dans le backend (Single Page Application)
- **Base de données** : SQLite (incluse)
- **Services IA** : OpenAI API (compatible Gemini)

### Structure déployée
```
Production/
├── src/
│   ├── main.py              # Point d'entrée Flask
│   ├── routes/              # API endpoints
│   │   ├── dashboard.py
│   │   ├── market_analysis.py
│   │   ├── operational_tools.py
│   │   ├── marketing_assistant.py
│   │   └── ai_services.py
│   ├── models/              # Modèles de données
│   ├── static/              # Frontend React buildé
│   │   ├── index.html
│   │   ├── assets/
│   │   └── ...
│   └── database/            # Base de données SQLite
├── requirements.txt         # Dépendances Python
└── venv/                   # Environnement virtuel
```

## Processus de déploiement

### 1. Préparation du frontend
```bash
cd sme-ai-web
pnpm run build
cp -r dist/* ../sme_ai_backend/src/static/
```

### 2. Configuration du backend
```bash
cd sme_ai_backend
source venv/bin/activate
pip freeze > requirements.txt
```

### 3. Déploiement
```bash
# Utilisation de l'outil Manus
manus-deploy-backend flask /path/to/sme_ai_backend
```

## Configuration des variables d'environnement

### Variables requises en production
```bash
OPENAI_API_KEY=sk-...          # Clé API OpenAI/Gemini
OPENAI_API_BASE=https://...    # Base URL de l'API
FLASK_ENV=production           # Mode production
SECRET_KEY=...                 # Clé secrète Flask
```

### Configuration locale pour développement
```bash
export OPENAI_API_KEY="votre-clé-api"
export OPENAI_API_BASE="https://api.openai.com/v1"
export FLASK_ENV=development
```

## Endpoints de l'API en production

### Base URL
`https://e5h6i7cd1xwx.manus.space/api`

### Endpoints principaux

#### Dashboard
- `GET /api/dashboard/stats` - Statistiques du tableau de bord
- `GET /api/dashboard/insights` - Insights IA
- `GET /api/dashboard/alerts` - Alertes système

#### Analyse de marché
- `GET /api/market/trends` - Tendances du marché
- `GET /api/market/competitors` - Analyse concurrentielle
- `POST /api/market/report` - Génération de rapport personnalisé

#### Outils opérationnels
- `GET /api/inventory` - Gestion des stocks
- `POST /api/inventory/analyze-image` - Analyse d'image produit
- `GET /api/expenses` - Gestion des dépenses
- `POST /api/expenses/ocr` - OCR pour reçus

#### Marketing
- `POST /api/content/generate` - Génération de contenu
- `GET /api/audience/insights` - Analyse d'audience
- `GET /api/campaigns` - Performance des campagnes

#### Services IA
- `POST /api/ai/analyze-market` - Analyse de marché avec IA
- `POST /api/ai/generate-content` - Génération de contenu IA
- `POST /api/ai/chat` - Assistant conversationnel
- `POST /api/ai/business-insights` - Insights business

## Tests de déploiement

### Tests automatiques
```bash
# Test de santé de l'application
curl https://e5h6i7cd1xwx.manus.space/api/dashboard/stats

# Test des services IA
curl -X POST https://e5h6i7cd1xwx.manus.space/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "Comment améliorer mes ventes?"}'
```

### Tests manuels
1. **Interface utilisateur** : Vérifier que l'application se charge correctement
2. **Navigation** : Tester tous les onglets (Dashboard, Marché, Outils, Marketing)
3. **API** : Vérifier que les données se chargent dans chaque section
4. **Responsive** : Tester sur mobile et desktop

## Monitoring et maintenance

### Logs d'application
- Les logs sont automatiquement collectés par la plateforme Manus
- Accès via le dashboard de monitoring Manus

### Métriques importantes
- Temps de réponse des API
- Utilisation des services IA
- Erreurs d'application
- Trafic utilisateur

### Alertes configurées
- Erreurs 5xx > 5% sur 5 minutes
- Temps de réponse > 2 secondes
- Utilisation CPU > 80%
- Utilisation mémoire > 90%

## Sauvegarde et récupération

### Base de données
- Sauvegarde automatique quotidienne de SQLite
- Rétention : 30 jours
- Récupération : Via interface Manus

### Code source
- Repository Git avec historique complet
- Branches : main (production), develop (développement)
- Tags pour chaque version déployée

## Mise à jour et rollback

### Processus de mise à jour
1. Développement et tests en local
2. Build du frontend : `pnpm run build`
3. Copie vers backend : `cp -r dist/* ../backend/src/static/`
4. Mise à jour requirements.txt
5. Déploiement : `manus-deploy-backend flask`

### Rollback
```bash
# Rollback vers la version précédente
manus-rollback-deployment <deployment-id>
```

## Sécurité

### HTTPS
- Certificat SSL automatique via Manus
- Redirection HTTP vers HTTPS
- Headers de sécurité configurés

### CORS
- Configuration CORS pour permettre les requêtes frontend
- Origines autorisées : domaine de production

### Authentification
- Clés API sécurisées pour les services IA
- Session management Flask
- Protection CSRF activée

## Performance

### Optimisations appliquées
- Compression gzip activée
- Cache statique pour les assets
- Minification CSS/JS
- Lazy loading des composants React

### Métriques cibles
- Temps de chargement initial : < 3 secondes
- Temps de réponse API : < 500ms
- Score Lighthouse : > 90

## Troubleshooting

### Problèmes courants

#### Application ne se charge pas
1. Vérifier le statut du service : `curl https://e5h6i7cd1xwx.manus.space`
2. Consulter les logs d'erreur
3. Vérifier la configuration DNS

#### Erreurs API
1. Vérifier les variables d'environnement
2. Tester les endpoints individuellement
3. Consulter les logs Flask

#### Services IA non fonctionnels
1. Vérifier la clé API OpenAI
2. Tester la connectivité vers l'API
3. Vérifier les quotas d'utilisation

### Contacts support
- **Technique** : Équipe de développement
- **Infrastructure** : Support Manus Platform
- **Urgences** : Canal de support 24/7

## Évolutions futures

### Améliorations prévues
- Migration vers base de données PostgreSQL
- Mise en place de Redis pour le cache
- Déploiement multi-région
- Auto-scaling basé sur la charge

### Nouvelles fonctionnalités
- Application mobile native
- API publique avec authentification
- Intégrations tierces (banques, fournisseurs)
- Analytics avancées

---

*Guide maintenu par l'équipe de développement - Dernière mise à jour : Août 2025*

