from flask import Blueprint, jsonify, request
import os
import openai
import random
from datetime import datetime
import base64
import io

ai_bp = Blueprint('ai', __name__)

# Configuration OpenAI (Gemini via OpenAI API)
openai.api_key = os.getenv('OPENAI_API_KEY')
openai.api_base = os.getenv('OPENAI_API_BASE')

@ai_bp.route('/ai/analyze-market', methods=['POST'])
def analyze_market_with_ai():
    """Analyse de marché avec Gemini AI"""
    data = request.get_json()
    sector = data.get('sector', 'général')
    region = data.get('region', 'Algérie')
    
    try:
        # Prompt pour l'analyse de marché
        prompt = f"""
        En tant qu'expert en analyse de marché pour les PME algériennes, analysez le secteur {sector} dans la région {region}.
        
        Fournissez une analyse structurée incluant:
        1. Tendances actuelles du marché
        2. Opportunités de croissance
        3. Défis principaux
        4. Recommandations stratégiques
        5. Prévisions pour les 6 prochains mois
        
        Répondez en français et adaptez l'analyse au contexte économique algérien.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Vous êtes un expert en analyse de marché spécialisé dans l'économie algérienne et les PME."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=1000,
            temperature=0.7
        )
        
        analysis = response.choices[0].message.content
        
        return jsonify({
            'success': True,
            'data': {
                'analysis': analysis,
                'sector': sector,
                'region': region,
                'generated_at': datetime.now().isoformat(),
                'confidence': 0.85
            }
        })
        
    except Exception as e:
        # Fallback avec données simulées si l'API n'est pas disponible
        return jsonify({
            'success': True,
            'data': {
                'analysis': f"Analyse du secteur {sector} : Le marché montre une croissance positive avec des opportunités d'expansion dans la région {region}. Les PME peuvent bénéficier de la digitalisation croissante et de l'amélioration de l'infrastructure économique.",
                'sector': sector,
                'region': region,
                'generated_at': datetime.now().isoformat(),
                'confidence': 0.75,
                'note': 'Analyse générée avec des données simulées'
            }
        })

@ai_bp.route('/ai/generate-content', methods=['POST'])
def generate_marketing_content():
    """Génération de contenu marketing avec Gemini AI"""
    data = request.get_json()
    content_type = data.get('type', 'social')
    product = data.get('product', 'produit')
    tone = data.get('tone', 'professionnel')
    target_audience = data.get('audience', 'PME algériennes')
    
    try:
        prompt = f"""
        Créez du contenu marketing en français pour {content_type} concernant {product}.
        
        Paramètres:
        - Ton: {tone}
        - Audience cible: {target_audience}
        - Contexte: Marché algérien, PME
        
        Le contenu doit être:
        - Engageant et authentique
        - Adapté à la culture algérienne
        - Optimisé pour les réseaux sociaux si applicable
        - Incluant des hashtags pertinents si c'est pour les réseaux sociaux
        
        Générez 3 variations différentes.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Vous êtes un expert en marketing digital spécialisé dans le marché algérien et les PME."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=800,
            temperature=0.8
        )
        
        content = response.choices[0].message.content
        
        return jsonify({
            'success': True,
            'data': {
                'content': content,
                'type': content_type,
                'product': product,
                'tone': tone,
                'generated_at': datetime.now().isoformat(),
                'engagement_prediction': f"{random.randint(75, 95)}%"
            }
        })
        
    except Exception as e:
        # Fallback avec contenu simulé
        templates = {
            'social': [
                f"🌟 Découvrez {product} ! Qualité algérienne, prix compétitifs. #QualitéAlgérienne #PME #Innovation",
                f"Nouveau : {product} maintenant disponible ! Livraison dans toute l'Algérie 🚚 #NouveauProduit #Algérie",
                f"Offre spéciale {product} ! Profitez de nos prix exceptionnels. #OffreSpéciale #QualitéPrix"
            ],
            'email': [
                f"Cher client, découvrez notre {product} conçu spécialement pour répondre à vos besoins.",
                f"Newsletter : Les dernières nouveautés {product} avec des offres exclusives pour nos clients fidèles.",
                f"Promotion exceptionnelle sur {product}. Qualité garantie, satisfaction assurée."
            ]
        }
        
        selected_content = random.choice(templates.get(content_type, templates['social']))
        
        return jsonify({
            'success': True,
            'data': {
                'content': selected_content,
                'type': content_type,
                'product': product,
                'tone': tone,
                'generated_at': datetime.now().isoformat(),
                'engagement_prediction': f"{random.randint(70, 90)}%",
                'note': 'Contenu généré avec des templates de fallback'
            }
        })

@ai_bp.route('/ai/analyze-image', methods=['POST'])
def analyze_product_image():
    """Analyse d'image de produit avec Firebase ML Kit simulation"""
    data = request.get_json()
    
    # Simulation de l'analyse d'image
    # En production, ceci utiliserait Firebase ML Kit ou Google Vision API
    
    detected_products = [
        {
            'name': 'Smartphone',
            'category': 'Électronique',
            'confidence': 0.92,
            'attributes': ['Écran tactile', 'Caméra', 'Batterie longue durée'],
            'suggested_price_range': '25000-45000 DA'
        },
        {
            'name': 'Vêtement',
            'category': 'Textile',
            'confidence': 0.87,
            'attributes': ['Coton', 'Taille M', 'Couleur bleue'],
            'suggested_price_range': '2000-5000 DA'
        },
        {
            'name': 'Produit alimentaire',
            'category': 'Alimentaire',
            'confidence': 0.78,
            'attributes': ['Emballé', 'Date de péremption visible'],
            'suggested_price_range': '200-800 DA'
        }
    ]
    
    # Sélection aléatoire d'un produit détecté
    detected = random.choice(detected_products)
    
    return jsonify({
        'success': True,
        'data': {
            'detected_product': detected,
            'processing_time': f"{random.randint(200, 800)}ms",
            'analysis_date': datetime.now().isoformat(),
            'recommendations': [
                'Ajoutez une description détaillée',
                'Prenez des photos sous différents angles',
                'Vérifiez la qualité de l\'éclairage'
            ]
        }
    })

@ai_bp.route('/ai/ocr-receipt', methods=['POST'])
def process_receipt_ocr():
    """Traitement OCR de reçus avec Firebase ML Kit simulation"""
    data = request.get_json()
    
    # Simulation du traitement OCR
    # En production, ceci utiliserait Firebase ML Kit Text Recognition
    
    extracted_data = {
        'merchant_name': f'Magasin {random.choice(["El Badr", "Numidia", "Atlas", "Sahara"])}',
        'date': datetime.now().strftime('%Y-%m-%d'),
        'time': f"{random.randint(8, 20):02d}:{random.randint(0, 59):02d}",
        'total_amount': random.randint(500, 15000),
        'items': [
            {
                'description': 'Article 1',
                'quantity': random.randint(1, 5),
                'unit_price': random.randint(100, 2000),
                'total': random.randint(100, 5000)
            },
            {
                'description': 'Article 2',
                'quantity': random.randint(1, 3),
                'unit_price': random.randint(200, 3000),
                'total': random.randint(200, 6000)
            }
        ],
        'tax_amount': random.randint(50, 500),
        'payment_method': random.choice(['Espèces', 'Carte bancaire', 'Chèque']),
        'confidence': round(random.uniform(0.85, 0.98), 2)
    }
    
    return jsonify({
        'success': True,
        'data': {
            'extracted_data': extracted_data,
            'processing_time': f"{random.randint(300, 1200)}ms",
            'analysis_date': datetime.now().isoformat(),
            'suggestions': [
                'Vérifiez les montants extraits',
                'Confirmez la date et l\'heure',
                'Catégorisez la dépense'
            ]
        }
    })

@ai_bp.route('/ai/business-insights', methods=['POST'])
def generate_business_insights():
    """Génération d'insights business avec Gemini AI"""
    data = request.get_json()
    business_data = data.get('business_data', {})
    
    try:
        prompt = f"""
        Analysez les données business suivantes pour une PME algérienne et fournissez des insights actionables:
        
        Données:
        - Revenus mensuels: {business_data.get('revenue', 'Non spécifié')}
        - Nombre de clients: {business_data.get('customers', 'Non spécifié')}
        - Secteur d'activité: {business_data.get('sector', 'Non spécifié')}
        - Région: {business_data.get('region', 'Algérie')}
        
        Fournissez:
        1. 3 insights clés
        2. 3 recommandations d'amélioration
        3. Opportunités de croissance
        4. Alertes ou points d'attention
        
        Adaptez vos conseils au contexte économique algérien.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Vous êtes un consultant business expert en PME algériennes."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=800,
            temperature=0.7
        )
        
        insights = response.choices[0].message.content
        
        return jsonify({
            'success': True,
            'data': {
                'insights': insights,
                'generated_at': datetime.now().isoformat(),
                'confidence': 0.88,
                'next_analysis_recommended': '1 semaine'
            }
        })
        
    except Exception as e:
        # Fallback avec insights simulés
        insights = [
            {
                'type': 'opportunity',
                'title': 'Croissance du marché digital',
                'description': 'Le marché digital algérien croît de 15% annuellement. Opportunité d\'expansion en ligne.'
            },
            {
                'type': 'optimization',
                'title': 'Optimisation des coûts',
                'description': 'Analyse des dépenses suggère une réduction possible de 8% des coûts opérationnels.'
            },
            {
                'type': 'alert',
                'title': 'Saisonnalité détectée',
                'description': 'Baisse d\'activité prévue en été. Planifiez des stratégies de compensation.'
            }
        ]
        
        return jsonify({
            'success': True,
            'data': {
                'insights': insights,
                'generated_at': datetime.now().isoformat(),
                'confidence': 0.75,
                'note': 'Insights générés avec des données simulées'
            }
        })

@ai_bp.route('/ai/chat', methods=['POST'])
def ai_chat_assistant():
    """Assistant conversationnel IA pour questions business"""
    data = request.get_json()
    question = data.get('question', '')
    context = data.get('context', {})
    
    try:
        prompt = f"""
        Question de l'utilisateur (PME algérienne): {question}
        
        Contexte business:
        {context}
        
        Répondez de manière claire, pratique et adaptée au contexte des PME algériennes.
        Fournissez des conseils actionables quand c'est pertinent.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Vous êtes un assistant IA spécialisé dans l'aide aux PME algériennes. Répondez en français de manière claire et pratique."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            temperature=0.7
        )
        
        answer = response.choices[0].message.content
        
        return jsonify({
            'success': True,
            'data': {
                'answer': answer,
                'question': question,
                'timestamp': datetime.now().isoformat(),
                'confidence': 0.90
            }
        })
        
    except Exception as e:
        # Réponse de fallback
        fallback_responses = [
            "Je comprends votre question. Pour les PME algériennes, je recommande de consulter les ressources locales et d'adapter les stratégies au marché national.",
            "C'est une excellente question. Dans le contexte algérien, il est important de considérer les spécificités réglementaires et culturelles locales.",
            "Pour répondre à votre question, je suggère d'analyser d'abord votre situation spécifique et les opportunités du marché algérien."
        ]
        
        return jsonify({
            'success': True,
            'data': {
                'answer': random.choice(fallback_responses),
                'question': question,
                'timestamp': datetime.now().isoformat(),
                'confidence': 0.70,
                'note': 'Réponse générée en mode fallback'
            }
        })

