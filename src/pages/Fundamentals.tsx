import ContentCard from "@/components/ContentCard";
import ComparisonTable from "@/components/ComparisonTable";
import Navigation from "@/components/Navigation";
import { Cloud, CheckCircle, XCircle, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Fundamentals = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Página 1
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Conceitos Fundamentais
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entenda os fundamentos do Serverless Computing e como ele se compara a outros modelos de cloud
            </p>
          </div>

          {/* Serverless Definition */}
          <ContentCard
            title="O que é Serverless Computing?"
            icon={Cloud}
            description="Compreenda o paradigma que está revolucionando o desenvolvimento de aplicações"
          >
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong>Serverless Computing</strong> é um modelo de execução em nuvem onde o provedor de cloud 
                gerencia automaticamente a infraestrutura necessária para executar o código. O desenvolvedor não 
                precisa provisionar, escalar ou manter servidores.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-sm font-medium text-primary mb-2">Principais Características:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Execução sob demanda:</strong> O código só é executado quando necessário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Escalabilidade automática:</strong> Ajusta recursos automaticamente baseado na demanda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Cobrança por uso:</strong> Você paga apenas pelo tempo de execução real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Zero gerenciamento:</strong> Sem preocupações com SO, patches ou manutenção</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/5 border border-secondary/20 p-4 rounded-lg">
                <p className="text-sm font-mono text-secondary">
                  💡 <strong>Analogia:</strong> É como contratar um táxi (Serverless) versus comprar um carro (servidor tradicional). 
                  Você paga apenas pelas viagens que faz, sem se preocupar com manutenção, seguro ou estacionamento.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Comparison Table */}
          <ContentCard
            title="Serverless vs IaaS vs PaaS vs SaaS"
            icon={Layers}
            description="Compare os diferentes modelos de serviços em nuvem"
          >
            <ComparisonTable />
            
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-accent/5 border border-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  Quando usar Serverless?
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• APIs e microserviços</li>
                  <li>• Processamento de eventos</li>
                  <li>• Automações e workflows</li>
                  <li>• Aplicações com tráfego variável</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Quando considerar outros modelos?
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Aplicações com estado persistente</li>
                  <li>• Processamento de longa duração</li>
                  <li>• Controle total sobre infraestrutura</li>
                  <li>• Requisitos de compliance específicos</li>
                </ul>
              </div>
            </div>
          </ContentCard>

          {/* Advantages and Disadvantages */}
          <div className="grid md:grid-cols-2 gap-6">
            <ContentCard
              title="Vantagens"
              icon={CheckCircle}
              className="border-l-4 border-l-primary"
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Custo otimizado</strong>
                    <p className="text-sm text-muted-foreground">Pague apenas pelo que usar, sem custos ociosos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Escalabilidade instantânea</strong>
                    <p className="text-sm text-muted-foreground">Escala automaticamente de zero a milhares de requisições</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Desenvolvimento ágil</strong>
                    <p className="text-sm text-muted-foreground">Foco total no código, sem gerenciar infraestrutura</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Alta disponibilidade</strong>
                    <p className="text-sm text-muted-foreground">Redundância e failover gerenciados pelo provedor</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Time to market reduzido</strong>
                    <p className="text-sm text-muted-foreground">Deploy rápido e iterações constantes</p>
                  </div>
                </li>
              </ul>
            </ContentCard>

            <ContentCard
              title="Desvantagens"
              icon={XCircle}
              className="border-l-4 border-l-destructive"
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Cold start</strong>
                    <p className="text-sm text-muted-foreground">Primeira execução pode ter latência maior</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Vendor lock-in</strong>
                    <p className="text-sm text-muted-foreground">Dependência das APIs e serviços do provedor</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Limites de execução</strong>
                    <p className="text-sm text-muted-foreground">Timeout e recursos limitados por execução</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Debugging complexo</strong>
                    <p className="text-sm text-muted-foreground">Monitoramento e troubleshooting distribuído</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">Custos imprevisíveis</strong>
                    <p className="text-sm text-muted-foreground">Picos de uso podem gerar custos inesperados</p>
                  </div>
                </li>
              </ul>
            </ContentCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fundamentals;
