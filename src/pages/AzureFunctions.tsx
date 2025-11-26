import ContentCard from "@/components/ContentCard";
import Navigation from "@/components/Navigation";
import { Code, Zap, Link2, Languages, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AzureFunctions = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              Página 2
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Azure Functions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plataforma serverless da Microsoft para execução de código orientada a eventos
            </p>
          </div>

          {/* What is Azure Functions */}
          <ContentCard
            title="O que é Azure Functions?"
            icon={Code}
            description="A solução serverless da Microsoft Azure"
          >
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                <strong>Azure Functions</strong> é um serviço de computação serverless da Microsoft que permite executar 
                código sob demanda sem precisar gerenciar explicitamente a infraestrutura. Você escreve o código que 
                responde a eventos e o Azure cuida do resto.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Principais Usos
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>Processamento de dados em tempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>APIs e microserviços HTTP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>Integração de sistemas e workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>Processamento de arquivos e imagens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>Tarefas agendadas (cron jobs)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/5 border border-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Benefícios Chave
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Deploy simples e rápido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Múltiplas linguagens suportadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Integração nativa com Azure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Monitoramento com Application Insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">✓</span>
                      <span>Desenvolvimento local facilitado</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                <p className="text-sm font-medium">
                  <strong className="text-accent">Function App:</strong> Container lógico que agrupa uma ou mais 
                  Azure Functions. Compartilham configurações, recursos e podem ser deployadas juntas.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Execution Model */}
          <ContentCard
            title="Execução Sob Demanda"
            icon={Zap}
            description="Como funciona o modelo de execução das Azure Functions"
          >
            <div className="space-y-4">
              <p className="text-foreground leading-relaxed">
                As Azure Functions operam em um modelo de <strong>execução orientada a eventos</strong>. O código 
                permanece inativo até que um evento específico o acione (trigger), momento em que a Azure automaticamente:
              </p>

              <div className="grid gap-4">
                <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Provisiona recursos</h4>
                    <p className="text-sm text-muted-foreground">
                      Aloca automaticamente CPU, memória e outros recursos necessários
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Executa o código</h4>
                    <p className="text-sm text-muted-foreground">
                      Processa a requisição ou evento que disparou a função
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Retorna resultado</h4>
                    <p className="text-sm text-muted-foreground">
                      Envia a resposta e libera os recursos automaticamente
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm">
                  💡 <strong>Importante:</strong> Se nenhum evento ocorrer, nenhum recurso é consumido e 
                  nenhuma cobrança é gerada. A função fica "dormindo" até ser necessária.
                </p>
              </div>
            </div>
          </ContentCard>

          {/* Triggers and Bindings */}
          <ContentCard
            title="Triggers e Bindings"
            icon={Link2}
            description="Como as Functions se conectam com eventos e dados"
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-primary">🎯 Triggers (Gatilhos)</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Definem <strong>o que inicia</strong> a execução de uma função. Cada função tem exatamente um trigger.
                </p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <div className="font-mono text-xs text-primary mb-1">HTTP Trigger</div>
                    <p className="text-sm">Requisições HTTP/REST API</p>
                    <code className="text-xs text-muted-foreground">Ex: GET /api/users</code>
                  </div>
                  
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <div className="font-mono text-xs text-primary mb-1">Timer Trigger</div>
                    <p className="text-sm">Execução agendada (cron)</p>
                    <code className="text-xs text-muted-foreground">Ex: Todo dia às 9h</code>
                  </div>
                  
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <div className="font-mono text-xs text-primary mb-1">Queue Trigger</div>
                    <p className="text-sm">Mensagens em fila (Storage Queue)</p>
                    <code className="text-xs text-muted-foreground">Ex: Nova mensagem</code>
                  </div>
                  
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <div className="font-mono text-xs text-primary mb-1">Blob Trigger</div>
                    <p className="text-sm">Upload/modificação de arquivo</p>
                    <code className="text-xs text-muted-foreground">Ex: Nova imagem</code>
                  </div>
                  
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <div className="font-mono text-xs text-primary mb-1">Event Grid Trigger</div>
                    <p className="text-sm">Eventos de serviços Azure</p>
                    <code className="text-xs text-muted-foreground">Ex: VM criada</code>
                  </div>
                  
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <div className="font-mono text-xs text-primary mb-1">Cosmos DB Trigger</div>
                    <p className="text-sm">Mudanças no banco de dados</p>
                    <code className="text-xs text-muted-foreground">Ex: Novo documento</code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-secondary">🔗 Bindings (Vínculos)</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Forma declarativa de conectar dados a sua função, sem escrever código de conexão.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
                    <h5 className="font-semibold text-secondary mb-2">Input Bindings</h5>
                    <p className="text-sm text-muted-foreground mb-2">Leem dados de fontes externas</p>
                    <ul className="text-sm space-y-1">
                      <li>• Ler arquivo do Blob Storage</li>
                      <li>• Consultar Cosmos DB</li>
                      <li>• Obter dados de tabela</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-accent/5 border-l-4 border-accent rounded-r-lg">
                    <h5 className="font-semibold text-accent mb-2">Output Bindings</h5>
                    <p className="text-sm text-muted-foreground mb-2">Gravam dados em destinos externos</p>
                    <ul className="text-sm space-y-1">
                      <li>• Salvar em Blob Storage</li>
                      <li>• Inserir em Cosmos DB</li>
                      <li>• Enviar para fila</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                <h5 className="font-semibold text-sm mb-2">💡 Exemplo Prático Completo:</h5>
                <div className="font-mono text-xs space-y-1 text-muted-foreground">
                  <p><span className="text-primary">Trigger:</span> HTTP POST em /api/processar-pedido</p>
                  <p><span className="text-secondary">Input Binding:</span> Lê dados do cliente no Cosmos DB</p>
                  <p><span className="text-foreground">Processamento:</span> Valida pedido e calcula total</p>
                  <p><span className="text-accent">Output Binding 1:</span> Salva pedido no Cosmos DB</p>
                  <p><span className="text-accent">Output Binding 2:</span> Envia mensagem para fila de processamento</p>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* Languages */}
          <ContentCard
            title="Linguagens Compatíveis"
            icon={Languages}
            description="Azure Functions suporta múltiplas linguagens de programação"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-card border-2 border-primary/20 rounded-lg hover:border-primary/50 transition-smooth">
                <div className="font-bold text-primary mb-2">C# (.NET)</div>
                <p className="text-sm text-muted-foreground mb-2">Suporte de primeira classe</p>
                <div className="text-xs space-y-1">
                  <div>✓ .NET 6, 7 e 8</div>
                  <div>✓ Isolated worker model</div>
                  <div>✓ IntelliSense completo</div>
                </div>
              </div>

              <div className="p-4 bg-card border-2 border-primary/20 rounded-lg hover:border-primary/50 transition-smooth">
                <div className="font-bold text-primary mb-2">JavaScript / TypeScript</div>
                <p className="text-sm text-muted-foreground mb-2">Node.js runtime</p>
                <div className="text-xs space-y-1">
                  <div>✓ Node 16, 18 e 20</div>
                  <div>✓ TypeScript nativo</div>
                  <div>✓ npm packages</div>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="font-bold mb-2">Python</div>
                <p className="text-sm text-muted-foreground mb-2">Ideal para ML e data</p>
                <div className="text-xs space-y-1">
                  <div>✓ Python 3.8, 3.9, 3.10, 3.11</div>
                  <div>✓ pip packages</div>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="font-bold mb-2">Java</div>
                <p className="text-sm text-muted-foreground mb-2">Enterprise ready</p>
                <div className="text-xs space-y-1">
                  <div>✓ Java 8, 11 e 17</div>
                  <div>✓ Maven/Gradle</div>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="font-bold mb-2">PowerShell</div>
                <p className="text-sm text-muted-foreground mb-2">Automação Azure</p>
                <div className="text-xs space-y-1">
                  <div>✓ PowerShell 7.2</div>
                  <div>✓ Az modules</div>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg">
                <div className="font-bold mb-2">Outros</div>
                <p className="text-sm text-muted-foreground mb-2">Custom handlers</p>
                <div className="text-xs space-y-1">
                  <div>✓ Go, Rust, etc.</div>
                  <div>✓ Qualquer linguagem HTTP</div>
                </div>
              </div>
            </div>
          </ContentCard>

          {/* Pricing */}
          <ContentCard
            title="Modelo de Cobrança"
            icon={DollarSign}
            description="Como funciona o pagamento do Azure Functions"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl">
                  <h4 className="font-bold text-lg mb-3 text-primary">Plano Consumo (Consumption)</h4>
                  <p className="text-sm mb-4">Serverless verdadeiro - pague apenas pelo uso</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">💰</span>
                      <div>
                        <strong>Cobrança por execução:</strong>
                        <p className="text-muted-foreground">$0.20 por milhão de execuções</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">⏱️</span>
                      <div>
                        <strong>Cobrança por tempo:</strong>
                        <p className="text-muted-foreground">$0.000016/GB-s (memória × tempo)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">🎁</span>
                      <div>
                        <strong>Free tier mensal:</strong>
                        <p className="text-muted-foreground">1 milhão de execuções + 400.000 GB-s</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-background/50 rounded-lg">
                    <p className="text-xs font-mono">
                      <strong>Exemplo:</strong> 1 milhão de execuções de 200ms com 512MB = 
                      <span className="text-primary"> ~$1.60/mês</span>
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-card border-2 border-border rounded-xl">
                  <h4 className="font-bold text-lg mb-3">Plano Premium</h4>
                  <p className="text-sm mb-4">Para workloads de produção exigentes</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-bold">⚡</span>
                      <div>
                        <strong>Sem cold start:</strong>
                        <p className="text-muted-foreground">Instâncias sempre quentes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="font-bold">🔒</span>
                      <div>
                        <strong>VNet integration:</strong>
                        <p className="text-muted-foreground">Conectividade privada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <span className="font-bold">📈</span>
                      <div>
                        <strong>Mais recursos:</strong>
                        <p className="text-muted-foreground">Até 4 cores e 14GB RAM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                    <p className="text-xs">
                      <strong>Cobrança:</strong> Por hora de instância ativa
                      <br />
                      <span className="text-muted-foreground">A partir de ~$150/mês por instância</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-r-lg">
                <h5 className="font-semibold text-secondary mb-2">💡 Dica de Otimização de Custos:</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Otimize o tempo de execução e uso de memória</li>
                  <li>• Use o plano Consumo para cargas variáveis</li>
                  <li>• Considere Premium apenas para requisitos específicos</li>
                  <li>• Configure alertas de billing no Azure</li>
                  <li>• Use Application Insights para monitorar performance</li>
                </ul>
              </div>
            </div>
          </ContentCard>
        </div>
      </main>
    </div>
  );
};

export default AzureFunctions;
