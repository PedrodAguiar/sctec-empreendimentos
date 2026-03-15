import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Plus, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-slate-800">
        SC Empreendimentos
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">
          Início
        </Link>
        <Link to="/novo">
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Novo Empreendimento
          </Button>
        </Link>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <VisuallyHidden>
              <VisuallyHidden>
                <SheetTitle>Menu de navegação</SheetTitle>
                <SheetDescription>Menu principal de navegação</SheetDescription>
              </VisuallyHidden>
            </VisuallyHidden>
            <div className="flex flex-col gap-4 mt-8">
              <Link
                to="/"
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                Início
              </Link>
              <Separator />
              <Link to="/novo">
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Empreendimento
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
