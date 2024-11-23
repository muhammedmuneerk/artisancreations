import Image from "next/image"
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ArtPortfolio() {
  return (
    <div className="bg-[#F5E6D3] min-h-screen">
      <header className="bg-[#8C7851] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Artisan Creations</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Artisan Creations</h2>
          <p className="text-xl mb-8">Handcrafted beauty for your home and life</p>
          <Button className="bg-[#8C7851] hover:bg-[#6A5B3E]">Explore Gallery</Button>
        </section>

        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Image src="/images/01.jpg" alt="Artwork 1" width={400} height={300} className="rounded-lg shadow-lg" />
              <Image src="/placeholder.svg?height=300&width=400" alt="Artwork 2" width={400} height={300} className="rounded-lg shadow-lg" />
              <Image src="/placeholder.svg?height=300&width=400" alt="Artwork 3" width={400} height={300} className="rounded-lg shadow-lg" />
              <Image src="/placeholder.svg?height=300&width=400" alt="Artwork 4" width={400} height={300} className="rounded-lg shadow-lg" />
              <Image src="/placeholder.svg?height=300&width=400" alt="Artwork 5" width={400} height={300} className="rounded-lg shadow-lg" />
              <Image src="/placeholder.svg?height=300&width=400" alt="Artwork 6" width={400} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About the Artist</h2>
            <div className="flex flex-col md:flex-row items-center">
              <Image src="/placeholder.svg?height=300&width=300" alt="Artist" width={300} height={300} className="rounded-full mb-8 md:mb-0 md:mr-8" />
              <div>
                <p className="text-lg mb-4">
                  Hello! I'm Jane Doe, a passionate artisan dedicated to creating unique, handcrafted pieces that bring warmth and character to your space. With over 10 years of experience in various crafting techniques, I strive to blend traditional methods with modern aesthetics.
                </p>
                <p className="text-lg">
                  Each piece in my collection is lovingly made by hand, ensuring that no two items are exactly alike. I find inspiration in nature, cultural patterns, and the interplay of colors and textures. My goal is to create functional art that not only beautifies your surroundings but also tells a story.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
                  <Input type="text" name="name" placeholder="Your Name" required />
                  <Input type="email" name="email" placeholder="Your Email" required />
                  <Textarea name="message" placeholder="Your Message" required />
                  <Button type="submit" className="bg-[#8C7851] hover:bg-[#6A5B3E]">Send Message</Button>
                </form>
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="flex items-center mb-2"><MapPin className="mr-2" /> 123 Craft Street, Artville, AR 12345</p>
                  <p className="flex items-center mb-2"><Mail className="mr-2" /> hello@artisancreations.com</p>
                  <p className="flex items-center"><Phone className="mr-2" /> (123) 456-7890</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#8C7851] hover:text-[#6A5B3E]"><Instagram /></a>
                    <a href="#" className="text-[#8C7851] hover:text-[#6A5B3E]"><Twitter /></a>
                    <a href="#" className="text-[#8C7851] hover:text-[#6A5B3E]"><Facebook /></a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459447!3d40.74844797932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635180906251!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#8C7851] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Artisan Creations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}