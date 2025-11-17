"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="pt-24">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-28 text-center">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Discover Your Perfect{" "}
          <span className="text-amber-700">Coffee</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          CoffeeLab brings artisan coffee to your cup. Our beans are carefully 
          roasted, brewed with passion, and crafted for true coffee lovers.
        </p>

        <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg rounded-xl">
          Explore Coffees
        </Button>

        
      </section>

      {/* OUR COFFEES SECTION */}
      <section id="coffees" className="bg-amber-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14 tracking-tight">
            Our Signature Coffees
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <Card className="shadow-md border bg-white rounded-2xl">
              <CardContent className="p-6">
                <Image
                  src="/espresso1.jpg"
                  width={400}
                  height={250}
                  alt="Espresso"
                  className="rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold mb-3">Espresso</h3>
                <p className="text-gray-600">
                  Pure and strong flavor for intense coffee lovers.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="shadow-md border bg-white rounded-2xl">
              <CardContent className="p-6">
                <Image
                  src="/latte1.jpg"
                  width={400}
                  height={250}
                  alt="Latte"
                  className="rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold mb-3">Latte</h3>
                <p className="text-gray-600">
                  Silky milk foam combined with our premium beans.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="shadow-md border bg-white rounded-2xl">
              <CardContent className="p-6">
                <Image
                  src="/cappuccino4.jpg"
                  width={400}
                  height={250}
                  alt="Cappuccino"
                  className="rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold mb-3">Cappuccino</h3>
                <p className="text-gray-600">
                  A perfect harmony of espresso, milk, and foam.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <Image
            src="/beans2.jpg"
            alt="Coffee Story"
            width={500}
            height={350}
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-5">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              CoffeeLab started with a simple passion: crafting exceptional 
              coffee that brings people together. We carefully select our beans 
              and roast them to perfection to ensure every sip is memorable.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              From farm to cup, our process focuses on sustainability, quality, 
              and artisan craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 text-lg mb-10">
            Have questions, feedback, or collaboration ideas?  
            We’d love to hear from you.
          </p>

          <Button className="bg-black text-white px-8 py-6 text-lg rounded-xl">
            Contact Us
          </Button>
        </div>
      </section>

    </main>
  );
}
