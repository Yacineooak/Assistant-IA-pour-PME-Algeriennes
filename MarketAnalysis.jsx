import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { TrendingUp, TrendingDown, Search, Download, RefreshCw } from 'lucide-react'

export default function MarketAnalysis() {
  // Données simulées pour les graphiques
  const marketTrends = [
    { month: 'Jan', demand: 65, price: 120 },
    { month: 'Fév', demand: 72, price: 125 },
    { month: 'Mar', demand: 68, price: 118 },
    { month: 'Avr', demand: 85, price: 130 },
    { month: 'Mai', demand: 92, price: 135 },
    { month: 'Jun', demand: 88, price: 132 }
  ]

  const competitorData = [
    { name: 'Concurrent A', marketShare: 25, priceIndex: 95 },
    { name: 'Concurrent B', marketShare: 20, priceIndex: 102 },
    { name: 'Concurrent C', marketShare: 15, priceIndex: 88 },
    { name: 'Votre entreprise', marketShare: 18, priceIndex: 100 },
    { name: 'Autres', marketShare: 22, priceIndex: 98 }
  ]

  const insights = [
    {
      type: 'positive',
      title: 'Tendance haussière',
      description: 'La demande pour votre secteur augmente de 12% ce trimestre',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-50'
    },
    {
      type: 'warning',
      title: 'Pression concurrentielle',
      description: 'Deux nouveaux concurrents sont entrés sur le marché ce mois',
      icon: TrendingDown,
      color: 'text-orange-600 bg-orange-50'
    },
    {
      type: 'opportunity',
      title: 'Opportunité de prix',
      description: 'Vos prix sont 8% en dessous de la moyenne du marché',
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-50'
    }
  ]

  return (
    <div className="space-y-6">
      {/* En-tête avec recherche */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analyse de marché</h1>
          <p className="text-gray-600">Insights et tendances pour votre secteur</p>
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Rechercher un secteur..." 
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualiser
          </Button>
        </div>
      </div>

      {/* Insights rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon
          return (
            <Card key={index} className={`border-l-4 ${insight.type === 'positive' ? 'border-l-green-500' : insight.type === 'warning' ? 'border-l-orange-500' : 'border-l-blue-500'}`}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${insight.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{insight.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tendances de la demande */}
        <Card>
          <CardHeader>
            <CardTitle>Évolution de la demande</CardTitle>
            <CardDescription>Tendances sur les 6 derniers mois</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={marketTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="demand" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Analyse concurrentielle */}
        <Card>
          <CardHeader>
            <CardTitle>Parts de marché</CardTitle>
            <CardDescription>Position concurrentielle actuelle</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="marketShare" 
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Rapport détaillé */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Rapport de marché détaillé</CardTitle>
            <CardDescription>Analyse complète générée par l'IA</CardDescription>
          </div>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Télécharger PDF
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Résumé exécutif</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Le marché de votre secteur montre une croissance soutenue avec une augmentation de 12% 
                de la demande au cours du dernier trimestre. Cette croissance est principalement 
                alimentée par l'augmentation du pouvoir d'achat des consommateurs algériens et 
                l'amélioration de l'accès aux produits dans les régions rurales.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Recommandations stratégiques</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Opportunité
                  </Badge>
                  <span className="text-sm text-gray-600">
                    Augmenter la production de 15% pour répondre à la demande croissante
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    Optimisation
                  </Badge>
                  <span className="text-sm text-gray-600">
                    Ajuster les prix à la hausse de 5-8% pour maximiser la marge
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    Vigilance
                  </Badge>
                  <span className="text-sm text-gray-600">
                    Surveiller l'entrée de nouveaux concurrents dans la région d'Oran
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

