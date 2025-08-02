from flask import Blueprint, jsonify, request
import random
from datetime import datetime, timedelta

dashboard_bp = Blueprint('dashboard', __name__)

@dashboard_bp.route('/dashboard/stats', methods=['GET'])
def get_dashboard_stats():
    """Retourne les statistiques principales du tableau de bord"""
    stats = [
        {
            'title': 'Revenus du mois',
            'value': '125,000 DA',
            'change': '+12%',
            'type': 'revenue',
            'color': 'text-green-600'
        },
        {
            'title': 'Nouveaux clients',
            'value': '23',
            'change': '+8%',
            'type': 'customers',
            'color': 'text-blue-600'
        },
        {
            'title': 'Produits en stock',
            'value': '156',
            'change': '-3%',
            'type': 'inventory',
            'color': 'text-orange-600'
        },
        {
            'title': 'Taux de conversion',
            'value': '3.2%',
            'change': '+0.5%',
            'type': 'conversion',
            'color': 'text-purple-600'
        }
    ]
    
    return jsonify({
        'success': True,
        'data': stats
    })

@dashboard_bp.route('/dashboard/quick-actions', methods=['GET'])
def get_quick_actions():
    """Retourne les actions rapides disponibles"""
    actions = [
        {
            'title': 'Générer un rapport de marché',
            'description': 'Obtenez les dernières tendances de votre secteur',
            'icon': 'BarChart3',
            'action': 'generate_market_report',
            'category': 'market'
        },
        {
            'title': 'Analyser la concurrence',
            'description': 'Comparez vos performances avec vos concurrents',
            'icon': 'TrendingUp',
            'action': 'analyze_competition',
            'category': 'market'
        },
        {
            'title': 'Créer du contenu marketing',
            'description': 'Générez du contenu pour vos réseaux sociaux',
            'icon': 'MessageSquare',
            'action': 'create_content',
            'category': 'marketing'
        },
        {
            'title': 'Gérer l\'inventaire',
            'description': 'Mettez à jour votre stock avec l\'IA',
            'icon': 'Package',
            'action': 'manage_inventory',
            'category': 'operations'
        }
    ]
    
    return jsonify({
        'success': True,
        'data': actions
    })

@dashboard_bp.route('/dashboard/insights', methods=['GET'])
def get_dashboard_insights():
    """Retourne les insights récents générés par l'IA"""
    insights = [
        {
            'type': 'opportunity',
            'title': 'Opportunité de croissance détectée',
            'description': 'La demande pour vos produits augmente de 15% dans la région d\'Alger. Considérez augmenter votre stock.',
            'icon': 'TrendingUp',
            'color': 'bg-blue-50 text-blue-600',
            'priority': 'high',
            'date': datetime.now().strftime('%Y-%m-%d')
        },
        {
            'type': 'pricing',
            'title': 'Optimisation des prix suggérée',
            'description': 'Vos concurrents ont baissé leurs prix de 8%. Une réduction de 5% pourrait augmenter vos ventes de 20%.',
            'icon': 'DollarSign',
            'color': 'bg-green-50 text-green-600',
            'priority': 'medium',
            'date': datetime.now().strftime('%Y-%m-%d')
        },
        {
            'type': 'inventory',
            'title': 'Alerte stock faible',
            'description': 'Plusieurs produits atteignent le seuil critique. Planifiez un réapprovisionnement.',
            'icon': 'Package',
            'color': 'bg-orange-50 text-orange-600',
            'priority': 'high',
            'date': datetime.now().strftime('%Y-%m-%d')
        }
    ]
    
    return jsonify({
        'success': True,
        'data': insights
    })

@dashboard_bp.route('/dashboard/performance', methods=['GET'])
def get_performance_metrics():
    """Retourne les métriques de performance"""
    # Génération de données de performance sur les 30 derniers jours
    performance_data = []
    base_date = datetime.now() - timedelta(days=30)
    
    for i in range(30):
        date = base_date + timedelta(days=i)
        performance_data.append({
            'date': date.strftime('%Y-%m-%d'),
            'revenue': random.randint(3000, 8000),
            'orders': random.randint(5, 25),
            'customers': random.randint(3, 15),
            'conversion_rate': round(random.uniform(2.0, 5.0), 1)
        })
    
    return jsonify({
        'success': True,
        'data': performance_data
    })

@dashboard_bp.route('/dashboard/alerts', methods=['GET'])
def get_alerts():
    """Retourne les alertes importantes"""
    alerts = [
        {
            'id': 1,
            'type': 'critical',
            'title': 'Stock critique',
            'message': 'Produit A - Stock critique (5 unités restantes)',
            'timestamp': datetime.now().isoformat(),
            'read': False
        },
        {
            'id': 2,
            'type': 'warning',
            'title': 'Facture en retard',
            'message': 'Facture fournisseur #1234 échue depuis 3 jours',
            'timestamp': (datetime.now() - timedelta(hours=2)).isoformat(),
            'read': False
        },
        {
            'id': 3,
            'type': 'info',
            'title': 'Nouveau client',
            'message': 'Un nouveau client s\'est inscrit aujourd\'hui',
            'timestamp': (datetime.now() - timedelta(hours=1)).isoformat(),
            'read': True
        }
    ]
    
    return jsonify({
        'success': True,
        'data': alerts
    })

@dashboard_bp.route('/dashboard/summary', methods=['GET'])
def get_business_summary():
    """Retourne un résumé global de l'entreprise"""
    summary = {
        'business_health': {
            'score': 78,
            'status': 'Bonne',
            'trend': 'positive'
        },
        'monthly_targets': {
            'revenue': {
                'target': 150000,
                'current': 125000,
                'percentage': 83
            },
            'customers': {
                'target': 30,
                'current': 23,
                'percentage': 77
            },
            'orders': {
                'target': 200,
                'current': 156,
                'percentage': 78
            }
        },
        'top_products': [
            {'name': 'Produit A', 'sales': 45, 'revenue': 22500},
            {'name': 'Produit C', 'sales': 38, 'revenue': 19000},
            {'name': 'Produit B', 'sales': 32, 'revenue': 16000}
        ],
        'recent_activity': [
            {'action': 'Nouvelle commande', 'time': '2 minutes', 'details': 'Commande #1234'},
            {'action': 'Stock mis à jour', 'time': '15 minutes', 'details': 'Produit B +20 unités'},
            {'action': 'Rapport généré', 'time': '1 heure', 'details': 'Analyse de marché'}
        ]
    }
    
    return jsonify({
        'success': True,
        'data': summary
    })

