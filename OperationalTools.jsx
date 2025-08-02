import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Package, 
  Camera, 
  Upload, 
  DollarSign, 
  Calendar, 
  Clock, 
  FileText,
  Scan,
  Plus,
  Edit,
  Trash2
} from 'lucide-react'

export default function OperationalTools() {
  const inventoryItems = [
    { id: 1, name: 'Produit A', quantity: 45, category: 'Électronique', lastUpdated: '2024-01-15' },
    { id: 2, name: 'Produit B', quantity: 23, category: 'Textile', lastUpdated: '2024-01-14' },
    { id: 3, name: 'Produit C', quantity: 67, category: 'Alimentaire', lastUpdated: '2024-01-13' },
    { id: 4, name: 'Produit D', quantity: 12, category: 'Cosmétique', lastUpdated: '2024-01-12' }
  ]

  const recentExpenses = [
    { id: 1, description: 'Achat matières premières', amount: 15000, date: '2024-01-15', category: 'Approvisionnement' },
    { id: 2, description: 'Facture électricité', amount: 3500, date: '2024-01-14', category: 'Utilities' },
    { id: 3, description: 'Transport marchandises', amount: 2800, date: '2024-01-13', category: 'Logistique' },
    { id: 4, description: 'Maintenance équipement', amount: 8500, date: '2024-01-12', category: 'Maintenance' }
  ]

  const upcomingTasks = [
    { id: 1, title: 'Livraison client Alger', time: '09:00', date: '2024-01-16', priority: 'high' },
    { id: 2, title: 'Réunion fournisseur', time: '14:30', date: '2024-01-16', priority: 'medium' },
    { id: 3, title: 'Inventaire mensuel', time: '10:00', date: '2024-01-17', priority: 'low' },
    { id: 4, title: 'Formation équipe', time: '15:00', date: '2024-01-18', priority: 'medium' }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Outils opérationnels</h1>
        <p className="text-gray-600">Gérez vos opérations quotidiennes avec l'aide de l'IA</p>
      </div>

      <Tabs defaultValue="inventory" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="inventory">Gestion des stocks</TabsTrigger>
          <TabsTrigger value="finance">Comptabilité</TabsTrigger>
          <TabsTrigger value="planning">Planification</TabsTrigger>
        </TabsList>

        {/* Gestion des stocks */}
        <TabsContent value="inventory" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Actions rapides */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Ajouter des produits</span>
                </CardTitle>
                <CardDescription>Utilisez l'IA pour cataloguer vos produits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <Camera className="h-4 w-4 mr-2" />
                  Prendre une photo
                </Button>
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Importer une image
                </Button>
                <div className="text-xs text-gray-500 text-center">
                  L'IA identifiera automatiquement le produit et ses caractéristiques
                </div>
              </CardContent>
            </Card>

            {/* Statistiques des stocks */}
            <Card>
              <CardHeader>
                <CardTitle>Aperçu des stocks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total produits</span>
                    <span className="font-semibold">147</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Stock faible</span>
                    <Badge variant="destructive">8</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Valeur totale</span>
                    <span className="font-semibold">2,450,000 DA</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Dernière mise à jour</span>
                    <span className="text-sm text-gray-500">Il y a 2h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alertes */}
            <Card>
              <CardHeader>
                <CardTitle>Alertes stock</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-2 bg-red-50 rounded">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Produit A - Stock critique (5 unités)</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-yellow-50 rounded">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Produit B - Stock faible (12 unités)</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Commande recommandée pour Produit C</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Liste des produits */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Inventaire</CardTitle>
                <CardDescription>Liste de vos produits en stock</CardDescription>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Ajouter un produit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventoryItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium">{item.quantity} unités</p>
                        <p className="text-sm text-gray-500">Mis à jour: {item.lastUpdated}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comptabilité */}
        <TabsContent value="finance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Scanner de reçus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scan className="h-5 w-5" />
                  <span>Scanner des reçus</span>
                </CardTitle>
                <CardDescription>Numérisez vos factures et reçus avec l'OCR</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Prenez une photo de votre reçu</p>
                  <Button>
                    <Camera className="h-4 w-4 mr-2" />
                    Scanner un reçu
                  </Button>
                </div>
                <div className="text-xs text-gray-500 text-center">
                  L'IA extraira automatiquement les informations importantes
                </div>
              </CardContent>
            </Card>

            {/* Résumé financier */}
            <Card>
              <CardHeader>
                <CardTitle>Résumé financier</CardTitle>
                <CardDescription>Vue d'ensemble de ce mois</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span className="text-sm font-medium">Revenus</span>
                    <span className="font-bold text-green-600">+125,000 DA</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span className="text-sm font-medium">Dépenses</span>
                    <span className="font-bold text-red-600">-89,500 DA</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span className="text-sm font-medium">Bénéfice net</span>
                    <span className="font-bold text-blue-600">+35,500 DA</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Générer un rapport
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Liste des dépenses récentes */}
          <Card>
            <CardHeader>
              <CardTitle>Dépenses récentes</CardTitle>
              <CardDescription>Transactions enregistrées automatiquement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentExpenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">{expense.description}</p>
                        <p className="text-sm text-gray-500">{expense.category} • {expense.date}</p>
                      </div>
                    </div>
                    <span className="font-semibold">{expense.amount.toLocaleString()} DA</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Planification */}
        <TabsContent value="planning" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Ajouter une tâche */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Nouvelle tâche</span>
                </CardTitle>
                <CardDescription>Planifiez vos activités avec des rappels intelligents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Titre de la tâche" />
                <Input type="datetime-local" />
                <select className="w-full p-2 border rounded">
                  <option>Priorité faible</option>
                  <option>Priorité moyenne</option>
                  <option>Priorité élevée</option>
                </select>
                <Button className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Ajouter la tâche
                </Button>
              </CardContent>
            </Card>

            {/* Statistiques de productivité */}
            <Card>
              <CardHeader>
                <CardTitle>Productivité</CardTitle>
                <CardDescription>Votre performance cette semaine</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tâches complétées</span>
                    <span className="font-semibold">23/28</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Temps moyen par tâche</span>
                    <span className="font-semibold">2h 15min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Efficacité</span>
                    <Badge className="bg-green-100 text-green-800">+15%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tâches à venir */}
          <Card>
            <CardHeader>
              <CardTitle>Tâches à venir</CardTitle>
              <CardDescription>Votre planning des prochains jours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">{task.title}</p>
                        <p className="text-sm text-gray-500">{task.date} à {task.time}</p>
                      </div>
                    </div>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority === 'high' ? 'Élevée' : task.priority === 'medium' ? 'Moyenne' : 'Faible'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

