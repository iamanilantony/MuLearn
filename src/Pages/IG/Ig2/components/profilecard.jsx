import { Linkedin } from "lucide-react";
// import Image from "next/image";

export function ProfileCard({ name, role, imageUrl, hasLinkedin = true }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-white">
      <div className="relative h-12 w-12">
        <img
          src={imageUrl}
          alt={`${name}'s profile picture`}
          className="rounded-full object-cover"
          fill
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      {hasLinkedin && (
        <a
          href="#"
          className="p-2 text-gray-600 hover:text-gray-900"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <Linkedin className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}
