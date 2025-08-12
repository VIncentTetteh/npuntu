import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold text-primary">NPUNTU</span>
              <span className="text-sm text-muted block font-medium">COMPANIES LTD</span>
            </div>
            <p className="text-sm leading-6 text-muted">
              Leading Ghanaian-owned Construction & Engineering company delivering innovative, 
              high-quality solutions for civil engineering, roads, real estate, and infrastructure projects.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services/civil-engineering" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Civil Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/roads" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Roads
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/real-estate" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Real Estate
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/water-treatment" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Water Treatment
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">More Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services/sea-defence" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Sea Defence
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/consultancy" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/energy" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Energy
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/interior-design" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      3D Interior Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#about" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#partners" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm leading-6 text-muted hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Contact Info</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-muted">
                    info@npuntu.com
                  </li>
                  <li className="text-sm leading-6 text-muted">
                    +233 (0) 557 275 028
                  </li>
                  <li className="text-sm leading-6 text-muted">
                    +233 (0) 503 706 700
                  </li>
                  <li className="text-sm leading-6 text-muted">
                    Accra, Ghana
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <div className="flex items-center justify-between">
            <p className="text-xs leading-5 text-muted">
              &copy; 2024 Npuntu Companies Ltd. All rights reserved.
            </p>
            <p className="text-xs leading-5 text-muted">
              Registered in Ghana: BN021262018
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
