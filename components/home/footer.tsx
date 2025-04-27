import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-ff text-white py-16 px-4 md:px-16">
      <div className="w-full" data-aos="fade-up" data-aos-duration="1200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="w-fit flex flex-col items-center">
            <Image
              src="/ff-logo-white.png"
              alt="Milestone Learning"
              width={150}
              height={32}
              className="h-8"
            />
            <div className="flex gap-2 mt-4 justify-center">
              <Link href="#" className="text-white hover:text-green-200">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-green-200">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-green-200">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div>
            <Button className="bg-white text-black uppercase text-sm mb-4 rounded-full w-fit px-3 py-2 cursor-pointer">
              Book a consultation
            </Button>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  Book a Learning Session
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@milestonelearning.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-green-200">
            © {new Date().getFullYear()} Milestone Learning.
          </p>
          <div className="flex gap-6 text-sm text-green-200">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
