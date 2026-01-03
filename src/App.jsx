import React, { useState } from 'react';
import { Target, DollarSign, Users, Clock, Award, Shield, Phone, Mail, MapPin, Check, Sparkles, HandCoins, Home, Car, FileText } from 'lucide-react';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Olá estou interessado em fazer uma simulação gratuita para saber quanto consigo de desconto para quitar minha dívida";
    const whatsappUrl = `https://wa.me/5511920066707?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const QuitaFacilLogo = () => (
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-xl shadow-lg">
        <Sparkles className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">Quita</span>
        <span className="text-lg font-bold text-orange-600 -mt-1">Fácil</span>
      </div>
    </div>
  );

  const stats = [
    { number: '85%', label: 'Desconto Máximo', icon: Target },
    { number: 'R$55 Milhões +', label: 'Quitados', icon: DollarSign },
    { number: '32.000+', label: 'Clientes', icon: Users },
    { number: '24h', label: 'Resposta', icon: Clock }
  ];

  const services = [
    {
      title: 'Financiamento Imobiliário',
      icon: <Home className="w-8 h-8 text-orange-600" />,
      description: 'Quite sua casa, apartamento ou terreno com até 70% de desconto e tenha seu imóvel 100% quitado.',
      features: ['Análise gratuita', 'Negociação direta com bancos', 'Sem burocracia']
    },
    {
      title: 'Financiamento Veicular',
      icon: <Car className="w-8 h-8 text-orange-600" />,
      description: 'Libere seu carro, moto ou caminhão das parcelas com descontos exclusivos para veículos.',
      features: ['Processo digital', 'Quitado em 48h', 'Melhor proposta garantida']
    },
    {
      title: 'Consórcios',
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      description: 'Negocie a quitação antecipada do seu consórcio com condições especiais e descontos exclusivos.',
      features: ['Cartas contempladas', 'Análise em 24h', 'Economia imediata']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <QuitaFacilLogo />
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Serviços</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Como Funciona</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition-colors font-medium">Contato</a>
            </div>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-bold shadow-lg hover:shadow-xl flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Falar com Especialista
            </button>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-r from-orange-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-yellow-300" />
                <span className="bg-black bg-opacity-30 px-3 py-1 rounded-full text-sm font-medium">Elimine sua Dívida e poupe seu dinheiro</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Quita Fácil: O caminho mais <span className="text-yellow-300">rápido e simples</span> para quitar seu financiamento
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Especialistas em negociação de dívidas com os melhores descontos do mercado. 
                Liberte-se das parcelas e tenha seu bem 100% quitado com segurança e tranquilidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-orange-900 px-8 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <HandCoins className="w-5 h-5 mr-2" />
                  Calcular Meu Desconto
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-medium flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </button>
              </div>
            </div>
            <div className="bg-white bg-opacity-95 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <HandCoins className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Simulação Gratuita</h3>
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Proposta Enviada!</h4>
                  <p className="text-gray-600">Nossa equipe entrará em contato em até 24h úteis.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center text-gray-600 mb-6">
                    <p>Para solicitar sua simulação gratuita, clique no botão abaixo:</p>
                  </div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all font-bold shadow-lg"
                  >
                    Solicitar Simulação Gratuita
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especializados em diferentes tipos de financiamento para oferecer a melhor solução para cada caso.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-orange-100 group">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-orange-600 justify-center">
                        <Check className="w-4 h-4 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 text-center">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="text-white font-medium hover:text-yellow-300 transition-colors"
                  >
                    Solicitar Análise
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona o Quita Fácil</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e seguro para quitar seu financiamento com desconto em poucos passos
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Solicite Sua Análise",
                  description: "Preencha nosso formulário com os dados do seu financiamento. A análise é 100% gratuita e sem compromisso.",
                  icon: "📝"
                },
                {
                  step: 2,
                  title: "Receba Sua Proposta",
                  description: "Em até 24h úteis, receba uma proposta personalizada com o melhor desconto possível para o seu caso específico.",
                  icon: "📊"
                },
                {
                  step: 3,
                  title: "Aproveite o Desconto",
                  description: "Aprovada a proposta, quitamos seu financiamento diretamente com o banco e você recebe seu bem 100% quitado.",
                  icon: "✅"
                }
              ].map((item, index) => (
                <div key={index} className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 text-white text-3xl font-bold rounded-full shadow-lg">
                      {item.icon}
                    </div>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-28' : 'md:pr-28'}`}>
                    <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
                      <div className="text-orange-600 font-bold text-lg mb-2">Passo {item.step}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                      <button 
                        onClick={handleWhatsAppClick}
                        className="mt-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all font-medium text-sm"
                      >
                        Iniciar Agora
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que escolher o Quita Fácil?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-black bg-opacity-20 rounded-xl backdrop-blur-sm">
              <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Segurança Total</h3>
              <p className="text-orange-100">Processo 100% transparente e regulamentado pelo Banco Central.</p>
            </div>
            <div className="p-6 bg-black bg-opacity-20 rounded-xl backdrop-blur-sm">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Especialistas</h3>
              <p className="text-orange-100">Equipe com mais de 10 anos de experiência em negociação financeira.</p>
            </div>
            <div className="p-6 bg-black bg-opacity-20 rounded-xl backdrop-blur-sm">
              <Target className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">Melhor Proposta</h3>
              <p className="text-orange-100">Garantimos a melhor proposta do mercado pois temos parceria com os principais bancos e financeiras.</p>
            </div>
          </div>
          <div className="mt-12">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-orange-900 px-8 py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
            >
              <HandCoins className="w-6 h-6 mr-2" />
              Comece sua simulação grátis
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para quitar fácil?</h2>
            <p className="text-xl text-gray-300">Entre em contato e descubra quanto você pode economizar hoje mesmo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              onClick={handleWhatsAppClick}
              className="text-center p-8 bg-gray-800 rounded-xl hover:bg-green-600 transition-colors cursor-pointer"
            >
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-300">(11) 92006-6707</p>
              <p className="text-gray-400 text-sm">Clique para conversar agora</p>
            </div>
            <div 
              onClick={handleWhatsAppClick}
              className="text-center p-8 bg-gray-800 rounded-xl hover:bg-green-600 transition-colors cursor-pointer"
            >
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Simulação por WhatsApp</h3>
              <p className="text-gray-300">Resposta em minutos</p>
              <p className="text-gray-400 text-sm">Clique e fale conosco</p>
            </div>
            <div 
              onClick={handleWhatsAppClick}
              className="text-center p-8 bg-gray-800 rounded-xl hover:bg-green-600 transition-colors cursor-pointer"
            >
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atendimento Online</h3>
              <p className="text-gray-300">100% digital e seguro</p>
              <p className="text-gray-400 text-sm">Iniciar atendimento</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-bold shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar com Especialista Agora
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <QuitaFacilLogo />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2026 Quita Fácil. Todos os direitos reservados.</p>
              <p className="text-gray-500 text-sm mt-1">Quitando sonhos de forma fácil e segura desde 2015.</p>
              <button 
                onClick={handleWhatsAppClick}
                className="mt-2 text-green-400 hover:text-green-300 transition-colors flex items-center justify-center md:justify-end"
              >
                <Phone className="w-4 h-4 mr-1" />
                (11) 92006-6707
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;