from flask import Blueprint, jsonify, request
import random
from datetime import datetime
import uuid

marketing_bp = Blueprint('marketing', __name__)

# Données simulées pour le contenu généré
generated_content = [
    {
        'id': 1,
        'type': 'social',
        'title': 'Post promotion produit',
        'content': '🌟 Découvrez notre nouvelle collection ! Des produits de qualité à prix imbattables. Livraison gratuite dans toute l\'Algérie. #QualitéAlgérienne #NouveauProduit',
        'engagement': '85%',
        'bestTime': '18h-20h',
        'date': '2024-01-15'
    },
    {
        'id': 2,
        'type': 'email',
        'title': 'Newsletter mensuelle',
        'content': 'Cher(e) client(e), ce mois-ci nous vous proposons des offres exceptionnelles sur notre gamme premium. Profitez de -20% sur tous vos achats...',
        'openRate': '32%',
        'clickRate': '8.5%',
        'date': '2024-01-14'
    }
]

@marketing_bp.route('/content/generate', methods=['POST'])
def generate_content():
    """Génère du contenu marketing avec l'IA"""
    data = request.get_json()
    
    content_type = data.get('type', 'social')
    subject = data.get('subject', 'produit')
    tone = data.get('tone', 'professionnel')
    
    # Simulation de génération de contenu
    templates = {
        'social': [
            f"🌟 Découvrez {subject} ! Qualité exceptionnelle et prix compétitifs. #QualitéAlgérienne",
            f"Nouveau : {subject} disponible maintenant ! Livraison gratuite dans toute l'Algérie 🚚",
            f"Offre spéciale sur {subject} ! Ne manquez pas cette opportunité unique ⭐"
        ],
        'email': [
            f"Cher(e) client(e), nous sommes ravis de vous présenter {subject}. Une innovation qui va révolutionner votre quotidien.",
            f"Newsletter : Découvrez les dernières nouveautés concernant {subject} et profitez d'offres exclusives.",
            f"Promotion exceptionnelle sur {subject}. Réservé à nos clients fidèles."
        ],
        'ad': [
            f"Publicité : {subject} - La qualité algérienne à votre service. Commandez maintenant !",
            f"Annonce : {subject} disponible avec -20% de réduction. Offre limitée !",
            f"Promotion : {subject} - Le meilleur rapport qualité-prix du marché."
        ]
    }
    
    generated_text = random.choice(templates.get(content_type, templates['social']))
    
    new_content = {
        'id': len(generated_content) + 1,
        'type': content_type,
        'title': f'Contenu {content_type} - {subject}',
        'content': generated_text,
        'engagement': f'{random.randint(70, 95)}%',
        'bestTime': random.choice(['18h-20h', '12h-14h', '20h-22h']),
        'date': datetime.now().strftime('%Y-%m-%d')
    }
    
    generated_content.append(new_content)
    
    return jsonify({
        'success': True,
        'data': new_content
    })

@marketing_bp.route('/content', methods=['GET'])
def get_generated_content():
    """Retourne le contenu généré récemment"""
    return jsonify({
        'success': True,
        'data': generated_content
    })

@marketing_bp.route('/audience/insights', methods=['GET'])
def get_audience_insights():
    """Retourne les insights sur l'audience"""
    insights = [
        {'segment': 'Jeunes professionnels (25-35 ans)', 'percentage': 45, 'growth': '+12%'},
        {'segment': 'Familles (35-50 ans)', 'percentage': 35, 'growth': '+8%'},
        {'segment': 'Étudiants (18-25 ans)', 'percentage': 20, 'growth': '+15%'}
    ]
    
    return jsonify({
        'success': True,
        'data': insights
    })

@marketing_bp.route('/campaigns', methods=['GET'])
def get_campaigns():
    """Retourne les performances des campagnes"""
    campaigns = [
        {'name': 'Campagne Ramadan', 'reach': '12,500', 'engagement': '8.2%', 'conversions': '156', 'roi': '+240%'},
        {'name': 'Promotion Été', 'reach': '8,900', 'engagement': '6.8%', 'conversions': '89', 'roi': '+180%'},
        {'name': 'Lancement Produit', 'reach': '15,200', 'engagement': '9.1%', 'conversions': '203', 'roi': '+320%'}
    ]
    
    return jsonify({
        'success': True,
        'data': campaigns
    })

@marketing_bp.route('/analytics', methods=['GET'])
def get_marketing_analytics():
    """Retourne les analytics marketing"""
    analytics = {
        'totalReach': 45230,
        'averageEngagement': 7.8,
        'totalConversions': 348,
        'monthlyGrowth': {
            'reach': 12,
            'engagement': 0.8,
            'conversions': 25
        }
    }
    
    return jsonify({
        'success': True,
        'data': analytics
    })

@marketing_bp.route('/recommendations', methods=['GET'])
def get_marketing_recommendations():
    """Retourne les recommandations marketing IA"""
    recommendations = [
        {
            'type': 'opportunity',
            'title': 'Opportunité de croissance',
            'description': 'Le segment 18-25 ans montre un fort engagement (+15%). Considérez créer plus de contenu pour cette tranche d\'âge.'
        },
        {
            'type': 'content',
            'title': 'Contenu performant',
            'description': 'Vos posts avec des images de produits génèrent 40% plus d\'engagement que le contenu textuel seul.'
        },
        {
            'type': 'timing',
            'title': 'Timing optimal',
            'description': 'Vos publications du mardi soir (18h-20h) obtiennent les meilleurs résultats avec votre audience principale.'
        }
    ]
    
    return jsonify({
        'success': True,
        'data': recommendations
    })

@marketing_bp.route('/hashtags/suggest', methods=['POST'])
def suggest_hashtags():
    """Suggère des hashtags pertinents"""
    data = request.get_json()
    topic = data.get('topic', 'produit')
    
    # Hashtags suggérés basés sur le sujet
    hashtag_suggestions = [
        '#QualitéAlgérienne',
        '#MadeInAlgeria',
        '#PMEAlgérienne',
        '#Innovation',
        '#QualitéPrix',
        f'#{topic.replace(" ", "")}',
        '#Algérie',
        '#Commerce',
        '#Entreprise',
        '#Local'
    ]
    
    return jsonify({
        'success': True,
        'data': random.sample(hashtag_suggestions, 5)
    })

@marketing_bp.route('/optimal-timing', methods=['GET'])
def get_optimal_timing():
    """Retourne les meilleurs moments de publication"""
    timing_data = {
        'bestDays': ['Mardi', 'Jeudi', 'Dimanche'],
        'bestHours': ['18:00-20:00', '12:00-14:00', '20:00-22:00'],
        'audienceActivity': {
            'morning': 25,
            'afternoon': 45,
            'evening': 70,
            'night': 15
        }
    }
    
    return jsonify({
        'success': True,
        'data': timing_data
    })

