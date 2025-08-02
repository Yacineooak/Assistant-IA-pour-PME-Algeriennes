from flask import Blueprint, jsonify, request
import random
from datetime import datetime, timedelta
import uuid

operational_bp = Blueprint('operational', __name__)

# Données simulées pour l'inventaire
inventory_items = [
    {'id': 1, 'name': 'Produit A', 'quantity': 45, 'category': 'Électronique', 'lastUpdated': '2024-01-15'},
    {'id': 2, 'name': 'Produit B', 'quantity': 23, 'category': 'Textile', 'lastUpdated': '2024-01-14'},
    {'id': 3, 'name': 'Produit C', 'quantity': 67, 'category': 'Alimentaire', 'lastUpdated': '2024-01-13'},
    {'id': 4, 'name': 'Produit D', 'quantity': 12, 'category': 'Cosmétique', 'lastUpdated': '2024-01-12'}
]

# Données simulées pour les dépenses
expenses = [
    {'id': 1, 'description': 'Achat matières premières', 'amount': 15000, 'date': '2024-01-15', 'category': 'Approvisionnement'},
    {'id': 2, 'description': 'Facture électricité', 'amount': 3500, 'date': '2024-01-14', 'category': 'Utilities'},
    {'id': 3, 'description': 'Transport marchandises', 'amount': 2800, 'date': '2024-01-13', 'category': 'Logistique'},
    {'id': 4, 'description': 'Maintenance équipement', 'amount': 8500, 'date': '2024-01-12', 'category': 'Maintenance'}
]

@operational_bp.route('/inventory', methods=['GET'])
def get_inventory():
    """Retourne la liste des produits en stock"""
    return jsonify({
        'success': True,
        'data': inventory_items
    })

@operational_bp.route('/inventory', methods=['POST'])
def add_inventory_item():
    """Ajoute un nouvel article à l'inventaire"""
    data = request.get_json()
    
    new_item = {
        'id': len(inventory_items) + 1,
        'name': data.get('name'),
        'quantity': data.get('quantity', 0),
        'category': data.get('category'),
        'lastUpdated': datetime.now().strftime('%Y-%m-%d')
    }
    
    inventory_items.append(new_item)
    
    return jsonify({
        'success': True,
        'data': new_item
    })

@operational_bp.route('/inventory/<int:item_id>', methods=['PUT'])
def update_inventory_item(item_id):
    """Met à jour un article de l'inventaire"""
    data = request.get_json()
    
    for item in inventory_items:
        if item['id'] == item_id:
            item.update({
                'name': data.get('name', item['name']),
                'quantity': data.get('quantity', item['quantity']),
                'category': data.get('category', item['category']),
                'lastUpdated': datetime.now().strftime('%Y-%m-%d')
            })
            return jsonify({
                'success': True,
                'data': item
            })
    
    return jsonify({
        'success': False,
        'error': 'Article non trouvé'
    }), 404

@operational_bp.route('/inventory/analyze-image', methods=['POST'])
def analyze_inventory_image():
    """Analyse une image pour identifier un produit (simulation)"""
    # Simulation de l'analyse d'image avec l'IA
    detected_product = {
        'name': f'Produit détecté {random.randint(1, 100)}',
        'category': random.choice(['Électronique', 'Textile', 'Alimentaire', 'Cosmétique']),
        'confidence': round(random.uniform(0.7, 0.95), 2),
        'suggested_price': random.randint(500, 5000)
    }
    
    return jsonify({
        'success': True,
        'data': detected_product
    })

@operational_bp.route('/expenses', methods=['GET'])
def get_expenses():
    """Retourne la liste des dépenses"""
    return jsonify({
        'success': True,
        'data': expenses
    })

@operational_bp.route('/expenses', methods=['POST'])
def add_expense():
    """Ajoute une nouvelle dépense"""
    data = request.get_json()
    
    new_expense = {
        'id': len(expenses) + 1,
        'description': data.get('description'),
        'amount': data.get('amount'),
        'date': data.get('date', datetime.now().strftime('%Y-%m-%d')),
        'category': data.get('category')
    }
    
    expenses.append(new_expense)
    
    return jsonify({
        'success': True,
        'data': new_expense
    })

@operational_bp.route('/expenses/ocr', methods=['POST'])
def process_receipt_ocr():
    """Traite un reçu avec OCR (simulation)"""
    # Simulation du traitement OCR
    extracted_data = {
        'merchant': f'Magasin {random.randint(1, 100)}',
        'amount': random.randint(100, 10000),
        'date': datetime.now().strftime('%Y-%m-%d'),
        'items': [
            {'name': 'Article 1', 'price': random.randint(50, 500)},
            {'name': 'Article 2', 'price': random.randint(50, 500)}
        ],
        'confidence': round(random.uniform(0.8, 0.98), 2)
    }
    
    return jsonify({
        'success': True,
        'data': extracted_data
    })

@operational_bp.route('/financial-summary', methods=['GET'])
def get_financial_summary():
    """Retourne un résumé financier"""
    total_expenses = sum(expense['amount'] for expense in expenses)
    
    summary = {
        'revenue': 125000,
        'expenses': total_expenses,
        'profit': 125000 - total_expenses,
        'month': datetime.now().strftime('%B %Y')
    }
    
    return jsonify({
        'success': True,
        'data': summary
    })

@operational_bp.route('/tasks', methods=['GET'])
def get_tasks():
    """Retourne la liste des tâches planifiées"""
    tasks = [
        {'id': 1, 'title': 'Livraison client Alger', 'time': '09:00', 'date': '2024-01-16', 'priority': 'high'},
        {'id': 2, 'title': 'Réunion fournisseur', 'time': '14:30', 'date': '2024-01-16', 'priority': 'medium'},
        {'id': 3, 'title': 'Inventaire mensuel', 'time': '10:00', 'date': '2024-01-17', 'priority': 'low'},
        {'id': 4, 'title': 'Formation équipe', 'time': '15:00', 'date': '2024-01-18', 'priority': 'medium'}
    ]
    
    return jsonify({
        'success': True,
        'data': tasks
    })

@operational_bp.route('/tasks', methods=['POST'])
def add_task():
    """Ajoute une nouvelle tâche"""
    data = request.get_json()
    
    new_task = {
        'id': random.randint(1000, 9999),
        'title': data.get('title'),
        'time': data.get('time'),
        'date': data.get('date'),
        'priority': data.get('priority', 'medium')
    }
    
    return jsonify({
        'success': True,
        'data': new_task
    })

