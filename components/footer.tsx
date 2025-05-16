import { Hotel } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:justify-between md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Hotel className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built with love by{" "}
            <Link
              href="/"
              className="font-medium underline underline-offset-4"
            >
              NathBliss
            </Link>
            . Experience luxury and comfort.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/privacy"
            className="text-sm font-medium underline underline-offset-4"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium underline underline-offset-4"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}