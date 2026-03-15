import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from '../components/ui/sheet'
import { Separator } from '../components/ui/separator'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Plus, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav
      className="border-b px-6 py-4 flex items-center justify-between backdrop-blur-sm"
      style={{ backgroundColor: '#001E2Bcc', borderBottomColor: '#00684A33' }}
    >
      <Link to="/" className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00ED64' }} />
        <span className="text-lg font-bold" style={{ color: '#E8EDEB' }}>
          SC <span style={{ color: '#00ED64' }}>Empreendimentos</span>
        </span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-sm hover:opacity-80 transition-opacity" style={{ color: '#E8EDEB', opacity: 0.7 }}>
          Início
        </Link>
        <Link to="/novo">
          <Button
            size="sm"
            className="font-semibold"
            style={{ backgroundColor: '#00ED64', color: '#001E2B' }}
          >
            <Plus className="w-4 h-4 mr-1" />
            Novo Empreendimento
          </Button>
        </Link>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              style={{ borderColor: '#00684A', backgroundColor: 'transparent', color: '#E8EDEB' }}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 border-l" style={{ backgroundColor: '#001E2B', borderColor: '#00684A33' }}>
            <VisuallyHidden>
              <SheetTitle>Menu de navegação</SheetTitle>
              <SheetDescription>Menu principal de navegação</SheetDescription>
            </VisuallyHidden>
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/" className="text-sm font-medium hover:opacity-80" style={{ color: '#E8EDEB' }}>
                Início
              </Link>
              <Separator style={{ backgroundColor: '#00684A33' }} />
              <Link to="/novo">
                <Button className="w-full font-semibold" style={{ backgroundColor: '#00ED64', color: '#001E2B' }}>
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Empreendimento
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}