"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="w-9 h-9">
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={closeMenu}
              >
                Sobre
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={closeMenu}
              >
                Projetos
              </Link>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={closeMenu}
              >
                Habilidades
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={closeMenu}
              >
                Contato
              </Link>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="text-sm text-muted-foreground">Tema</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
