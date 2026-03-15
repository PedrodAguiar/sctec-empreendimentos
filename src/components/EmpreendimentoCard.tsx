import type { Empreendimento } from "../types/empreendimento";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Pencil, Trash2, User, MapPin, Tag, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  empreendimento: Empreendimento;
  onRemover: (id: string) => void;
}

export default function EmpreendimentoCard({
  empreendimento,
  onRemover,
}: Props) {
  return (
    <Card
      className="rounded-2xl border transition-all duration-200 hover:scale-[1.02]"
      style={{
        backgroundColor: "#0D253599",
        borderColor: "#00684A33",
        backdropFilter: "blur(12px)",
      }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle
            className="text-lg leading-tight"
            style={{ color: "#E8EDEB" }}
          >
            {empreendimento.nome}
          </CardTitle>
          <Badge
            className="shrink-0 text-xs font-semibold px-2 py-1 rounded-full"
            style={
              empreendimento.status === "ativo"
                ? {
                    backgroundColor: "#00684A33",
                    color: "#00ED64",
                    border: "1px solid #00684A",
                  }
                : {
                    backgroundColor: "#ffffff11",
                    color: "#E8EDEB99",
                    border: "1px solid #ffffff22",
                  }
            }
          >
            {empreendimento.status === "ativo" ? "● Ativo" : "● Inativo"}
          </Badge>
        </div>

        {/* Segmento tag */}
        <div className="flex items-center gap-1 mt-1">
          <Tag className="w-3 h-3" style={{ color: "#00ED64", opacity: 0.7 }} />
          <span className="text-xs" style={{ color: "#00ED64", opacity: 0.7 }}>
            {empreendimento.segmento}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <div
          className="flex items-center gap-2"
          style={{ color: "#E8EDEB", opacity: 0.7 }}
        >
          <User className="w-3.5 h-3.5 shrink-0" style={{ color: "#00ED64" }} />
          <span>{empreendimento.responsavel}</span>
        </div>

        <div
          className="flex items-center gap-2"
          style={{ color: "#E8EDEB", opacity: 0.7 }}
        >
          <MapPin
            className="w-3.5 h-3.5 shrink-0"
            style={{ color: "#00ED64" }}
          />
          <span>{empreendimento.municipio}</span>
        </div>

        <div
          className="flex items-center gap-2"
          style={{ color: "#E8EDEB", opacity: 0.7 }}
        >
          <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: "#00ED64" }} />
          <span className="truncate">{empreendimento.contato}</span>
        </div>

        {/* Divider */}
        <div
          className="pt-2 mt-2 border-t flex gap-2"
          style={{ borderColor: "#00684A33" }}
        >
          <Link to={`/editar/${empreendimento.id}`} className="flex-1">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1"
              style={{
                borderColor: "#00684A",
                color: "#E8EDEB",
                backgroundColor: "transparent",
              }}
            >
              <Pencil className="w-3.5 h-3.5" />
              Editar
            </Button>
          </Link>
          <Button
            variant="destructive"
            size="sm"
            className="flex-1 gap-1"
            style={{
              backgroundColor: "#3D0F0F",
              color: "#FF6B6B",
              border: "1px solid #FF6B6B33",
            }}
            onClick={() => onRemover(empreendimento.id)}
          >
            <Trash2 className="w-3.5 h-3.5" />
            Excluir
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
