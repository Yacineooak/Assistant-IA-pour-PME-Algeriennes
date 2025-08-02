from flask import Blueprint, jsonify, request
import random
from datetime import datetime, timedelta

market_bp = Blueprint('market', __name__)

@market_bp.route('/market/trends', methods=['GET'])
def get_market_trends():
    """Retourne les tendances du marché simulées"""
    # Données simulées pour les tendances de marché
    trends = []
    months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun']
    
    for i, month in enumerate(months):
        trends.append({
            'month': month,
            'demand': random.randint(60, 100),
            'price': random.randint(115, 140)
        })
    
    return jsonify({
        'success': True,
        'data': trends
    })

@market_bp.route('/market/competitors', methods=['GET'])
def get_competitor_analysis():
    """Retourne l'analyse concurrentielle"""
    competitors = [
        {'name': 'Concurrent A', 'marketShare': 25, 'priceIndex': 95},
        {'name': 'Concurrent B', 'marketShare': 20, 'priceIndex': 102},
        {'name': 'Concurrent C', 'marketShare': 15, 'priceIndex': 88},
        {'name': 'Votre entreprise', 'marketShare': 18, 'priceIndex': 100},
        {'name': 'Autres', 'marketShare': 22, 'priceIndex': 98}
    ]
    
    return jsonify({
        'success': True,
        'data': competitors
    })

@market_bp.route('/market/insights', methods=['GET'])
def get_market_insights():
    """Retourne les insights de marché générés par l'IA"""
    insights = [
        {
            'type': 'positive',
            'title': 'Tendance haussière',
            'description': 'La demande pour votre secteur augmente de 12% ce trimestre',
            'confidence': 0.85
        },
        {
            'type': 'warning',
            'title': 'Pression concurrentielle',
            'description': 'Deux nouveaux concurrents sont entrés sur le marché ce mois',
            'confidence': 0.92
        },
        {
            'type': 'opportunity',
            'title': 'Opportunité de prix',
            'description': 'Vos prix sont 8% en dessous de la moyenne du marché',
            'confidence': 0.78
        }
    ]
    
    return jsonify({
        'success': True,
        'data': insights
    })

@market_bp.route('/market/report', methods=['POST'])
def generate_market_report():
    """Génère un rapport de marché personnalisé"""
    data = request.get_json()
    sector = data.get('sector', 'général')
    
    # Simulation de génération de rapport
    report = {
        'id': f"report_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
        'sector': sector,
        'generated_at': datetime.now().isoformat(),
        'summary': f"Le marché du secteur {sector} montre une croissance soutenue avec une augmentation de 12% de la demande au cours du dernier trimestre.",
        'recommendations': [
            {
                'type': 'opportunity',
                'title': 'Augmenter la production',
                'description': 'Augmenter la production de 15% pour répondre à la demande croissante'
            },
            {
                'type': 'optimization',
                'title': 'Optimiser les prix',
                'description': 'Ajuster les prix à la hausse de 5-8% pour maximiser la marge'
            },
            {
                'type': 'vigilance',
                'title': 'Surveiller la concurrence',
                'description': 'Surveiller l\'entrée de nouveaux concurrents dans la région d\'Oran'
            }
        ]
    }
    
    return jsonify({
        'success': True,
        'data': report
    })

