import { Check } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white mx-auto">
      <div className="w-full grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6 py-16 px-4 md:px-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
            Empowering every Student with personalized learning for lasting
            success
          </h1>
          <ul className="text-black space-y-2">
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-green-700 flex items-center justify-center p-1">
                <Check size={16} color="white" />
              </div>
              <span>Customized 1-on-1 support</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-green-700 flex items-center justify-center p-1">
                <Check size={16} color="white" />
              </div>
              <span>Expert educators with proven results</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-green-700 flex items-center justify-center p-1">
                <Check size={16} color="white" />
              </div>
              <span>Flexible learning options</span>
            </li>
          </ul>
          <Button className="bg-ff hover:bg-green-900 text-white !px-8 rounded-full cursor-pointer">
            Get Started Today
          </Button>
        </div>
        <div className="relative h-full">
          <Image
            src="/hero.png"
            alt="Student learning"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
