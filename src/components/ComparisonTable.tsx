import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const ComparisonTable = () => {
  const data = [
    {
      model: "Serverless",
      description: "Execução sob demanda, sem gerenciamento de servidores",
      management: "Zero gerenciamento",
      scaling: "Automático e instantâneo",
      cost: "Paga por execução",
    },
    {
      model: "IaaS",
      description: "Infraestrutura como Serviço (VMs, redes, storage)",
      management: "Gerenciamento de SO e middleware",
      scaling: "Manual ou semi-automático",
      cost: "Paga por hora/tempo ligado",
    },
    {
      model: "PaaS",
      description: "Plataforma como Serviço (ambiente de desenvolvimento)",
      management: "Gerenciamento apenas da aplicação",
      scaling: "Automático com configuração",
      cost: "Paga por recursos alocados",
    },
    {
      model: "SaaS",
      description: "Software como Serviço (aplicação completa)",
      management: "Zero gerenciamento",
      scaling: "Transparente para o usuário",
      cost: "Assinatura ou por usuário",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow className="bg-primary/5">
            <TableHead className="font-bold">Modelo</TableHead>
            <TableHead className="font-bold">Descrição</TableHead>
            <TableHead className="font-bold">Gerenciamento</TableHead>
            <TableHead className="font-bold">Escalabilidade</TableHead>
            <TableHead className="font-bold">Cobrança</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.model} className="hover:bg-muted/50 transition-smooth">
              <TableCell className="font-semibold text-primary">{row.model}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.management}</TableCell>
              <TableCell>{row.scaling}</TableCell>
              <TableCell>{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
