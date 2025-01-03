import { Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';

const socialIcons = [
  { icon: <Youtube />, href: '#' },
  { icon: <Instagram />, href: '#' },
  { icon: <Linkedin />, href: '#' },
  { icon: <Facebook />, href: '#' },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialIcons.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="w-10 h-10 rounded-full border border-mint/30 flex items-center justify-center text-mint-dark hover:bg-mint-dark hover:text-forest-light transition-all duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}