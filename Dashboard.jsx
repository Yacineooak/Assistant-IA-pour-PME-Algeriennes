import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { TrendingUp, BarChart3, Package, MessageSquare, Users, DollarSign } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: "Revenus du mois",
      value: "125,000 DA",
      change: "+12%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Nouveaux clients",
      value: "23",
      change: "+8%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Produits en stock",
      value: "156",
      change: "-3%",
      icon: Package,
      color: "text-orange-600"
    },
    {
      title: "Taux de conversion",
      value: "3.2%",
      change: "+0.5%",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ]

  const quickActions = [
    {
      title: "Générer un rapport de marché",
      description: "Obtenez les dernières tendances de votre secteur",
      icon: BarChart3,
      action: "Générer"
    },
    {
      title: "Analyser la concurrence",
      description: "Comparez vos performances avec vos concurrents",
      icon: TrendingUp,
      action: "Analyser"
    },
    {
      title: "Créer du contenu marketing",
      description: "Générez du contenu pour vos réseaux sociaux",
      icon: MessageSquare,
      action: "Créer"
    },
    {
      title: "Gérer l'inventaire",
      description: "Mettez à jour votre stock avec l'IA",
      icon: Package,
      action: "Gérer"
    }
  ]

  return (
    <div className="space-y-6">
      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-600">
                  <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  {' '}par rapport au mois dernier
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Actions rapides */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-base">{action.title}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">{action.action}</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Aperçu des insights récents */}
      <Card>
        <CardHeader>
          <CardTitle>Insights récents</CardTitle>
          <CardDescription>Recommandations basées sur l'analyse de vos données</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Opportunité de croissance détectée
                </p>
                <p className="text-sm text-gray-600">
                  La demande pour vos produits augmente de 15% dans la région d'Alger. 
                  Considérez augmenter votre stock.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
              <DollarSign className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Optimisation des prix suggérée
                </p>
                <p className="text-sm text-gray-600">
                  Vos concurrents ont baissé leurs prix de 8%. Une réduction de 5% pourrait 
                  augmenter vos ventes de 20%.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

