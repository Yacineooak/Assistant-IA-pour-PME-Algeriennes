# Documentation API - Assistant IA PME Algériennes

## Base URL
```
Production: https://e5h6i7cd1xwx.manus.space/api
Local: http://localhost:5000/api
```

## Authentification
Actuellement, l'API ne nécessite pas d'authentification. Les services IA utilisent des clés API internes configurées côté serveur.

## Format des réponses
Toutes les réponses suivent le format JSON standard :
```json
{
  "success": true,
  "data": { ... },
  "error": "message d'erreur (si applicable)"
}
```

## Endpoints

### 📊 Dashboard

#### GET /dashboard/stats
Retourne les statistiques principales du tableau de bord.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "title": "Revenus du mois",
      "value": "125,000 DA",
      "change": "+12%",
      "type": "revenue",
      "color": "text-green-600"
    },
    {
      "title": "Nouveaux clients",
      "value": "23",
      "change": "+8%",
      "type": "customers",
      "color": "text-blue-600"
    }
  ]
}
```

#### GET /dashboard/insights
Retourne les insights récents générés par l'IA.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "type": "opportunity",
      "title": "Opportunité de croissance détectée",
      "description": "La demande pour vos produits augmente de 15% dans la région d'Alger.",
      "icon": "TrendingUp",
      "color": "bg-blue-50 text-blue-600",
      "priority": "high",
      "date": "2024-01-15"
    }
  ]
}
```

#### GET /dashboard/alerts
Retourne les alertes importantes.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "critical",
      "title": "Stock critique",
      "message": "Produit A - Stock critique (5 unités restantes)",
      "timestamp": "2024-01-15T10:30:00Z",
      "read": false
    }
  ]
}
```

### 📈 Analyse de marché

#### GET /market/trends
Retourne les tendances du marché.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "month": "Jan",
      "demand": 75,
      "price": 120
    },
    {
      "month": "Fév",
      "demand": 82,
      "price": 125
    }
  ]
}
```

#### GET /market/competitors
Retourne l'analyse concurrentielle.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "name": "Concurrent A",
      "marketShare": 25,
      "priceIndex": 95
    },
    {
      "name": "Votre entreprise",
      "marketShare": 18,
      "priceIndex": 100
    }
  ]
}
```

#### POST /market/report
Génère un rapport de marché personnalisé.

**Requête :**
```json
{
  "sector": "électronique",
  "region": "Alger"
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "id": "report_20240115_143022",
    "sector": "électronique",
    "generated_at": "2024-01-15T14:30:22Z",
    "summary": "Le marché du secteur électronique montre une croissance soutenue...",
    "recommendations": [
      {
        "type": "opportunity",
        "title": "Augmenter la production",
        "description": "Augmenter la production de 15% pour répondre à la demande croissante"
      }
    ]
  }
}
```

### 🛠️ Outils opérationnels

#### GET /inventory
Retourne la liste des produits en stock.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Produit A",
      "quantity": 45,
      "category": "Électronique",
      "lastUpdated": "2024-01-15"
    }
  ]
}
```

#### POST /inventory
Ajoute un nouvel article à l'inventaire.

**Requête :**
```json
{
  "name": "Nouveau Produit",
  "quantity": 100,
  "category": "Textile"
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "id": 5,
    "name": "Nouveau Produit",
    "quantity": 100,
    "category": "Textile",
    "lastUpdated": "2024-01-15"
  }
}
```

#### PUT /inventory/{item_id}
Met à jour un article de l'inventaire.

**Requête :**
```json
{
  "name": "Produit Modifié",
  "quantity": 50,
  "category": "Électronique"
}
```

#### POST /inventory/analyze-image
Analyse une image pour identifier un produit.

**Requête :**
```json
{
  "image_data": "base64_encoded_image"
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "detected_product": {
      "name": "Smartphone détecté",
      "category": "Électronique",
      "confidence": 0.92,
      "attributes": ["Écran tactile", "Caméra", "Batterie longue durée"],
      "suggested_price_range": "25000-45000 DA"
    },
    "processing_time": "450ms",
    "analysis_date": "2024-01-15T14:30:22Z"
  }
}
```

#### GET /expenses
Retourne la liste des dépenses.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "description": "Achat matières premières",
      "amount": 15000,
      "date": "2024-01-15",
      "category": "Approvisionnement"
    }
  ]
}
```

#### POST /expenses
Ajoute une nouvelle dépense.

**Requête :**
```json
{
  "description": "Facture électricité",
  "amount": 3500,
  "date": "2024-01-15",
  "category": "Utilities"
}
```

#### POST /expenses/ocr
Traite un reçu avec OCR.

**Requête :**
```json
{
  "image_data": "base64_encoded_receipt"
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "extracted_data": {
      "merchant_name": "Magasin Atlas",
      "date": "2024-01-15",
      "time": "14:30",
      "total_amount": 2500,
      "items": [
        {
          "description": "Article 1",
          "quantity": 2,
          "unit_price": 500,
          "total": 1000
        }
      ],
      "confidence": 0.95
    },
    "processing_time": "800ms"
  }
}
```

### 📱 Marketing

#### POST /content/generate
Génère du contenu marketing.

**Requête :**
```json
{
  "type": "social",
  "subject": "nouveau produit",
  "tone": "professionnel",
  "audience": "PME algériennes"
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "type": "social",
    "title": "Contenu social - nouveau produit",
    "content": "🌟 Découvrez nouveau produit ! Qualité exceptionnelle et prix compétitifs. #QualitéAlgérienne",
    "engagement": "87%",
    "bestTime": "18h-20h",
    "date": "2024-01-15"
  }
}
```

#### GET /content
Retourne le contenu généré récemment.

#### GET /audience/insights
Retourne les insights sur l'audience.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "segment": "Jeunes professionnels (25-35 ans)",
      "percentage": 45,
      "growth": "+12%"
    }
  ]
}
```

#### GET /campaigns
Retourne les performances des campagnes.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "name": "Campagne Ramadan",
      "reach": "12,500",
      "engagement": "8.2%",
      "conversions": "156",
      "roi": "+240%"
    }
  ]
}
```

### 🤖 Services IA

#### POST /ai/analyze-market
Analyse de marché avec Gemini AI.

**Requête :**
```json
{
  "sector": "textile",
  "region": "Oran"
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "analysis": "Le marché du secteur textile montre une croissance positive avec des opportunités d'expansion dans la région Oran...",
    "sector": "textile",
    "region": "Oran",
    "generated_at": "2024-01-15T14:30:22Z",
    "confidence": 0.85
  }
}
```

#### POST /ai/generate-content
Génération de contenu marketing avec IA.

**Requête :**
```json
{
  "type": "email",
  "product": "chaussures de sport",
  "tone": "amical",
  "audience": "jeunes algériens"
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "content": "Cher client, découvrez notre nouvelle collection de chaussures de sport...",
    "type": "email",
    "product": "chaussures de sport",
    "tone": "amical",
    "generated_at": "2024-01-15T14:30:22Z",
    "engagement_prediction": "82%"
  }
}
```

#### POST /ai/chat
Assistant conversationnel IA.

**Requête :**
```json
{
  "question": "Comment améliorer mes ventes en ligne ?",
  "context": {
    "business_type": "e-commerce",
    "sector": "mode",
    "region": "Alger"
  }
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "answer": "Pour améliorer vos ventes en ligne dans le secteur de la mode à Alger, je recommande...",
    "question": "Comment améliorer mes ventes en ligne ?",
    "timestamp": "2024-01-15T14:30:22Z",
    "confidence": 0.90
  }
}
```

#### POST /ai/business-insights
Génération d'insights business.

**Requête :**
```json
{
  "business_data": {
    "revenue": 125000,
    "customers": 23,
    "sector": "alimentaire",
    "region": "Constantine"
  }
}
```

**Réponse :**
```json
{
  "success": true,
  "data": {
    "insights": "Analyse des données business : Votre entreprise montre une performance solide...",
    "generated_at": "2024-01-15T14:30:22Z",
    "confidence": 0.88,
    "next_analysis_recommended": "1 semaine"
  }
}
```

## Codes d'erreur

### Codes HTTP standards
- `200` - Succès
- `400` - Requête invalide
- `404` - Ressource non trouvée
- `500` - Erreur serveur interne

### Format des erreurs
```json
{
  "success": false,
  "error": "Description de l'erreur",
  "code": "ERROR_CODE"
}
```

## Limites et quotas

### Services IA
- **Requêtes par minute** : 60
- **Taille maximale des requêtes** : 1MB
- **Timeout** : 30 secondes

### Upload d'images
- **Taille maximale** : 5MB
- **Formats supportés** : JPG, PNG, WebP
- **Résolution maximale** : 4096x4096

## Exemples d'utilisation

### JavaScript (Frontend)
```javascript
// Récupération des statistiques dashboard
const response = await fetch('/api/dashboard/stats');
const data = await response.json();

if (data.success) {
  console.log('Stats:', data.data);
}

// Génération de contenu marketing
const contentResponse = await fetch('/api/content/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'social',
    subject: 'promotion',
    tone: 'enthousiaste'
  })
});
```

### Python
```python
import requests

# Analyse de marché
response = requests.post('https://e5h6i7cd1xwx.manus.space/api/ai/analyze-market', 
  json={
    'sector': 'technologie',
    'region': 'Alger'
  }
)

if response.json()['success']:
  analysis = response.json()['data']['analysis']
  print(f"Analyse: {analysis}")
```

### cURL
```bash
# Test de l'API dashboard
curl -X GET https://e5h6i7cd1xwx.manus.space/api/dashboard/stats

# Génération de contenu
curl -X POST https://e5h6i7cd1xwx.manus.space/api/content/generate \
  -H "Content-Type: application/json" \
  -d '{"type": "social", "subject": "nouveau produit"}'
```

## Changelog

### Version 1.0.0 (Janvier 2024)
- API initiale avec tous les endpoints de base
- Intégration services IA (OpenAI/Gemini)
- Support complet pour dashboard, marché, opérations, marketing

### Versions futures
- Authentification JWT
- Rate limiting avancé
- Webhooks pour notifications
- API publique avec documentation OpenAPI

---

*Documentation maintenue par l'équipe de développement*

