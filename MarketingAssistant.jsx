import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  MessageSquare, 
  Image, 
  Mail, 
  Calendar, 
  Target, 
  TrendingUp,
  Copy,
  Download,
  Share,
  Sparkles,
  Clock,
  Users
} from 'lucide-react'

export default function MarketingAssistant() {
  const contentTemplates = [
    {
      type: 'social',
      title: 'Post Facebook/Instagram',
      description: 'Contenu engageant pour vos réseaux sociaux',
      icon: MessageSquare,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      type: 'email',
      title: 'Newsletter',
      description: 'Email marketing personnalisé',
      icon: Mail,
      color: 'bg-green-50 text-green-600'
    },
    {
      type: 'ad',
      title: 'Publicité',
      description: 'Textes publicitaires optimisés',
      icon: Target,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      type: 'blog',
      title: 'Article de blog',
      description: 'Contenu informatif et SEO-friendly',
      icon: MessageSquare,
      color: 'bg-orange-50 text-orange-600'
    }
  ]

  const generatedContent = [
    {
      id: 1,
      type: 'social',
      title: 'Post promotion produit',
      content: '🌟 Découvrez notre nouvelle collection ! Des produits de qualité à prix imbattables. Livraison gratuite dans toute l\'Algérie. #QualitéAlgérienne #NouveauProduit',
      engagement: '85%',
      bestTime: '18h-20h',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'email',
      title: 'Newsletter mensuelle',
      content: 'Cher(e) client(e), ce mois-ci nous vous proposons des offres exceptionnelles sur notre gamme premium. Profitez de -20% sur tous vos achats...',
      openRate: '32%',
      clickRate: '8.5%',
      date: '2024-01-14'
    }
  ]

  const audienceInsights = [
    { segment: 'Jeunes professionnels (25-35 ans)', percentage: 45, growth: '+12%' },
    { segment: 'Familles (35-50 ans)', percentage: 35, growth: '+8%' },
    { segment: 'Étudiants (18-25 ans)', percentage: 20, growth: '+15%' }
  ]

  const campaignPerformance = [
    { name: 'Campagne Ramadan', reach: '12,500', engagement: '8.2%', conversions: '156', roi: '+240%' },
    { name: 'Promotion Été', reach: '8,900', engagement: '6.8%', conversions: '89', roi: '+180%' },
    { name: 'Lancement Produit', reach: '15,200', engagement: '9.1%', conversions: '203', roi: '+320%' }
  ]

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Assistant Marketing Digital</h1>
        <p className="text-gray-600">Créez du contenu engageant avec l'aide de l'IA</p>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Création de contenu</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="campaigns">Campagnes</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Création de contenu */}
        <TabsContent value="content" className="space-y-6">
          {/* Templates de contenu */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentTemplates.map((template, index) => {
              const Icon = template.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${template.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{template.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">{template.description}</p>
                    <Button size="sm" className="w-full">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Générer
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Générateur de contenu */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Générateur de contenu IA</CardTitle>
                <CardDescription>Décrivez votre besoin et laissez l'IA créer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Type de contenu</label>
                  <select className="w-full p-2 border rounded">
                    <option>Post réseaux sociaux</option>
                    <option>Email marketing</option>
                    <option>Publicité</option>
                    <option>Article de blog</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Sujet/Produit</label>
                  <Input placeholder="Ex: Nouvelle collection de vêtements d'hiver" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Ton souhaité</label>
                  <select className="w-full p-2 border rounded">
                    <option>Professionnel</option>
                    <option>Amical</option>
                    <option>Enthousiaste</option>
                    <option>Informatif</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Instructions spéciales</label>
                  <Textarea placeholder="Mentionnez des détails spécifiques, mots-clés à inclure, etc." />
                </div>
                <Button className="w-full">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Générer le contenu
                </Button>
              </CardContent>
            </Card>

            {/* Aperçu et optimisation */}
            <Card>
              <CardHeader>
                <CardTitle>Optimisation intelligente</CardTitle>
                <CardDescription>Suggestions pour améliorer votre contenu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">Meilleur moment de publication</span>
                  </div>
                  <p className="text-sm text-gray-600">Mardi et Jeudi entre 18h-20h pour votre audience</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium">Hashtags recommandés</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">#QualitéAlgérienne</Badge>
                    <Badge variant="outline">#MadeInAlgeria</Badge>
                    <Badge variant="outline">#PMEAlgérienne</Badge>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">Audience cible</span>
                  </div>
                  <p className="text-sm text-gray-600">Jeunes professionnels 25-35 ans, intérêts: mode, qualité</p>
                </div>

                <Button variant="outline" className="w-full">
                  <Image className="h-4 w-4 mr-2" />
                  Générer une image
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contenu généré récemment */}
          <Card>
            <CardHeader>
              <CardTitle>Contenu généré récemment</CardTitle>
              <CardDescription>Vos créations IA des derniers jours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {generatedContent.map((content) => (
                  <div key={content.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">{content.title}</h3>
                        <Badge variant="outline" className="mt-1">
                          {content.type === 'social' ? 'Réseaux sociaux' : 'Email'}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{content.content}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Créé le {content.date}</span>
                      {content.engagement && (
                        <span>Engagement prévu: {content.engagement}</span>
                      )}
                      {content.openRate && (
                        <span>Taux d'ouverture: {content.openRate}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analyse d'audience */}
        <TabsContent value="audience" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Segments d'audience</CardTitle>
                <CardDescription>Répartition de votre audience par démographie</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {audienceInsights.map((segment, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{segment.segment}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{segment.percentage}%</span>
                          <Badge variant="outline" className="text-green-600">
                            {segment.growth}
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{width: `${segment.percentage}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommandations IA</CardTitle>
                <CardDescription>Insights pour optimiser votre stratégie</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Opportunité de croissance</h4>
                    <p className="text-xs text-gray-600">
                      Le segment 18-25 ans montre un fort engagement (+15%). 
                      Considérez créer plus de contenu pour cette tranche d'âge.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Contenu performant</h4>
                    <p className="text-xs text-gray-600">
                      Vos posts avec des images de produits génèrent 40% plus d'engagement 
                      que le contenu textuel seul.
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Timing optimal</h4>
                    <p className="text-xs text-gray-600">
                      Vos publications du mardi soir (18h-20h) obtiennent les meilleurs 
                      résultats avec votre audience principale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Gestion des campagnes */}
        <TabsContent value="campaigns" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Campagnes actives</h2>
              <p className="text-gray-600">Gérez vos campagnes marketing</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nouvelle campagne
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance des campagnes</CardTitle>
              <CardDescription>Résultats de vos dernières campagnes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium">{campaign.name}</h3>
                      <Badge className="bg-green-100 text-green-800">
                        ROI {campaign.roi}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Portée</span>
                        <p className="font-medium">{campaign.reach}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Engagement</span>
                        <p className="font-medium">{campaign.engagement}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Conversions</span>
                        <p className="font-medium">{campaign.conversions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Portée totale</p>
                    <p className="text-2xl font-bold">45,230</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-xs text-green-600 mt-2">+12% ce mois</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Engagement moyen</p>
                    <p className="text-2xl font-bold">7.8%</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-xs text-blue-600 mt-2">+0.8% ce mois</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Conversions</p>
                    <p className="text-2xl font-bold">348</p>
                  </div>
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <p className="text-xs text-purple-600 mt-2">+25% ce mois</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Rapport détaillé</CardTitle>
              <CardDescription>Analyse complète de vos performances marketing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Résumé du mois</h4>
                  <p className="text-sm text-gray-600">
                    Vos campagnes marketing ont généré une portée de 45,230 personnes avec un 
                    taux d'engagement de 7.8%. Le contenu visuel performe 40% mieux que le 
                    contenu textuel. Les publications du mardi soir obtiennent les meilleurs résultats.
                  </p>
                </div>
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le rapport complet
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

